# Multiple Case Labels In Switch

**Course Name:** Java Essential Training: Syntax and Structure

**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning about `switch` expressions, I learned that multiple case labels can be combined when they should lead to the same result.

Previously, I would think of each `case` as representing one possible value.

This showed me that several values can share the same case logic.

---

## The Insight

Java allows multiple case labels to be written together:

    case "A", "B" -> "Great Job";

This means:

    "A"
      OR
    "B"
      ↓
    "Great Job"

The values do not need separate cases when their outcome is identical.

Instead of writing:

    case "A" -> "Great Job";
    case "B" -> "Great Job";

I can express the same decision as:

    case "A", "B" -> "Great Job";

This made the relationship between the possible input values and the resulting behavior more explicit.

---

## Where This Matters

This is useful when multiple inputs should produce the same outcome.

Instead of duplicating the same logic:

    Input A → Same action
    Input B → Same action

the cases can be grouped:

    Input A
        \
         → Same action
        /
    Input B

The code therefore represents the decision more directly.

---

## Why People Get Stuck

It is easy to assume that every possible value needs its own `case`.

But if several values have identical behavior, separating them creates unnecessary repetition.

The important idea is:

> Different inputs do not always require different branches.

If the outcome is the same, the cases can be grouped.

---

## Takeaway

> Multiple case labels allow different input values to share the same `switch` behavior without duplicating the case logic.

This was a small syntax feature, but it made me think more clearly about grouping conditions that have the same outcome.

---

## Author

**Ramalingam Jayavelu**

Portfolio: linga.engineer  
GitHub: github.linga.engineer  
LinkedIn: linkedin.linga.engineer  
LeetCode: leetcode.linga.engineer  
Blogs: blogs.linga.engineer  
Email: contact@linga.engineer