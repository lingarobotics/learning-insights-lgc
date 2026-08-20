# Thinking in Patterns: Traverse, Check, Decide — And Learn How Java Consider Indices

---

## 1. Context

Today's LeetCode problem looked simple.

The actual algorithm wasn't complicated either.

But while solving it, I ran into a small implementation mistake that taught me something much more useful than this particular problem.

The problem statement uses **1-based operation numbering**.

Java arrays use **0-based indexing**.

I knew both concepts individually.

But I didn't realize I was mixing them together while writing my code.

That became today's main learning.

---

## 2. My Initial Logic

My first thought was to follow the problem statement directly.

I thought of the operations like this:

- `i = 1` → first operation
- `i = 2` → second operation
- `i = 3` → third operation

So I started my loop with:

`i = 1`

and tried to build the solution around that.

The actual logic was already clear to me:

**Traverse → Check the current state → Decide where the element goes → Update the state**

For this problem, the state was simply the last element of `arr1` and `arr2`.

But I made one assumption that turned out to be wrong.

---

## 3. Where I Made the Mistake

I used my 1-based `i` directly with the Java array.

My thinking was:

`i = 1` → first element

But Java sees:

`nums[1]` → second element

Because Java arrays are:

- `nums[0]` → first element
- `nums[1]` → second element
- `nums[2]` → third element

So my problem wasn't really the algorithm.

It was the translation between **my way of numbering the operations** and **Java's way of indexing an array**.

This also caused another problem.

I expected the two lists to be populated correctly, but because I was accessing the wrong elements, the program didn't behave according to the logic I had in my head.

---

## 4. The Main Learning

This was the part I found interesting.

**Java only knows 0-based indexing for arrays.**

The problem statement can describe something using 1-based indexing because that is convenient for explaining the operations.

But Java doesn't know that convention.

If I want to keep my own 1-based reasoning, I have to translate it when accessing the array.

So:

`i = 1` → first operation → `nums[i - 1]`

`i = 2` → second operation → `nums[i - 1]`

`i = 3` → third operation → `nums[i - 1]`

That means my original way of thinking wasn't necessarily wrong.

I was just mixing two indexing systems.

---

## 5. The Submitted Version

![Submitted Solution](../images/images-from-learning/distribute-prob-submitted-sol.png)

For the actual submission, I decided to make the implementation follow Java's natural 0-based indexing.

So I handled the first two elements directly:

`nums[0]` → `arr1`

`nums[1]` → `arr2`

Then I started the traversal from:

`i = 2`

From there, every element follows the same comparison:

- Check the last element of `arr1`
- Check the last element of `arr2`
- Decide which list should receive `nums[i]`
- Continue to the next element

This version was accepted.

---

## 6. My Initial Logic — Corrected

![Corrected Initial Logic](../images/images-from-learning/distribute-prob-my-initial-logic-changed-or-added-one-minus-one-where-i-occurs-to-rectify-the-index-bug.png)

After the submission, I went back to my original code.

I realized something important.

I didn't actually need to throw away my original logic.

I could keep my original 1-based operation thinking and simply correct the array access:

`nums[i]`

becomes:

`nums[i - 1]`

So the overall structure remains my original idea.

Only the translation into Java changes.

This was useful because it showed me that an implementation mistake doesn't always mean the underlying reasoning is wrong.

Sometimes the reasoning is fine.

The representation is what needs fixing.

---

## 7. My Initial Version

![My Initial Logic](../images/images-from-learning/distribute-prob-my-initial-logic-with-index-bug-not-corrected-version.png)

Looking back at my first version, I can now clearly see what happened.

I had already extracted the main pattern:

**Traverse → Check → Decide → Update → Move**

I knew I needed two lists.

I knew the first two elements had fixed positions.

I knew that after that I had to compare the last elements.

The only thing that broke the implementation was the indexing assumption.

That makes this a useful debugging lesson for me.

When code behaves differently from what I expect, I shouldn't immediately assume that the entire algorithm is wrong.

I should first check:

**Is the code actually representing the logic I am thinking about?**

---

## 8. The Pattern I Took From This

The pattern I see here is not some complicated data structure.

It is a simple traversal pattern:

**Traverse → Check → Decide → Update → Move**

At every `i`:

1. Look at the current state.
2. Make a decision based on that state.
3. Update the state.
4. Move to the next element.

I have seen variations of this kind of thinking in other problems too.

The important part is learning to recognize the structure instead of treating every problem as completely new.

---

## 9. Takeaway

This problem gave me a very small but important Java lesson.

**Problem statements may use 1-based indexing, but Java arrays are 0-based.**

My original logic wasn't useless.

My submitted solution wasn't a completely different algorithm either.

They were variations of the same thought process.

The journey was:

**Initial logic → Indexing bug → Understand why it happened → Java-friendly implementation → Accepted solution → Correct my original implementation**

And probably the biggest thing I'll remember from this problem is:

> **Don't confuse the way I describe a position with the way Java accesses that position.**

Sometimes the algorithm isn't the problem.

Sometimes I just need to translate my thinking correctly into the language I'm using.

---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/distribute-elements-into-two-arrays-i/

- 💻 **My Accepted Submission:** https://leetcode.com/problems/distribute-elements-into-two-arrays-i/submissions/2113986594/