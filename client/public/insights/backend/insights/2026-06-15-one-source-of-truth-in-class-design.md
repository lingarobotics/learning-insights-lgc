# One Source of Truth in Class Design

**Course Name:** Java Masterclass for Software Developers

**Platform:** Educative.io

**GitHub Repository for Documentation:**
https://github.com/lingarobotics/educative-learning-journey

---

## Context

While learning about Boolean-valued methods, private methods, `final` and `static` fields, enumerations, constructor chaining, and class design, I noticed that these topics initially appeared unrelated.

Each lesson introduced a different Java feature with its own syntax and examples.

However, after working through the chapter and questioning the design decisions behind the examples, I realized they were all teaching the same engineering principle from different angles.

---

## The Insight

I realized something important:

> Good class design revolves around maintaining a single source of truth.

Each concept reinforced this idea in a different way.

Boolean-valued methods expose a simple question while hiding the logic behind the answer.

```text
isLeapYear()
isEmpty()
isHeads()
```

The caller only receives `true` or `false` without needing to know how the result is computed.

Private methods centralize repeated implementation details.

Instead of duplicating initialization or validation logic across multiple methods and constructors, one private method performs the work while other methods delegate to it.

Constructor chaining follows the same philosophy.

Rather than allowing every constructor to perform its own initialization, smaller constructors forward their work to one "master" constructor using `this(...)`.

This creates one authoritative place responsible for building a valid object.

Enumerations also contribute to this principle.

Instead of allowing any integer or string value, an enum defines the complete set of valid states before the program even runs.

```text
HEADS
TAILS
```

instead of

```text
0
1
2
```

The implementation becomes safer because invalid states are impossible.

This led to a larger realization:

> Many object-oriented design techniques exist to keep important logic in one place.

```text
One Validation
vs
Validation Everywhere

One Initialization
vs
Initialization Everywhere

One Definition of Valid States
vs
Magic Numbers and Strings

One Source of Truth
vs
Duplicated Logic
```

Different language features support the same engineering goal.

---

## Where This Matters

This pattern appears throughout software engineering.

### Object-Oriented Design

Constructors delegate to one another so every object is initialized consistently.

### Backend Systems

Business rules are centralized inside services instead of being duplicated across controllers.

### Databases

Constraints ensure that valid data is enforced in one place instead of relying on every application to perform identical checks.

### APIs

Validation is performed centrally before requests reach business logic.

### Large Codebases

Shared utility methods and helper classes prevent multiple teams from maintaining duplicate implementations of the same logic.

The technology changes.

The principle remains the same.

---

## Why People Get Stuck

Many beginners assume:

> Every constructor should initialize its own fields.

Or:

> Repeating a few lines of code isn't a problem.

Or:

> If the program works, the implementation is good enough.

In reality:

```text
Maintainability
Consistency
Readability
Reliability
Extensibility
```

are separate concerns.

Two classes can produce identical results while having very different maintenance costs.

Beginners often focus only on:

> Does this code work?

Experienced engineers also ask:

> Where is the single source of truth?

> What happens if this logic changes later?

> Will I need to update this in multiple places?

As software grows, reducing duplication becomes just as important as producing the correct output.

---

## Takeaway

> Good class design is less about writing more code and more about deciding where important logic should live.

> Many Java features—private methods, constructor chaining, Boolean-valued methods, and enumerations—are different tools for maintaining a single source of truth within a class.
