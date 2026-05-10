# Failure & Fix — Engineering Thoughts Integration Rendering Issue

---

## 1. Context

I decided to integrate a new section into my portfolio:

> Engineering Thoughts

The purpose was not to showcase projects.

It was to represent:
- How I think
- How I approach engineering
- My reasoning style
- My mindset while building systems

The architecture used:
- React (Vite)
- Route-driven rendering
- Centralized thoughts data
- Static image delivery through `public/`

---

## 2. What failed

After building the feature:

- Images were not rendering
- Thought pages loaded
- Components rendered correctly
- But image sections appeared broken

This created confusion because:
- React routes were working
- Components existed
- Data structure looked correct

---

### Failure reference

![Engineering Thoughts image rendering failure](/images/development-and-debugging-screenshots/engineering-thoughts-images-not-rendering-due-to-runtime-public-root-mismatch.png)

---

## 3. My initial assumptions

Initially I thought:
- Import/export issue
- Wrong image path
- Incorrect prop name
- `slide.src` mismatch
- React rendering issue

So I started checking:
- Component props
- JSON structure
- Relative imports
- Rendering logic

---

## 4. What was actually happening

The issue was not:
- React
- Props
- Imports
- Component rendering

The actual issue was:

> Static assets were placed inside the wrong public root

I originally stored assets inside:

frontend/public/


But the Vite application itself was running from the project root.

That means:
- Static asset serving context changed
- Browser could not resolve assets correctly

---

## 5. Key realization

I realized:

> Static asset rendering depends on application runtime root, not just file existence

The files existed.

The paths looked correct.

But:
- Runtime serving context was wrong

---

## 6. Debugging shift

At first:
- I was guessing possible causes

Then I changed approach.

Instead of randomly changing code, I started narrowing system layers:
- Component layer
- Data contract layer
- Import layer
- Runtime serving layer

---

## 7. GitHub Copilot usage

During debugging, I leveraged GitHub Copilot.

Not for blindly generating fixes.

Instead:
- I used it to analyze the codebase structure
- Verify rendering contracts
- Cross-check architecture assumptions

This helped narrow the actual failure layer faster.

---

## 8. Actual fix

I moved static assets from:

frontend/public/


to:

public/


I performed the move through terminal commands instead of manual drag-and-drop operations.

After moving:
- Images rendered correctly
- Static serving worked
- Thought pages became fully functional

---

### Fix reference

![Engineering Thoughts rendering issue fixed after moving assets to correct public root](/images/development-and-debugging-screenshots/engineering-thoughts-rendering-fixed-after-moving-public-folder-assets.png)

---

## 9. Secondary issue — Tailwind & Stylelint

While refining styling, another issue appeared:

Unknown at-rule @tailwind


Initially this looked like:
- Tailwind issue
- CSS syntax issue

But actual problem was:
- Stylelint did not understand Tailwind directives

---

### Tooling issue reference

![Tailwind Stylelint unknown at-rule issue](/images/development-and-debugging-screenshots/stylelint-tailwind-unknown-rule-issue.png)

---

## 10. Fix applied

I added Stylelint configuration support using:

.stylelintrc.json


And configured:
- Tailwind directive handling
- Unknown at-rule suppression

---

### Tooling fix reference

![Stylelint configuration added for Tailwind directives](/images/development-and-debugging-screenshots/stylelint-config-added-for-tailwind-support.png)

---

## 11. What I learned

The failures were not caused by:
- Missing files
- Broken React code
- Wrong imports

They came from:
- Misunderstanding runtime context
- Incorrect assumptions about public asset serving
- Tooling configuration mismatch

---

## 12. My final understanding

I now see clearly:

> Correct code does not guarantee correct runtime behavior

And more importantly:

> Debugging improves when assumptions are reduced and system layers are isolated one by one

---

## 13. Takeaway

This integration was not just about adding a portfolio section.

It became a lesson in:
- Runtime context
- Static asset serving
- Tooling configuration
- AI-assisted debugging
- System-layer isolation

---

## Final Thought

I initially thought:

> “Image rendering is broken.”

But the actual issue was:

> I misunderstood where the application itself was being served from.
