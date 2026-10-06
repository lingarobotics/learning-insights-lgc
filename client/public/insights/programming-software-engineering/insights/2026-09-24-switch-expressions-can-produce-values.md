# Switch Expressions Can Produce Values

**Course Name:** Java Essential Training: Syntax and Structure

**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning about decision structures in Java, I was already familiar with using `switch` to control which block of code should execute.

What was new to me was that Java also supports **switch expressions**.

This changed how I looked at `switch`.

Instead of only using a `switch` to decide what action should happen, a switch can also **produce a value** that can be assigned or used directly.

---

## The Insight

A traditional `switch` statement is mainly about controlling execution.

A switch expression works differently because the `switch` itself can produce a value.

    Switch Statement
            ↓
       Perform an action

    Switch Expression
            ↓
        Produce a value

For example:

    String message = switch (grade) {
        case "A" -> "Great Job";
        case "B" -> "Good Job";
        default -> "Keep Trying";
    };

I also learned that the arrow form (`->`) does not require `break`, because the case does not fall through into the next case.

Multiple case labels can also produce the same result:

    case "A", "B" -> "Good Job";

This means either `"A"` or `"B"` matches the same case.

When a case needs multiple statements, `yield` can be used to provide the value produced by that case:

    case "A" -> {
        String result = "Great Job";
        yield result;
    }

These concepts together gave me a different way of thinking about `switch`.

It is not only a control-flow statement.

It can also be an expression that **evaluates to a value**.

---

## Where This Matters

This becomes useful when a decision directly determines a value.

Instead of separating the decision from the assignment, a switch expression allows both to be represented together.

    Make a decision
          ↓
    Produce the required value

The decision and its resulting value become part of the same expression.

---

## Why People Get Stuck

It is easy to think of every `switch` as a statement because that is how it is commonly introduced.

The syntax looks similar, but the mental model is different:

    Statement  → performs something

    Expression → produces something

Understanding this distinction made the newer switch syntax easier to reason about.

---

## Takeaway

> A `switch` does not have to only control execution. It can also produce a value.

The important learning was not simply another `switch` syntax, but understanding the difference between a statement that performs an action and an expression that produces a value.

---

## Author

**Ramalingam Jayavelu**

Portfolio: linga.engineer  
GitHub: github.linga.engineer  
LinkedIn: linkedin.linga.engineer  
LeetCode: leetcode.linga.engineer  
Blogs: blogs.linga.engineer  
Email: contact@linga.engineer