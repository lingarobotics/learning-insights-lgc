# Thinking in Patterns: I Saw Two Pointers, Then Combined It with Binary Search

> *"Sometimes the first solution doesn't need to be discarded. It just needs to be optimized."*

---

## Background

When I saw this problem, I immediately recognized a pattern I already knew — **Two Pointers**.

The problem asks for two things:

- The first occurrence of the target.
- The last occurrence of the target.

So my first thought was simple:

> "I can use two pointers."

For me, Two Pointers is not limited to `left` and `right`, or `slow` and `fast`.

I think of it more generally as:

> **Two variables pointing to two positions, where their relationship helps me perform the required logic.**

So I decided to try my own approach first.

Even though I already knew it would be `O(n)`.

I was curious to see what would happen.

---

## My First Thought — Two Pointers

The problem needs two boundaries.

So I naturally thought:

```text
left  → find the first occurrence
right → find the last occurrence
```

The left pointer starts from the beginning, while the right pointer starts from the end.

Whenever `left` finds the target, I store it as the first occurrence.

Whenever `right` finds the target, I store it as the last occurrence.

This lets me search for both boundaries in a single traversal.

My first implementation was based completely on this idea.

![My First Two Pointer Approach](images/images-from-learning/my-first-logically-valid-sol-but-restriction-failure-but-its-my-thinking-anyway.png)

---

## I Knew It Was O(n)

There was one thing I already knew before submitting it.

My approach was still `O(n)` because the pointers move through the array linearly.

The problem explicitly requires `O(log n)`.

So I knew my solution was not going to satisfy the restriction.

But I still submitted it.

I was curious.

I wanted to see whether my own logic would work correctly before worrying about optimization.

And yes, the logic was able to find the boundaries.

But the restriction check caught the `O(n)` complexity.

---

## The Important Part

The restriction failure didn't mean my thinking was wrong.

My core idea was correct.

For:

```text
[5, 7, 7, 8, 8, 10]
```

with:

```text
target = 8
```

I am looking for:

```text
          ↓     ↓
[5, 7, 7, 8, 8, 10]
          3     4
```

My Two Pointer thinking correctly identified the two things I needed:

```text
left  → first boundary
right → last boundary
```

The problem was not **what** I was searching for.

The problem was **how** I was reaching those boundaries.

I was moving one position at a time.

---

## Then I Looked at the Constraint Again

The array is sorted.

And the problem requires `O(log n)`.

That immediately reminded me of another pattern I already knew:

**Binary Search.**

So instead of throwing away my original idea, I asked myself:

> "Can I keep the same boundary-search idea and use Binary Search to reach those boundaries faster?"

Yes.

That became my final approach.

---

## Combining the Two Patterns

My original idea was:

```text
Two Pointers
     ↓
left  → first occurrence
right → last occurrence
```

Then I integrated Binary Search:

```text
Binary Search
     ↓
find first boundary
     ↓
find last boundary
```

For the first occurrence, when I find the target, I don't stop.

There may be another target further to the left.

So I continue searching left:

```java
right = mid - 1;
```

For the last occurrence, when I find the target, I continue searching right:

```java
left = mid + 1;
```

So the underlying idea is still the same:

> **Find the two boundaries.**

Binary Search simply makes the search for those boundaries efficient.

---

## The Final Solution

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {

        int[] result = {-1, -1};

        // Find first occurrence
        int left = 0, right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                result[0] = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // Find last occurrence
        left = 0;
        right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                result[1] = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
```

![Accepted Binary Search Solution](images/images-from-learning/accepted-sol-for-first-last-occ-of-target.png)

---

## What Actually Changed?

My first approach:

```text
Two Pointers
     ↓
move one-by-one
     ↓
O(n)
```

My final approach:

```text
Same boundary idea
     ↓
Binary Search
     ↓
O(log n)
```

So I don't see these as two completely unrelated solutions.

The first solution helped me identify the structure of the problem.

The second solution optimized the way I reached that structure.

---

## Why I Like This Problem

What I liked about this problem wasn't simply getting Accepted.

It was the progression.

I first saw a pattern I already knew.

I tried my own approach even though I knew it was `O(n)`.

The restriction caught it.

Instead of immediately replacing my thinking with a completely different solution, I asked:

> "Can I combine what I already thought with another pattern I know?"

And that worked.

I took my understanding of Two Pointers and combined it with Binary Search.

---

## My Biggest Takeaway

I'm starting to realize that the first solution doesn't always have to be the final solution.

Sometimes the first solution helps reveal the structure of the problem.

Here, my first idea told me:

```text
I need two boundaries.
```

Then Binary Search gave me the efficient way to find them.

So the final solution came from connecting two patterns I already knew.

Not just:

> "I know Binary Search."

But:

> **"I know Two Pointers, I know Binary Search, and I can recognize when they can work together."**

That is the kind of pattern recognition I want to keep developing.

---

## Complexity

- **Time complexity:** `O(log n)`
- **Space complexity:** `O(1)`

---

## Resources:

**Problem in Leetcode with description**: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

**Thinking in Patterns: I Saw Two Pointers, Then Combined It with Binary Search**: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/8452922/thinking-in-patterns-i-saw-two-pointers-rzaau/