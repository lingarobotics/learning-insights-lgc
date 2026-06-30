# Correctness vs Robustness

**Course Name:** Java Masterclass for Software Developers

**Platform:** Educative.io

**GitHub Repository for Documentation:**
https://github.com/lingarobotics/educative-learning-journey

---

## Context

While learning about Java debugging, string processing, `substring()`, `charAt()`, `toString()`, and the introduction to decision making, I noticed that the course intentionally introduced several bugs into a working program.

The program was supposed to:

* Read a person's full name
* Extract the first and last names
* Compute the name length
* Display the initials

Instead of immediately presenting the correct solution, the lesson walked through multiple incorrect implementations, fixing one problem at a time.

Eventually, another input exposed an entirely different issue: leading spaces caused the program to fail even though the previous bugs had already been fixed.

---

## The Insight

I realized something important:

> A program being correct for one input does not make it a reliable program.

Every version of the program solved one problem while unintentionally exposing another.

Fixing incorrect indices solved one bug.

Understanding how `substring()` actually works solved another.

Adding debug statements revealed incorrect assumptions.

Finally, trimming unexpected user input made the program robust.

This led to a larger realization:

> Correctness answers whether a program works.

> Robustness answers whether it continues to work when reality becomes messy.

```text
Expected Input
vs
Unexpected Input

Passing Tests
vs
Handling Edge Cases

Correct Algorithm
vs
Reliable Software
```

Good software is not simply software that works.

It is software that continues working when users behave differently than expected.

---

## Where This Matters

This pattern appears throughout software engineering.

### Backend APIs

Services should validate requests instead of assuming clients always send valid data.

### User Interfaces

Applications should gracefully handle empty fields, invalid formats, and unexpected interactions.

### Databases

Queries should anticipate missing or inconsistent data instead of assuming every record is perfect.

### Distributed Systems

Services should tolerate temporary failures, retries, and unavailable dependencies instead of assuming every network call succeeds.

### Debugging

Engineers should verify assumptions using logs and debugging output rather than guessing where problems exist.

The technology changes.

The mindset remains the same.

---

## Why People Get Stuck

Many beginners assume:

> If the program works for the example input, the problem is solved.

In reality:

```text
Correctness

Reliability

Robustness

Maintainability

Defensive Programming
```

are different concerns.

Programs often fail not because the algorithm is wrong, but because assumptions about input, APIs, or runtime behavior turn out to be incorrect.

Beginners often ask:

> Does it work?

Experienced engineers also ask:

> What assumptions am I making?

> What happens if those assumptions are violated?

> How can I verify my assumptions instead of guessing?

Reliable software comes from questioning assumptions, not just writing code.

---

## Takeaway

> Correct programs solve expected cases. Robust programs survive unexpected ones.

> Good engineering is not just about making software work. It is about making software continue working when reality refuses to cooperate.