# Syntax Correct Does Not Mean Business Correct

**Course Name:** Java Masterclass for Software Developers

**Platform:** Educative.io

---

## Context

While studying debugging concepts in Java, I encountered a cylinder volume example that initially appeared correct.

The program:

* Compiled successfully
* Executed successfully
* Produced numerical output

Nothing seemed wrong.

The formula used the Java library method:

```java
Math.pow()
```

to calculate the square of the cylinder radius.

However, the computed volume was incorrect.

---

## The Insight

I realized something important:

> Compiler correctness and business correctness are not the same thing.

The actual mistake was surprisingly small.

Instead of:

```java
Math.pow(radius, 2.0)
```

the program used:

```java
Math.pow(2.0, radius)
```

The arguments were accidentally reversed.

The compiler did not report any problem because:

* Both arguments were valid
* Both arguments had the correct data type
* The method invocation was syntactically correct

From Java's perspective:

```text
Syntax ✔
Types ✔
Method Call ✔
```

From the business perspective:

```text
Calculation ✘
```

This led to a broader realization:

> The compiler validates language rules. It does not validate business intent.

A program can satisfy every technical rule while still violating the actual requirement.

---

## Where This Matters

This pattern appears throughout software engineering.

### Backend Systems

A service receives valid requests and returns valid responses, but calculates tax, pricing, or business rules incorrectly.

### API Integrations

An API call succeeds while incorrect parameters produce unintended behavior.

### Database Applications

Queries execute successfully but return logically incorrect results because assumptions about the data were wrong.

### Cloud Services

Infrastructure deploys successfully while configuration mistakes cause incorrect runtime behavior.

The technology changes.

The pattern remains the same.

---

## Why People Get Stuck

Many developers stop validating once they see:

```text
Build Successful
```

or

```text
Program Executed Successfully
```

The assumption becomes:

> If the program runs, the solution must be correct.

But execution only proves that the system was able to perform an operation.

It does not prove:

* The logic is correct
* The formula is correct
* The requirement is satisfied
* The result is meaningful

This is why silent logical errors are often more dangerous than syntax errors.

The compiler can detect missing semicolons.

It cannot detect incorrect assumptions.

---

## Takeaway

> A successful compilation proves syntax. It does not prove correctness.

> Always validate results against business expectations, not just compiler output.
