# Failure & Fix — Deployment and Rendering Issues (My Debugging Journey)

---

## 1. Context

I built the Learn With Linga insights system using:

- React (Vite)
- Vercel serverless API
- Markdown-driven content

While deploying and building UI, I faced multiple failures.

This document is not theory.

It is exactly:
- What I faced
- How I debugged
- How I fixed it

---

## 2. Blank UI after deployment

![Frontend blank issue](/images/development-and-debugging-screenshots/frontend-ui-not-render-blank-issue.png)

### What I saw

I deployed the project.

The page opened, but:
- No UI
- Completely blank screen

### What I thought initially

I assumed:
- React rendering issue
- Component not working

### What was actually happening

I opened DevTools.

I saw:
- Failed to load module script
- MIME type error

That means:
- JS bundle itself was not loading

### Fix

I stopped checking React.

I started checking:
- Build output
- Static files

---

## 3. Build failed (vite not found)

![Build log error](/images/development-and-debugging-screenshots/build-log-shows-error-due-to-npm-install-not-exists-in-vercel-ui.png)

### What happened

During deployment:

vite: command not found

### What I realized

Build was running without installing dependencies.

### My mistake

I assumed:
Vercel installs dependencies automatically.

That assumption was wrong.

---

## 4. Wrong build command

![Wrong build config](/images/development-and-debugging-screenshots/install-command-is-vite-build-this-cause-issue-in-deploying.png)

### What I did

I set build command directly as:

npm run build

### Problem

Dependencies were not installed before running build.

---

## 5. Fix — Proper build pipeline

![Missing npm install](/images/development-and-debugging-screenshots/build-command-without-npm-install-so-deployment-failed-before-installing-dependencies.png)

### What I changed

I updated root package.json build script:

cd client && npm install && npm run build

### Result

Now:
- Dependencies installed
- Build executed correctly
- Deployment succeeded

---

## 6. DevTools debugging moment

![Devtools debugging](/images/development-and-debugging-screenshots/devtools-debugging-found-that-JS-module-error-browser-server-issue-fronend-not-rendered-but-solved-404-issue.png)

### What I checked

Instead of guessing, I opened DevTools.

### What I saw

- Module load failure
- Script not recognized

### What I understood

Logs tell what failed.

DevTools tells why it failed in browser.

---

## 7. Image not rendering (but clickable)

![Image rendering issue](/images/development-and-debugging-screenshots/rendering-issue-happened-due-to-css-image-isthere-but-not-shown.png)

### What I saw

- Image was not visible
- But when I clicked → zoom worked

### My confusion

I thought:
- Markdown issue
- Path issue

### Actual problem

It was CSS.

Image had:
- blur
- low opacity
- layout constraints

So:
Image existed → but visually hidden

---

## 8. Image too large issue

![Image size issue](/images/development-and-debugging-screenshots/css-style-making-issue-image-so-big-after-rendering-issue-be-solved-for-project-insights-on-26-03.png)

### What I saw

After fixing rendering:
- Image became too large
- Covered entire card

### Problem

No control on width

### Fix

I changed image styling:
- Controlled width
- Added preview feel
- Added zoom for full view

---

## 9. Navbar UX issue

![Navbar issue](/images/development-and-debugging-screenshots/navbar-existance-causes-issue-in-UX.png)

### What I observed

Navbar:
- Took attention away
- Reduced focus on content

### Decision

I removed it completely.

---

## 10. Result after removing navbar

![Navbar removed](/images/development-and-debugging-screenshots/navbar-removed-entirely-to-maintain-good-UX-and-this-image-is-production-one-vercel.png)

### Outcome

- Cleaner UI
- Better reading flow
- Focus on insights

---

## 11. Final fixes I applied

### Deployment fixes

- Added dependency installation before build
- Corrected build command
- Fixed output directory

### Rendering fixes

- Debugged using DevTools
- Fixed module loading issue
- Ensured correct static serving

### UI fixes

- Controlled image size
- Fixed CSS visibility issue
- Removed unnecessary UI (navbar)

---

## 12. What I learned

The failures were not random.

They came from:

- Wrong assumptions
- Skipping system steps
- Not understanding pipeline

---

## 13. My final understanding

Now I see clearly:

A working system depends on:

1. Correct build pipeline  
2. Proper dependency installation  
3. Valid static file serving  
4. Controlled UI rendering  

If one fails:

The entire system appears broken

Even if the code is correct