# Yield Returns Values From Switch Case Blocks

**Course Name:** Java Essential Training: Syntax and Structure

**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning about switch expressions, I understood that the arrow syntax can directly produce a value.

For a simple case, this is straightforward:

    case "A" -> "Great Job";

But then I encountered another situation.

What if a case needs to execute more than one statement before producing its result?

That introduced me to `yield`.

---

## The Insight

A simple switch-expression case can directly provide its value:

    String message = switch (grade) {
        case "A" -> "Great Job";
        case "B" -> "Good Job";
        default -> "Keep Trying";
    };

But sometimes the logic inside a case cannot be represented by a single expression.

A case may need a block:

    case "A" -> {
        String message = "Great Job";
        yield message;
    }

Here, `yield` provides the value produced by that case block back to the switch expression.

My mental model became:

    Enter matching case
            ↓
    Execute statements
            ↓
    Determine result
            ↓
          yield
            ↓
    Switch expression receives value

This helped me understand why `yield` exists.

The switch expression still needs to produce a value, but a multi-statement block needs a way to explicitly say:

> This is the value this case produces.

---

## Return And Yield Are Not The Same

Initially, `yield` can look somewhat similar to `return` because both are associated with producing a value.

But their destinations are different.

    return
       ↓
    value goes back from the method

    yield
       ↓
    value goes back to the switch expression

So `yield` does not mean:

> End this method and return this value.

Instead, in this context, it means:

> This is the result of this switch case block.

That distinction gave me a clearer way to reason about switch expressions containing multiple statements.

---

## Where This Matters

For very simple decisions, the direct arrow form is enough:

    case "A" -> "Great Job";

But when additional work has to happen before determining the value, a block becomes useful.

For example:

    case "A" -> {
        String result = "Great Job";
        System.out.println("Grade processed");
        yield result;
    }

The case can perform its required statements and still participate in a switch expression that must eventually produce a value.

---

## Why People Get Stuck

It is easy to understand:

    case "A" -> "Great Job";

because the value is visible immediately.

A block changes that:

    case "A" -> {
        ...
        ...
    }

Now Java needs to know what value that block contributes to the overall switch expression.

That is where `yield` fits.

The important question became:

> What value should this case block give back to the switch expression?

---

## Takeaway

> `yield` allows a multi-statement case block to provide its result to a switch expression.

The important learning for me was understanding where that value goes.

`return` returns from a method.

`yield` provides the result of the case block to the surrounding switch expression.

---

## Author

**Ramalingam Jayavelu**

Portfolio: linga.engineer  
GitHub: github.linga.engineer  
LinkedIn: linkedin.linga.engineer  
LeetCode: leetcode.linga.engineer  
Blogs: blogs.linga.engineer  
Email: contact@linga.engineer