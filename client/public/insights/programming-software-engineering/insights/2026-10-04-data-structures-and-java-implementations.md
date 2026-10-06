# Data Structures And Java Implementations

**Course Name:** Java: Data Structures  
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java data structures, I encountered an important distinction between a data structure as a concept and the Java class that implements that concept.

The data structure describes how data is organized and what behavior is expected.

Java then provides concrete classes that implement those data-structure concepts.

---

## New Learning

🆕 **New learning:** Java's collection interfaces can represent data-structure concepts, while concrete collection classes provide their implementations.

For example:

    Set<String> names = new HashSet<>();

Here:

    Set       → reference type / data-structure abstraction
    HashSet   → concrete implementation

The same abstraction can have multiple implementations.

For example:

    Set
     ├── HashSet
     ├── LinkedHashSet
     └── TreeSet

Similarly:

    Map
     ├── HashMap
     ├── LinkedHashMap
     └── TreeMap

And:

    List
     ├── ArrayList
     └── LinkedList

This means that the interface describes what kind of collection is being used, while the implementation determines how that collection actually works internally.

---

## One Object, Different Views

🆕 **New learning:** The same concrete object can be referenced through different compatible interface types.

For example:

    Queue<Character> q = new ArrayDeque<>();

Here:

    Queue       → reference type
    ArrayDeque  → actual object

The reference exposes the operations available through `Queue`.

If the same object is referenced as:

    Deque<Character> q = new ArrayDeque<>();

then the `Deque` operations become available through that reference.

The actual object remains an `ArrayDeque`.

The reference type determines the interface through which the object is being used.

---

## Why Multiple Implementations Matter

A data-structure concept does not necessarily have only one implementation.

For example, a Set can be implemented differently depending on the requirements.

    HashSet
        → hash-based organization

    TreeSet
        → sorted organization

    LinkedHashSet
        → maintains insertion order

The abstraction remains `Set`, but the implementation provides different characteristics.

Therefore, choosing a data structure and choosing a concrete implementation are related but distinct decisions.

---

## Where This Matters

This separation allows code to depend on an abstraction rather than unnecessarily depending on a specific implementation.

For example:

    Set<String> names = new HashSet<>();

The code can work with the Set abstraction while the implementation can be selected according to the required behavior.

This also makes the relationship between DSA concepts and Java's Collections Framework much clearer.

---

## Why People Get Stuck

It is easy to treat names such as `HashSet`, `TreeSet`, `ArrayList`, and `HashMap` as if they are the data structures themselves.

But there is a useful distinction:

    Data-structure concept
            ↓
       Interface
            ↓
    Concrete implementation

For example:

    Set → HashSet

The `Set` represents the abstraction and `HashSet` provides a particular implementation of that abstraction.

---

## Takeaway

🆕 The new learning was understanding the relationship between **data-structure abstractions and their concrete Java implementations**.

A useful mental model is:

**Interface → abstraction**

**Class → implementation**

For example:

    Set<String> names = new HashSet<>();

means:

> "I want to work with this object as a Set, and the actual implementation is HashSet."

This connects the conceptual world of data structures with the concrete classes provided by Java's Collections Framework.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`