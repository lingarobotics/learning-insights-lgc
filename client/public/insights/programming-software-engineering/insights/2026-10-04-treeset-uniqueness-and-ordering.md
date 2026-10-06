# TreeSet Uniqueness And Ordering

**Course Name:** Java: Data Structures
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java Collections, I encountered `TreeSet` and how it combines two important properties of a Set: uniqueness and ordering.

The new learning was understanding how `TreeSet` maintains sorted elements and how a `Comparator` can change the ordering behavior.

---

## New Learning

🆕 **New learning:** `TreeSet` stores unique elements while maintaining them in sorted order.

For example:

    TreeSet<String> names = new TreeSet<>();

    names.add("Charlie");
    names.add("Alice");
    names.add("Bob");

The elements are maintained in their natural ordering:

    Alice
    Bob
    Charlie

Unlike a general `Set`, ordering is therefore part of the behavior provided by `TreeSet`.

---

## Custom Ordering With `Comparator`

🆕 **New learning:** A `Comparator` can define a custom ordering for a `TreeSet`.

For example, strings can be ordered according to their length rather than their natural alphabetical ordering.

The important idea is:

    TreeSet
        +
    Comparator
        ↓
    Custom ordering

The comparator determines how elements are compared within the set.

---

## Comparator Equality Matters

🆕 **New learning:** For a `TreeSet`, the comparator's result can affect whether an element is considered equivalent to an existing element.

For example, suppose the comparator compares strings only by length:

    "Cat"  → length 3
    "Dog"  → length 3

If the comparator returns `0` for both strings, the `TreeSet` treats them as equivalent for its set ordering.

As a result, both values cannot coexist as distinct elements under that comparison rule.

If strings of the same length need to be retained, the comparator needs a tie-breaking comparison.

For example:

    length first
        ↓
    alphabetical order if lengths are equal

This makes the comparison distinguish between otherwise same-length strings.

---

## Where This Matters

`TreeSet` is useful when both of these requirements matter:

    uniqueness
         +
    sorted ordering

The choice of comparator then determines what "ordering" means.

Natural ordering may be sufficient in some cases, while a custom comparator can represent application-specific ordering.

---

## Why People Get Stuck

It is easy to think that a comparator only determines display order.

With `TreeSet`, comparison also participates in the set's notion of whether two elements are equivalent.

Therefore:

    comparator result == 0

can have an important consequence: the TreeSet may treat the elements as duplicates for its set behavior.

The comparator is therefore part of the data structure's behavior, not merely a presentation rule.

---

## Takeaway

🆕 The new learning was understanding that `TreeSet` combines:

**Set → uniqueness**

**Tree → sorted organization**

and that a `Comparator` can define the ordering.

The deeper point is that the comparison rule can also determine whether two elements are treated as equivalent within the `TreeSet`.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`