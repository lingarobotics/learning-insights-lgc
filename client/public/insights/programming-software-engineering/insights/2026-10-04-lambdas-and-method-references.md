# Lambdas And Method References

**Course Name:** Java Essential Training: Objects and APIs
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java Collections and APIs, I encountered lambda expressions, method references, and methods such as `forEach()`.

The new learning was understanding how Java can represent behavior as an argument and how method references provide a shorter way to express existing methods.

---

## New Learning

### 1. Lambda Expressions

🆕 **New learning:** A lambda expression provides a concise way to represent behavior that can be passed to a method.

For example:

    (k, v) -> System.out.println(k + " = " + v)

The parameters and the expression together describe what should happen when the lambda is executed.

A lambda can therefore be thought of as passing behavior rather than only passing data.

---

### 2. `Map.forEach()` Receives Key and Value

🆕 **New learning:** `Map.forEach()` supplies the key and value to the lambda in that order.

For example:

    map.forEach((k, v) -> {
        System.out.println(k);
        System.out.println(v);
    });

Here:

    k → key
    v → value

The variable names themselves are arbitrary.

This:

    (k, v) -> ...

and:

    (key, value) -> ...

represent the same parameter positions.

---

### 3. Method References

🆕 **New learning:** The `::` operator can create a method reference as a concise alternative to a lambda that simply calls an existing method.

For example:

    System.out::println

can represent behavior similar to:

    value -> System.out.println(value)

The method reference does not execute the method immediately. It refers to the existing method so that it can be used where the required functional behavior is expected.

Another example is:

    Math::round

which refers to the `round` method.

Calling the method directly is different:

    Math.round(4.6)

The distinction is:

    Math::round      → method reference
    Math.round(4.6)  → method invocation

---

### 4. `forEach()` vs Enhanced `for`

🆕 **New learning:** `forEach()` and the enhanced `for` loop can both traverse elements, but they provide different programming models.

Enhanced `for`:

    for (String fruit : fruits) {
        System.out.println(fruit);
    }

`forEach()`:

    fruits.forEach(fruit -> System.out.println(fruit));

The enhanced `for` loop is a language-level loop and supports control-flow statements such as `break` and `continue`.

A lambda passed to `forEach()` does not provide the same direct loop-control mechanism.

A `return` inside the lambda returns from the lambda execution, not from the surrounding method.

---

## Where This Matters

These features allow Java APIs to accept behavior as an argument.

The progression can be viewed as:

    Existing method
          ↓
    Method reference

or:

    Custom behavior
          ↓
    Lambda expression
          ↓
    API executes that behavior

This is particularly useful throughout the Collections API.

---

## Why People Get Stuck

Lambda syntax can initially look like an entirely different kind of programming.

But the important idea is that a lambda describes behavior that another method can execute.

Similarly, `::` can look mysterious until it is understood as a reference to an existing method.

For example:

    fruit -> System.out.println(fruit)

can be shortened to:

    System.out::println

when the required parameter and return behavior match.

---

## Takeaway

🆕 The new learning was understanding how Java represents behavior using **lambda expressions** and **method references**, and how APIs such as `forEach()` consume that behavior.

The mental model is:

**Lambda → describe behavior**

**Method reference → refer to existing behavior**

**`forEach()` → execute supplied behavior for each element**

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`
GitHub: `github.linga.engineer`
LinkedIn: `linkedin.linga.engineer`
LeetCode: `leetcode.linga.engineer`
Blogs: `blogs.linga.engineer`
Email: `contact@linga.engineer`