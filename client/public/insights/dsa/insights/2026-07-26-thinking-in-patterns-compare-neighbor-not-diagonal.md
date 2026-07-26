# Thinking in Patterns: Compare the Neighbor, Not the Entire Diagonal

---

## 1. Context

At first, the problem statement made me think I had to traverse every diagonal separately.

The matrix wasn't necessarily a square matrix either.

It could be an **m × n** matrix.

Seeing the phrase **"every diagonal"** initially made the problem feel more complicated than it actually was.

But after spending a little time observing the pattern, I realized there was a much simpler way to think about it.

---

## 2. My First Intuition

Instead of focusing on the entire diagonal, I started looking at just two neighboring elements.

If a matrix is Toeplitz, then every element should match the element diagonally below it.

That means if I'm currently at `matrix[i][j]`, then the only thing I really need to verify is `matrix[i + 1][j + 1]`.

Once that clicked, I no longer had to think about traversing complete diagonals.

I only needed to compare every element with its bottom-right neighbor.

---

## 3. A Small Observation Simplified Everything

Initially, I imagined checking diagonals one by one.

Something like:

```text
(0,0) → (1,1) → (2,2)

(0,1) → (1,2) → (2,3)

(1,0) → (2,1)
```

While this certainly works conceptually, it also introduces unnecessary complexity.

Then I realized something.

If every adjacent pair along a diagonal is equal,

```text
A == B
B == C
```

then naturally,

```text
A == C
```

So by simply checking every neighboring diagonal pair once, I end up validating the entire diagonal automatically.

That realization made the solution much simpler.

---

## 4. The Only Catch

While implementing the solution, I immediately ran into an `ArrayIndexOutOfBoundsException`.

The reason was simple.

I was comparing:

```text
matrix[i][j]
```

with

```text
matrix[i + 1][j + 1]
```

If I iterate until the last row or the last column, then `i + 1` or `j + 1` no longer exists.

That made me realize an important habit while working with arrays.

Whenever I access the **next** element, the loop itself should stop one step earlier.

Instead of adding extra boundary checks inside the loop, adjusting the loop limits keeps the implementation much cleaner.

---

## 5. Accepted Solution

After fixing the loop boundaries, the solution was accepted.

![Accepted Solution](/images/images-from-learning/toeplitz-matrix-prob-sol.png)

Getting the **Accepted** verdict felt good, but the more valuable lesson came from the observation behind the solution.

The problem statement talked about checking every diagonal.

My implementation never explicitly traversed a diagonal.

It simply compared neighboring diagonal elements.

The diagonals validated themselves.

---

## 6. The Bigger Realization

This problem reminded me that sometimes we overcomplicate a problem because of the way it's described.

The statement says:

> Check every diagonal.

My brain eventually translated it into:

```text
Visit Cell
    ↓
Compare Bottom-Right Neighbor
    ↓
Continue
```

The diagonal became an implicit property instead of something I had to traverse manually.

---

## 7. A Reusable Thinking Pattern

Looking back, the pattern became surprisingly simple.

```text
Traverse Matrix
      ↓
Compare Neighbor
      ↓
Return False on First Mismatch
      ↓
Otherwise Return True
```

There was no need for extra data structures.

No need to store diagonals.

No need to restart traversal for every diagonal.

Just compare each cell with its bottom-right neighbor.

---

## 8. Takeaway

This problem taught me that the simplest solution doesn't always come from finding a new algorithm.

Sometimes it comes from changing the way we describe the problem to ourselves.

Instead of asking,

> "How do I traverse every diagonal?"

I started asking,

> "What is the smallest comparison that proves the diagonal is valid?"

That single question completely changed my approach.

The diagonals never had to be traversed individually.

They verified themselves through local comparisons.

---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/toeplitz-matrix/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/toeplitz-matrix/solutions/8420990/compare-every-diagonal-neighbor-by-linga-v5i5/