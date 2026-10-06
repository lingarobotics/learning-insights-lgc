# Exception Handling And Error Control

**Course Name:** Java Essential Training: Objects and APIs
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java exception handling, I encountered several concepts around how Java represents errors, how exceptions are handled, how resources are managed, and how exceptions can be created and propagated.

The new learning was understanding the different roles of `catch`, checked and unchecked exceptions, `finally`, try-with-resources, `throw`, `throws`, custom exceptions, and rethrowing.

---

## New Learning

### 1. The Exception Object In `catch`

🆕 **New learning:** The variable declared in a `catch` block refers to the actual exception object that was thrown.

For example:

    catch (Exception e) {
        System.out.println(e.getMessage());
    }

Here, `e` is a reference to the exception object.

It can therefore be used to inspect information about the exception.

---

### 2. Checked And Unchecked Exceptions

🆕 **New learning:** Java separates exceptions into checked and unchecked categories with different compiler behavior.

Checked exceptions must be handled or declared.

Examples include:

    IOException
    FileNotFoundException
    SQLException

Unchecked exceptions are subclasses of `RuntimeException`.

Examples include:

    NullPointerException
    ArithmeticException
    ArrayIndexOutOfBoundsException
    ClassCastException

The compiler does not force explicit handling or declaration of unchecked exceptions.

---

### 3. `finally`

🆕 **New learning:** A `finally` block is used for code that should execute regardless of whether the `try` block succeeds or an exception is caught.

Conceptually:

    try {
        // operation
    } catch (Exception e) {
        // handle exception
    } finally {
        // cleanup
    }

The `finally` block is therefore associated with cleanup or actions that should occur after the try/catch processing.

If the `finally` block itself throws an exception, that exception can escape unless it is handled separately.

---

### 4. Try-With-Resources

🆕 **New learning:** Try-with-resources automatically closes resources that implement `AutoCloseable`.

For example:

    try (SomeResource resource = new SomeResource()) {
        // use resource
    }

The resource is automatically closed when execution leaves the try block.

This avoids having to manually perform the cleanup in a separate block.

---

### 5. `throw` vs `throws`

🆕 **New learning:** `throw` and `throws` have different purposes.

`throw` actually throws an exception:

    throw new IllegalArgumentException("Invalid value");

`throws` declares that a method may allow an exception to propagate:

    void readFile() throws IOException {
        // ...
    }

So:

    throw  → perform the throwing
    throws → declare the possibility

---

### 6. Explicitly Throwing Business-Rule Errors

🆕 **New learning:** A program can explicitly throw an exception when an input violates a rule represented by the application.

For example:

    if (age < 18) {
        throw new IllegalArgumentException("Age is not valid");
    }

A custom exception can also be created by extending `Exception` or `RuntimeException`.

However, not every business-rule violation necessarily needs to be represented as an exception.

The decision depends on the application's design and the meaning of the situation.

---

### 7. Rethrowing Exceptions

🆕 **New learning:** An exception can be caught and then rethrown.

For example:

    try {
        // operation
    } catch (Exception e) {
        // log or add context
        throw e;
    }

This allows the current layer to perform some handling or logging while still allowing the exception to propagate to a higher layer.

---

## Where This Matters

Exception handling is not simply about preventing the program from crashing.

It provides a mechanism for representing exceptional situations, handling them at appropriate boundaries, cleaning up resources, and allowing errors to propagate when the current layer cannot meaningfully resolve them.

The concepts connect as:

    Exception occurs
          ↓
    catch / handle
          ↓
    cleanup if required
          ↓
    handle or rethrow

---

## Why People Get Stuck

Several exception keywords look similar but perform completely different jobs.

    try       → code that may produce an exception
    catch     → handle a thrown exception
    finally   → execute cleanup/final processing
    throw     → explicitly throw an exception
    throws    → declare possible propagation

Similarly, checked and unchecked exceptions differ mainly in how the compiler requires them to be handled or declared.

Understanding the responsibility of each mechanism is more useful than memorizing the keywords independently.

---

## Takeaway

🆕 The new learning was understanding Java's exception-handling mechanisms as different tools for different responsibilities.

**`catch` → handle an exception**

**checked exception → compiler requires handling/declaration**

**`finally` → guaranteed cleanup/final processing**

**try-with-resources → automatic resource closing**

**`throw` → explicitly throw**

**`throws` → declare propagation**

**rethrow → allow the exception to continue upward**

Exception handling therefore becomes part of designing how a program responds to failure, rather than simply adding `try-catch` blocks everywhere.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`
GitHub: `github.linga.engineer`
LinkedIn: `linkedin.linga.engineer`
LeetCode: `leetcode.linga.engineer`
Blogs: `blogs.linga.engineer`
Email: `contact@linga.engineer`