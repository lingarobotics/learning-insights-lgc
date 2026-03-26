# Debugging — Approach and System Thinking

---

## 1. Overview

Debugging in this system was not about fixing code randomly.

It required:

- identifying where the failure occurs  
- isolating the layer responsible  
- validating assumptions  
- using tools effectively  

---

## 2. Core Principle

Debugging is not guessing.

It is:

Observing → Locating → Verifying → Fixing

---

## 3. Using DevTools to Identify Issues

![Devtools debugging](assets/images/devtools-debugging-found-that-JS-module-error-browser-server-issue-fronend-not-rendered-but-solved-404-issue.png)

### What I did

I opened browser DevTools instead of guessing.

### What I saw

- Module script failed  
- MIME type error  

### What this means

- The issue is not React  
- The issue is in build or deployment  

---

## 4. Observing UI Failure

![Frontend blank issue](assets/images/frontend-ui-not-render-blank-issue.png)

### What I saw

- Page loaded  
- UI not rendered  

### Insight

A blank UI does not always mean frontend issue.

It can be:
- script failure  
- deployment issue  

---

## 5. Identifying Build Issues

![Build log error](assets/images/build-log-shows-error-due-to-npm-install-not-exists-in-vercel-ui.png)

### What I checked

Vercel build logs.

### What I saw

- vite command not found  

### Meaning

Dependencies were not installed.

---

## 6. Validating Rendering Issues

![Image rendering issue](assets/images/rendering-issue-happened-due-to-css-image-isthere-but-not-shown.png)

### What I saw

- Image exists  
- Image clickable  
- But not visible  

### Insight

If element exists but not visible:

→ It is a CSS problem, not data problem  

---

## 7. Debugging Strategy Used

Instead of guessing, I followed:

1. Observe the issue  
2. Check DevTools  
3. Identify the layer  
4. Verify cause  
5. Apply fix  

---

## 8. Layer-Based Debugging

Every issue belongs to a layer:

- Content (markdown)  
- API (data fetching)  
- Rendering (React)  
- Styling (CSS)  
- Deployment  

Correct debugging starts by identifying the layer.

---

## 9. Common Debugging Patterns

### Pattern — Blank UI

Check:
- DevTools console  
- script loading  

---

### Pattern — Image not visible

Check:
- DOM (inspect element)  
- CSS properties  

---

### Pattern — Build failure

Check:
- deployment logs  
- dependency installation  

---

## 10. Key Rules

1. Always check DevTools first  
2. Never assume the cause  
3. Identify the layer before fixing  
4. Fix one thing at a time  
5. Verify after fixing  

---

## 11. Final Understanding

Debugging is not fixing errors.

It is understanding system behavior.

With proper debugging:

- failures become predictable  
- fixes become controlled  
- systems become reliable  