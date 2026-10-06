# Deque And Queue Operations

**Course Name:** Java: Data Structures
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java data structures, I encountered `Deque` and explored the operations available through the `Queue` interface.

The new learning was understanding how a deque supports operations at both ends and how the different queue methods behave differently, especially when adding, removing, or inspecting elements.

---

## New Learning

### 1. `Deque` — Double-Ended Queue

🆕 **New learning:** `Deque` stands for **Double-Ended Queue** and allows elements to be added or removed from either end.

For example:

    Deque<Character> deque = new ArrayDeque<>();

    deque.addFirst('A');
    deque.addLast('B');

The deque can therefore operate from both directions.

Common operations include:

    addFirst()
    addLast()
    removeFirst()
    removeLast()

This means a `Deque` can be used to model both queue-like and stack-like behavior.

---

### 2. Queue Operations Have Different Behaviors

🆕 **New learning:** Java's `Queue` methods provide different behaviors for adding, removing, and inspecting elements.

For example:

    Queue<Character> queue = new ArrayDeque<>();

### `offer()`

Adds an element to the queue.

    queue.offer('A');

The element is added toward the rear of the queue.

### `poll()`

Removes and returns the element at the front.

    queue.poll();

If the queue is empty, `poll()` returns `null`.

### `peek()`

Returns the element at the front without removing it.

    queue.peek();

If the queue is empty, `peek()` returns `null`.

### `remove()`

Removes and returns the element at the front.

Unlike `poll()`, `remove()` throws an exception when the queue is empty.

So:

    poll()    → empty queue → null
    remove()  → empty queue → exception

---

### 3. Removing a Specific Element

🆕 **New learning:** `remove(element)` can remove a specific element from a queue rather than necessarily removing the front element.

For example:

    queue.remove('B');

This searches for the specified element and removes it if present.

This is different from:

    queue.remove();

which removes the element at the front.

The operation of removing a specific element generally requires searching through the queue, so its complexity can be linear.

---

## Queue Reference vs Deque Reference

A concrete `ArrayDeque` object can be referenced through different collection abstractions.

For example:

    Queue<Character> queue = new ArrayDeque<>();

The object is an `ArrayDeque`, but the reference exposes the operations defined by `Queue`.

If instead:

    Deque<Character> deque = new ArrayDeque<>();

the reference provides access to the double-ended operations as well.

The actual object remains the same kind of concrete implementation; the reference type determines the interface through which it is being used.

---

## Where This Matters

Understanding the individual operations matters because methods that appear similar can have different behavior.

For example:

    peek()   → inspect front
    poll()   → remove front, return null if empty
    remove() → remove front, throw if empty

Similarly, `Deque` expands the normal queue model by allowing operations at both ends.

---

## Why People Get Stuck

It is easy to remember that a queue is FIFO and stop there.

But using Java's Queue API effectively requires understanding what each operation actually does.

The distinction between:

    peek()
    poll()
    remove()

is particularly important because they interact differently with an empty queue.

Likewise, `Deque` should not be thought of as simply another queue implementation. Its defining characteristic is that both ends are available for operations.

---

## Takeaway

🆕 The new learning was understanding **Deque as a double-ended queue** and the behavioral differences between Java's queue operations.

The core mental model is:

    Queue
      ↓
    Front ← elements → Rear

and with a `Deque`:

    Front ↔ elements ↔ Rear

This allows a deque to support both queue-like and stack-like behavior while the individual queue methods provide different empty-state and removal semantics.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`