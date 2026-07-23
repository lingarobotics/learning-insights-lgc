# DSA Insight — Learning Beyond Accepted Solutions

---

## 1. Context

Today's problem looked straightforward.

> Matrix Diagonal Sum

The task was to find the sum of the primary and secondary diagonals of a square matrix while ensuring that the center element of an odd-sized matrix is counted only once.

I solved the problem, got it accepted, and thought the learning had ended there.

Later, while browsing a DSA discussion group, I came across another accepted solution. It wasn't about a faster algorithm or a shorter implementation. Instead, it introduced me to another way of thinking about the same problem.

---

## 2. My First Intuition

When I looked at the matrix, I immediately saw two independent traversals.

- Primary diagonal
- Secondary diagonal

Although both diagonals could be traversed in the same loop, I wanted to keep their computations independent.

So I introduced two variables.

- `pSum` to store the primary diagonal sum.
- `sSum` to store the secondary diagonal sum.

Each variable represented exactly one concept.

This was my way of applying **Separation of Concerns**.

---

## 3. One Traversal, Then Handle the Special Case

Since both diagonals progress together, I accumulated both sums within a single traversal.

The only special case was the center element of an odd-sized matrix.

Because it belongs to both diagonals, it gets counted twice.

Instead of complicating the traversal, I simply removed the duplicate after both sums had been computed.

The flow became:

- Compute the primary diagonal.
- Compute the secondary diagonal.
- Remove the duplicate center element.
- Return the final answer.

It felt clean because each responsibility remained independent.

---

## 4. My Accepted Solution

The implementation was accepted.

![My Accepted Solution](/images/images-from-learning/matrix-prob-sol.png)

At this point, I was satisfied with the solution.

But I wanted to see how others had approached the same problem.

---

## 5. Looking at Another Solution

While browsing a DSA discussion group, I found another accepted solution.

![Solution from DSA Group](/images/images-from-learning/prevention-sol.jpeg)

> **Credit:** Solution shared by another developer in a DSA discussion group. Included with permission for educational purposes.

One small condition immediately caught my attention.

Instead of allowing the center element to be counted twice and correcting it later, the solution simply checked whether the current secondary diagonal element was already part of the primary diagonal.

If it was, it skipped adding it.

The duplicate never existed.

---

## 6. The Realization

That single condition taught me another design principle.

My solution focused on organizing the computation clearly through separation of concerns.

The solution from the DSA group focused on preventing an unnecessary state from ever occurring.

Instead of:

> "Count everything, then fix it."

it followed:

> "Don't create the duplicate in the first place."

Both approaches are correct.

Both run in **O(n)** time and **O(1)** space.

But each emphasizes a different way of thinking.

---

## 7. Two Design Principles I Learned

### 1. Separation of Concerns

My solution reinforced an important software engineering principle.

Different concepts deserve different responsibilities.

Using:

- `pSum`
- `sSum`

made the code easier to read because each variable represented exactly one idea.

The primary and secondary diagonals remained independent until the final result.

---

### 2. Prevention is Better Than Correction

The second solution reminded me of another valuable principle.

Instead of creating an invalid state and correcting it later,

prevent the invalid state from existing at all.

That single `if` condition completely removed the need for a correction step.

Sometimes the cleanest solution isn't the one with the best cleanup.

It's the one that never needs cleanup.

---

## 8. A Thinking Pattern

This experience reminded me that an Accepted solution isn't always the end of learning.

Sometimes the real learning begins after solving the problem.

Looking at another person's implementation can reveal a completely different design principle, even when the algorithm and complexity remain the same.

Going forward, I want to consciously ask myself two questions while designing algorithms.

> "Can I separate different responsibilities to make the code easier to understand?"

and

> "Can I prevent the special case instead of handling it afterwards?"

These aren't competing ideas.

They're both useful tools that can improve the quality of a solution.

---

## 9. Beginner Insight

One of the best habits while learning DSA is reviewing other accepted solutions **after solving the problem yourself**.

Not because your solution is wrong.

But because different people optimize for different things.

Some prioritize readability.

Some prioritize maintaining invariants.

Some prevent special cases instead of correcting them.

Every accepted solution carries a different lesson.

Every accepted solution has a lesson buried within it. You just have to dig deep enough to find it.

---

## 10. Takeaway

> Solving the problem teaches the algorithm.

> Reviewing other solutions teaches design.

> Separation of concerns makes code easier to understand.

> Preventing unnecessary states often removes the need for correction.

> Learning doesn't stop after "Accepted"—sometimes that's where the most valuable insights begin.