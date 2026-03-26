# Project Insight — Deployment, System Thinking & Real Failures

---

## 1. Context

I built my own platform:

Learn With Linga — a system focused on reasoning-based learning.

The architecture:

- Frontend → React (Vite)
- Backend → Vercel serverless (api/)
- Content → Markdown files inside public/insights

Goal:

> Write markdown → convert to JSON → render structured insights UI

---

## What I initially thought

I assumed deployment is simple:

- Build frontend
- Push to Vercel
- Everything works

This assumption turned out to be wrong.

---

## What actually happened

Instead of working:

- UI showed blank screen
- Build failed
- Images didn’t load
- API behaved inconsistently

At first, I treated these as separate problems.

---

## Shift in thinking

I stopped asking:

- “What error is this?”

And started asking:

- “How is this system working internally?”
- “Where is the pipeline breaking?”
- “What is actually being served to the browser?”

---

## 2. The Insight

I realized:

> Deployment is not a step — it is a system pipeline

And more importantly:

> If the system is not understood, fixing errors becomes guessing

---

## The actual pipeline I understood

Deployment is:

1. Install dependencies  
2. Run build (Vite)  
3. Generate output (dist)  
4. Serve static files  
5. Resolve API routes  
6. Load assets (images, JS, CSS)  

If any step fails:

> Entire system fails silently

---

## 3. Observed Failures (Real Debugging)

---

### Failure 1 — Blank UI after deployment

![Frontend blank issue](/images/development-and-debugging-screenshots/frontend-ui-not-render-blank-issue.png)

---

### My thinking

Initially I thought:

- React issue  
- Component not rendering  

But real cause was:

> JS bundle was not loaded at all

---

### Failure 2 — Build failure

![Build error](/images/development-and-debugging-screenshots/build-log-shows-error-due-to-npm-install-not-exists-in-vercel-ui.png)

Error:

vite: command not found

---

### My realization

> Build was running without installing dependencies

---

### Failure 3 — Wrong build configuration

![Wrong build config](/images/development-and-debugging-screenshots/install-command-is-vite-build-this-cause-issue-in-deploying.png)

---

### Core mistake

I assumed:

> Vercel automatically installs dependencies

But actually:

> Build command must explicitly include installation

---

### Failure 4 — Missing install step

![Missing npm install](/images/development-and-debugging-screenshots/build-command-without-npm-install-so-deployment-failed-before-installing-dependencies.png)

---

### Realization

> Build ≠ compile  
> Build = install + compile + output

---

### Failure 5 — DevTools revealed real issue

![Devtools debugging](/images/development-and-debugging-screenshots/devtools-debugging-found-that-JS-module-error-browser-server-issue-fronend-not-rendered-but-solved-404-issue.png)

Error:

Failed to load module script due to incorrect MIME type

---

### Insight

Logs told me:

- build failed

DevTools told me:

- browser cannot load JS module

> DevTools is closer to reality than logs

---

### Failure 6 — Images not rendering

This was a major confusion point.

---

### My assumption

Markdown or ReactMarkdown issue.

---

### Actual issue

> Wrong static path mapping

Key realization:

- Files inside `public/` are served from root `/`
- Folder structure defines URL

---

### Correct mapping

If file is:

public/images/example.png

Then URL is:

/images/example.png

---

### Insight

> Static files are not “imported” — they are “served”

---

### Failure 7 — UX issue (navigation distraction)

![Navbar issue](/images/development-and-debugging-screenshots/navbar-existance-causes-issue-in-UX.png)

---

### Fix applied

![Navbar removed](/images/development-and-debugging-screenshots/navbar-removed-entirely-to-maintain-good-UX-and-this-image-is-production-one-vercel.png)

---

### Insight

> UX is not design — it is control over user attention

---

### Failure 8 — Date had no visual meaning

![Date issue](/images/development-and-debugging-screenshots/date-in-dsa-page-on-25-march-has-no-badge-style.png)

---

### Insight

> Information without hierarchy is ignored

---

## 4. Where this matters

This directly connects to real systems.

In production:

- Wrong build → app breaks
- Wrong path → assets missing
- Wrong config → deployment fails

---

### Real-world mapping

This is exactly how systems fail in companies:

- CI/CD misconfiguration
- Incorrect build pipeline
- Static asset path issues
- Routing mismatch

---

## 5. Why people get stuck

Most people:

- Focus only on frontend code
- Ignore build system
- Ignore deployment pipeline

Common mistakes:

- Treat deployment as final step
- Debug UI instead of system
- Ignore DevTools

---

## 6. My Learning Approach

I changed how I debug:

Instead of:

- Fix error → move on

I now:

- Trace system flow
- Identify pipeline stage
- Understand failure cause

---

### Trade-off I learned

> Fixing fast gives relief  
> Understanding deeply gives control  

---

## 7. Builder Insight (What I Wish I Knew Earlier)

Before deploying any system, check:

- Does build include dependency installation?
- Where is output generated?
- What directory is served?
- How are static files mapped?
- Does browser actually load JS?

---

### Key shift

Stop asking:

- “Why is UI not rendering?”

Start asking:

- “What is the browser actually receiving?”

---

## 8. Takeaway

> Deployment is a system, not a step

> Errors are symptoms — system understanding is the cure

> If UI is blank, don’t debug UI — debug pipeline

---

## Final Thought

This project was not about fixing bugs.

It was about:

> Moving from coding → system thinking

---