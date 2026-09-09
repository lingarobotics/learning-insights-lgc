const fs = require('node:fs');
const path = require('node:path');

const repositoryRoot = path.resolve(__dirname, '..');
const articleFilenamePattern = /^\d{4}-\d{2}-\d{2}-/;
const authorHeadingPattern = /^[ \t]{0,3}##[ \t]+Author(?:[ \t]+#+)?[ \t]*$/gim;
const footer = [
  '---',
  '',
  '## Author',
  '',
  '**Ramalingam Jayavelu**',
  '',
  'Portfolio: [linga.engineer](https://linga.engineer)  ',
  'GitHub: [github.linga.engineer](https://github.linga.engineer)  ',
  'LinkedIn: [linkedin.linga.engineer](https://linkedin.linga.engineer)  ',
  'LeetCode: [leetcode.linga.engineer](https://leetcode.linga.engineer)  ',
  'Blogs: [blogs.linga.engineer](https://blogs.linga.engineer)  ',
  'Email: [contact@linga.engineer](mailto:contact@linga.engineer)',
  '',
].join('\n');
const legacyFooter = [
  '---',
  '',
  '## Author',
  '',
  '**Ramalingam Jayavelu**',
  '',
  'Portfolio: [linga.engineer](https://linga.engineer)',
].join('\n');
const currentFooter = [
  '---',
  '',
  '## Author',
  '',
  '**Ramalingam Jayavelu**',
  '',
  'Portfolio: [linga.engineer](https://linga.engineer)',
  'GitHub: [github.linga.engineer](https://github.linga.engineer)',
  'LinkedIn: [linkedin.linga.engineer](https://linkedin.linga.engineer)',
  'LeetCode: [leetcode.linga.engineer](https://leetcode.linga.engineer)',
  'Blogs: [blogs.linga.engineer](https://blogs.linga.engineer)',
  'Email: [contact@linga.engineer](mailto:contact@linga.engineer)',
].join('\n');
const currentFooterWithFourHyphens = currentFooter.replace(/^---/, '----');
const currentFooterWithHardBreaks = currentFooter
  .split('\n')
  .map((line) => /^(Portfolio|GitHub|LinkedIn|LeetCode|Blogs|Email):/.test(line) && !line.endsWith('  ') ? `${line}  ` : line)
  .join('\n');
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', 'build']);

function relativePath(filePath) {
  return path.relative(repositoryRoot, filePath).split(path.sep).join('/');
}

function findMarkdownFiles(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMarkdownFiles(entryPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(entryPath);
    }
  }

  return files;
}

function countAuthorSections(content) {
  authorHeadingPattern.lastIndex = 0;
  return [...content.matchAll(authorHeadingPattern)].length;
}

function appendFooter(content) {
  if (content.length === 0) {
    return footer;
  }

  const separator = content.endsWith('\n\n') ? '' : content.endsWith('\n') ? '\n' : '\n\n';
  return `${content}${separator}${footer}`;
}

function replaceLegacyFooter(content) {
  const footerCandidates = [
    legacyFooter,
    currentFooter,
    currentFooterWithFourHyphens,
    currentFooterWithHardBreaks,
  ];

  for (const lineEnding of ['\n', '\r\n']) {
    const footerWithLineEnding = footer.replaceAll('\n', lineEnding);
    for (const candidate of footerCandidates) {
      const candidateWithLineEnding = candidate.replaceAll('\n', lineEnding);
      if (content.endsWith(candidateWithLineEnding) || content.endsWith(`${candidateWithLineEnding}${lineEnding}`)) {
        return `${content.slice(0, -candidateWithLineEnding.length)}${footerWithLineEnding}`;
      }
    }
  }

  return null;
}

function printSection(title, files) {
  console.log(`${title} (${files.length})`);
  for (const file of files) {
    console.log(`${file.status}\t${file.path}`);
  }
}

const dryRun = process.argv.includes('--dry-run');
const markdownFiles = findMarkdownFiles(repositoryRoot).sort((left, right) => relativePath(left).localeCompare(relativePath(right)));
const datedArticles = [];
const ignoredFiles = [];
const skippedFiles = [];
const filesToModify = [];
const duplicateAuthorFiles = [];

for (const filePath of markdownFiles) {
  const file = { path: relativePath(filePath), status: 'IGNORED' };

  if (!articleFilenamePattern.test(path.basename(filePath))) {
    ignoredFiles.push(file);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  datedArticles.push({ path: file.path, filePath });

  const authorSectionCount = countAuthorSections(content);
  if (authorSectionCount > 1) {
    duplicateAuthorFiles.push(file.path);
  }

  const updatedContent = replaceLegacyFooter(content);
  if (updatedContent !== null) {
    filesToModify.push({ path: file.path, filePath, status: 'MODIFIED', content: updatedContent });
    continue;
  }

  if (authorSectionCount > 0) {
    skippedFiles.push({ path: file.path, status: 'SKIPPED' });
    continue;
  }

  filesToModify.push({ path: file.path, filePath, status: 'MODIFIED' });
}

console.log(`Dated article files detected (${datedArticles.length})`);
for (const article of datedArticles) {
  console.log(`ARTICLE\t${article.path}`);
}
printSection('Files skipped because an Author section already exists', skippedFiles);
printSection(dryRun ? 'Files that would be modified' : 'Files modified', filesToModify);
printSection('Markdown files ignored because they are not dated articles', ignoredFiles);
console.log(`Duplicate Author sections detected (${duplicateAuthorFiles.length})`);
for (const file of duplicateAuthorFiles) {
  console.log(`DUPLICATE\t${file}`);
}

if (!dryRun) {
  for (const file of filesToModify) {
    const content = fs.readFileSync(file.filePath, 'utf8');
    fs.writeFileSync(file.filePath, file.content ?? appendFooter(content), 'utf8');
  }
}