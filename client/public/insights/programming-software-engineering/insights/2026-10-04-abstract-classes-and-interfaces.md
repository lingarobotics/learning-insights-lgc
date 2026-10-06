# Abstract Classes And Interfaces

**Course Name:** Java Essential Training: Objects and APIs
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning inheritance and object-oriented design, I encountered abstract classes, abstract methods, and interfaces.

The new learning was understanding the different roles they play in designing a class hierarchy and expressing shared behavior or contracts.

---

## New Learning

🆕 **New learning:** An abstract method can define what a subclass must provide without providing the implementation itself.

For example:

    abstract int calculateArea();

An abstract method has no method body.

A subclass is then responsible for providing the implementation.

Because of this, a class containing an abstract method must itself be abstract.

---

## Abstract Classes

🆕 **New learning:** An abstract class can act as a shared base for a family of related classes.

It can contain common state and behavior while also defining abstract methods that subclasses must implement.

Conceptually:

    Abstract Class
          ↓
    Shared characteristics
          +
    Required behavior
          ↓
    Concrete subclasses

An abstract class therefore provides both a common foundation and a structure for its subclasses.

---

## Interfaces

🆕 **New learning:** An interface can be used to define a contract that a class agrees to implement.

A class implementing an interface must provide implementations for its required abstract methods, unless that class is itself abstract.

For example:

    interface Printable {
        void print();
    }

    class Document implements Printable {
        public void print() {
            // implementation
        }
    }

The interface describes the required capability, while the implementing class provides the actual behavior.

---

## Multiple Interfaces

🆕 **New learning:** A Java class can implement multiple interfaces.

For example:

    class Document implements Printable, Exportable {
        // implementations
    }

This allows a class to satisfy multiple contracts without requiring multiple class inheritance.

The class can therefore combine different capabilities through interfaces.

---

## Interface Method Signature Overlap

🆕 **New learning:** If two interfaces require methods with the same signature, one implementation in the class can satisfy both interface requirements.

For example:

    interface A {
        void execute();
    }

    interface B {
        void execute();
    }

    class Example implements A, B {
        public void execute() {
            // one implementation
        }
    }

Because both interfaces require the same method signature, the single implementation satisfies both contracts.

If the method signatures differ, the class must provide the required methods separately.

---

## Abstract Class vs Interface

The mental model that emerged was:

    Abstract class
        ↓
    Shared base / family

    Interface
        ↓
    Contract / capability

An abstract class is useful when classes share a common conceptual foundation and potentially common implementation.

An interface is useful when different classes need to agree to a particular behavior or capability.

---

## Where This Matters

These concepts are useful when designing object-oriented systems where behavior needs to be shared, required, or combined across different classes.

Abstract classes help structure related classes.

Interfaces allow classes to satisfy one or more contracts.

Together, they provide different ways to express relationships and responsibilities in an object-oriented design.

---

## Why People Get Stuck

Abstract classes and interfaces can initially look similar because both can contain abstract methods.

The important distinction is their design role.

An abstract class represents a shared base and can contain common implementation.

An interface primarily expresses a contract that implementing classes agree to fulfill.

The question is therefore not simply:

> "Which syntax should I use?"

It is:

> "Am I modelling a shared base, or am I defining a contract/capability?"

---

## Takeaway

🆕 The new learning was understanding how **abstract classes and interfaces** provide different forms of structure in Java.

**Abstract class → shared base / family**

**Interface → contract / capability**

A class can implement multiple interfaces, and matching interface method signatures can be satisfied by one implementation.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`
GitHub: `github.linga.engineer`
LinkedIn: `linkedin.linga.engineer`
LeetCode: `leetcode.linga.engineer`
Blogs: `blogs.linga.engineer`
Email: `contact@linga.engineer`