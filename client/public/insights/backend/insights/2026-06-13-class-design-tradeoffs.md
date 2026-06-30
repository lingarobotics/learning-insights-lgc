# Classes Are Contracts, Implementations Are Tradeoffs

**Course Name:** Java Masterclass for Software Developers

**Platform:** Educative.io

---

## Context

While learning about Java class definitions, constructors, encapsulation, local variables, method design, and object-oriented programming, I encountered a lesson that compared three different implementations of a simple `Square` class.

All three classes provided identical behavior:

* Set the side length
* Get the side length
* Get the area

From a user's perspective, the classes behaved the same way.

However, their internal implementations were completely different.

---

## The Insight

I realized something important:

> Software behavior and software implementation are not the same thing.

All three square classes exposed the same interface.

A client could use them in exactly the same way.

```text
setSide()
getSide()
getArea()
```

The behavior never changed.

The implementation did.

One version stored only the side length and computed the area whenever requested.

Another stored both side length and area, computing the area only when the side changed.

A third version stored only the area and computed the side length when necessary.

This led to a larger realization:

> Engineering is often about choosing where work happens, not whether work happens.

```text
Compute Now
vs
Compute Later

Use More Memory
vs
Use More CPU

Store Data
vs
Recalculate Data
```

Different implementations can satisfy the same requirements while making very different tradeoffs.

---

## Where This Matters

This pattern appears throughout software engineering.

### Backend Systems

A service may compute statistics every request or store precomputed values.

### Databases

Data can be normalized to reduce storage or denormalized to improve read performance.

### Caching Systems

Information can be recomputed repeatedly or stored in memory for faster retrieval.

### Frontend Applications

Data can be derived during rendering or calculated once and stored in application state.

### Distributed Systems

Workloads can be shifted between storage, computation, and network layers depending on system priorities.

The technology changes.

The tradeoff remains the same.

---

## Why People Get Stuck

Many beginners assume:

> If two programs produce the same result, they are effectively the same solution.

In reality:

```text
Correctness
Performance
Memory Usage
Maintainability
Scalability
```

are separate concerns.

Two implementations can produce identical output while behaving very differently under load.

Beginners often focus only on:

> Does it work?

Experienced engineers also ask:

> How does it work?

> What resources does it consume?

> What happens when usage scales?

The implementation details become increasingly important as systems grow.

---

## Takeaway

> Interfaces define what a system does. Implementations determine the cost of doing it.

> Good engineering is often the art of choosing the right tradeoff, not finding a perfect solution.
