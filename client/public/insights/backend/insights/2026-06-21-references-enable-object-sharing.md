# References Enable Object Sharing

**Course Name:** Java Masterclass for Software Developers

**Platform:** Educative.io

---

## Context

While learning about arrays of objects and passing arrays to methods in Java, I encountered an important concept that initially seemed confusing: arrays of objects do not store objects themselves—they store references to objects.

This led me to explore what a reference actually is, why Java uses references instead of copying objects, and how multiple variables or arrays can interact with the same object instance.

---

## The Insight

I realized something important:

> References are not the objects themselves. They are paths to reach the objects.

An object is created only once.

```java
Student s = new Student();
```

Variables such as `s`, array elements like `students[0]`, or method parameters do not contain the object. They contain references that point to the object.

This means multiple references can access the same object simultaneously.

```text
Student s = new Student();

classA[0] = s;
classB[0] = s;
```

All three references point to the same object.

When one reference modifies the object:

```java
classA[0].setName("Helena");
```

every other reference observes the updated state because there is still only one underlying object.

This led to a larger realization:

> Engineering often avoids copying expensive data structures by sharing them through references.

```text
Copy Objects
vs
Share References

Duplicate State
vs
Single Source of Truth

Higher Memory Usage
vs
Efficient Memory Usage
```

References make it possible for different parts of a program to collaborate on the same data without unnecessary duplication.

---

## Where This Matters

This pattern appears throughout software engineering.

### Backend Systems

Services frequently pass references to dimension objects between controllers, services, and repositories instead of copying entire objects.

### Databases

Relationships are represented through primary keys and foreign keys rather than duplicating complete records across tables.

### Caching Systems

Multiple components can reference the same cached object instead of maintaining separate copies.

### Frontend Applications

Different components may reference the same application state so updates are reflected consistently throughout the UI.

### Distributed Systems

Systems exchange identifiers and references to resources rather than transmitting complete datasets whenever possible, reducing communication overhead.

The technology changes.

The concept remains the same.

---

## Why People Get Stuck

Many beginners assume:

> Variables and arrays contain objects.

In reality:

```text
Variables
Arrays
Method Parameters
```

typically contain references to objects, not the objects themselves.

This misunderstanding leads to confusion about why modifying an object through one variable affects another variable that appears unrelated.

Beginners often focus only on:

> Where is my object stored?

Experienced engineers also ask:

> Who owns this object?

> How many references point to it?

> Am I creating a new object or simply another way to access the existing one?

Understanding references is essential for reasoning about object-oriented programs.

---

## Takeaway

> Objects represent data. References provide access to that data.

> Efficient software often shares objects through references instead of creating unnecessary copies, reducing memory usage while keeping data consistent across the system.