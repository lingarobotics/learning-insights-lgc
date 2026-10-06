# Collections And Traversal

**Course Name:** Java Essential Training: Objects and APIs
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java Collections, I encountered several collection operations and different ways of traversing collections.

The new learning was not simply that Java has collections, but understanding how specific collection operations behave and how different traversal approaches provide different levels of control.

---

## New Learning

### 1. `Set.of()` Creates an Unmodifiable Set

🆕 **New learning:** `Set.of(...)` provides a concise way to create a Set containing the supplied elements.

For example:

    Set<String> fruits = Set.of("Apple", "Banana", "Orange");

The resulting Set is unmodifiable.

This provides a convenient way to create a Set when its contents should not be changed after creation.

---

### 2. `Queue.peek()` Views Without Removing

🆕 **New learning:** `Queue.peek()` returns the element at the front of the queue without removing it.

For example:

    Queue<String> queue = new ArrayDeque<>();

    queue.offer("A");
    queue.offer("B");

    String first = queue.peek();

After `peek()`:

    Queue → A, B

The `A` remains in the queue.

If the queue is empty, `peek()` returns `null`.

---

### 3. `Map.putIfAbsent()`

🆕 **New learning:** `putIfAbsent()` adds a value only when the specified key does not already exist.

For example:

    map.putIfAbsent("Ram", 100);

If `"Ram"` already exists, the existing value is not replaced.

This differs from:

    map.put("Ram", 100);

where `put()` can replace the existing value for that key.

The distinction is:

    put()           → insert or replace
    putIfAbsent()   → insert only if key is absent

---

### 4. Maps Can Store Different Object Types as Values

🆕 **New learning:** The value type of a Map can be any appropriate object type.

For example:

    Map<String, String>
    Map<String, Double>
    Map<String, Student>

The generic type determines what kind of values the particular Map accepts.

Java generics work with reference types rather than primitive types, so a Map cannot directly use a primitive such as `int` as its generic type.

Instead:

    Map<String, Integer>

is used.

Java's autoboxing and unboxing can make the conversion between `int` and `Integer` appear seamless during normal usage.

---

### 5. Iterator vs Enhanced `for`

🆕 **New learning:** An `Iterator` provides explicit control over collection traversal, while the enhanced `for` loop provides a more convenient iteration syntax.

For example:

    Iterator<String> iterator = fruits.iterator();

    while (iterator.hasNext()) {
        String fruit = iterator.next();
    }

Compared with:

    for (String fruit : fruits) {
        // process fruit
    }

The enhanced `for` loop is simpler for straightforward traversal.

An `Iterator` becomes useful when more direct control over the traversal is required, including operations such as `iterator.remove()`.

---

## Where This Matters

Collection APIs provide different operations because different tasks require different behavior.

For example:

    peek()          → inspect without removing
    put()           → insert or replace
    putIfAbsent()   → insert only when missing
    Iterator        → explicit traversal control
    enhanced for    → convenient traversal

The important part is choosing the operation that matches the intended behavior.

---

## Why People Get Stuck

Collection methods can look similar while having different effects.

For example:

    queue.peek()
    queue.poll()

Both access the front of a queue, but only `poll()` removes it.

Likewise:

    map.put()
    map.putIfAbsent()

both insert values, but their behavior differs when the key already exists.

Understanding these behavioral differences is more useful than memorizing method names alone.

---

## Takeaway

🆕 The new learning from this section was understanding specific Java Collection operations and traversal mechanisms.

The important mental model is:

**Choose the collection operation based on the behavior you actually need.**

`peek()` can inspect without removal, `putIfAbsent()` protects an existing mapping, `Iterator` provides explicit traversal control, and the enhanced `for` loop provides convenient collection traversal.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`
GitHub: `github.linga.engineer`
LinkedIn: `linkedin.linga.engineer`
LeetCode: `leetcode.linga.engineer`
Blogs: `blogs.linga.engineer`
Email: `contact@linga.engineer`