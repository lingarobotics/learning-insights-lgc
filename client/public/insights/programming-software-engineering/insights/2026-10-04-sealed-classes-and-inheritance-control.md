# Sealed Classes And Inheritance Control

**Course Name:** Java Essential Training: Objects and APIs  
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning inheritance, I encountered Java's sealed classes and how they can control which classes are allowed to extend a particular class.

This introduced a more controlled way of designing an inheritance hierarchy.

---

## New Learning

🆕 **New learning:** A `sealed` class can explicitly restrict which classes are allowed to directly extend it.

For example:

    sealed class Shape permits Rectangle, Circle {
    }

Only the classes listed in `permits` can directly extend `Shape`.

    class Rectangle extends Shape {
    }

    class Circle extends Shape {
    }

A class that is not permitted cannot directly extend the sealed class.

This means inheritance is no longer completely open.

---

## `sealed`, `final`, And `non-sealed`

🆕 **New learning:** A direct subclass of a sealed class must explicitly declare how its own inheritance should behave.

It can be:

### `final`

    final class Rectangle extends Shape {
    }

`final` means the class cannot be extended further.

### `sealed`

    sealed class Rectangle extends Shape
        permits Square {
    }

The subclass remains restricted and can define its own permitted subclasses.

### `non-sealed`

    non-sealed class Rectangle extends Shape {
    }

`non-sealed` explicitly reopens inheritance from that point.

The hierarchy can therefore be controlled at different levels.

---

## Inheritance Hierarchy

A sealed hierarchy can look like:

    Shape
      ├── Rectangle
      │     └── Square
      │
      └── Circle

If `Shape` permits `Rectangle` and `Circle`, another class cannot directly extend `Shape`.

However, if `Rectangle` is allowed to continue inheritance, its own subclass can extend `Rectangle`.

So the restriction applies to **direct subclasses** of the sealed class.

---

## Where This Matters

Sealed classes are useful when a developer knows the valid set of types that should belong to an inheritance hierarchy.

Instead of allowing any class to extend a base class, the hierarchy can explicitly define its permitted participants.

This gives the class designer more control over the structure of the type hierarchy.

---

## Why People Get Stuck

`sealed` can initially sound like `final`.

They are different.

`final` means:

    No subclass is allowed.

`sealed` means:

    Only specified subclasses are allowed.

`non-sealed` then provides an explicit way for a permitted subclass to reopen inheritance.

So these keywords control different levels of inheritance.

---

## Takeaway

🆕 The new learning was that Java provides **`sealed`, `final`, and `non-sealed`** to explicitly control inheritance hierarchies.

The core idea is:

**sealed → restrict who can extend**  
**final → stop inheritance**  
**non-sealed → reopen inheritance**

This makes inheritance structure an intentional part of class design.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`