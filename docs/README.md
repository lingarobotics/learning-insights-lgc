# Documentation — Learn With Linga

This folder contains structured documentation of the Learn With Linga system.

It is not a feature showcase.

It is a record of:
- how the system is built  
- how it behaves  
- where it failed  
- how it was fixed  

---

## Purpose

This documentation exists to:

- Track system evolution  
- Capture real debugging processes  
- Preserve architectural decisions  
- Provide clarity on internal behavior  

---

## Structure

### SYSTEM.md

Explains how the system works.

Includes:
- architecture  
- data flow  
- frontend + backend interaction  
- design decisions  

---

### DEPLOYMENT.md

Documents deployment process and issues.

Includes:
- build pipeline  
- Vercel configuration  
- dependency handling  
- deployment failures and fixes  

---

### RENDERING.md

Explains how content is rendered.

Includes:
- markdown → UI pipeline  
- ReactMarkdown behavior  
- image handling  
- styling decisions  

---

### DEBUGGING.md

Captures debugging approach and tools.

Includes:
- DevTools usage  
- identifying root causes  
- debugging patterns  

---

## FAILURES/

Contains real failure logs.

Each file documents:
- what failed  
- why it failed  
- how it was fixed  

Files are grouped by domain:

- deployment.md  
- rendering.md  
- ui.md  

---

## SYSTEM_EVOLUTION.md

Tracks how the system evolved over time.

Includes:
- UI changes  
- architectural shifts  
- major decisions  
- iteration history  

---

## How to Use

- Start with SYSTEM.md to understand the system  
- Refer FAILURES/ when debugging issues  
- Use DEPLOYMENT.md and RENDERING.md for specific pipelines  
- Use SYSTEM_EVOLUTION.md to understand design changes  

---

## Important Note

This documentation focuses on:

- system behavior over features  
- reasoning over implementation  
- debugging over demonstration  

It is intended to reflect real engineering work, not idealized outcomes