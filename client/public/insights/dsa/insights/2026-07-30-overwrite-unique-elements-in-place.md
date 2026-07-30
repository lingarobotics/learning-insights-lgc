# Thinking in Patterns: Overwrite Instead of Removing

---

## 1. Context

At first, the problem statement made me think I had to **remove** duplicate elements from the array.

Since Java arrays have a fixed size, I immediately wondered:

> "How do I remove an element from an `int[]`?"

Then I noticed something interesting in the problem statement.

It never actually asks us to shrink the array.

It only says that the **first `k` elements** should contain the unique values.

Everything after that can be ignored.

That small detail completely changed the way I looked at the problem.

---

## 2. My First Intuition

Initially, I was thinking in terms of deletion.

If I found a duplicate, I thought I somehow needed to remove it and shift every remaining element to the left.

That approach immediately felt expensive and unnecessarily complicated.

Then I realized something.

Instead of removing duplicates,

I could simply overwrite them.

Whenever I encounter a new unique number, I can copy it into the next available position at the beginning of the array.

The duplicates don't have to disappear.

They simply become irrelevant.

---

## 3. A Small Observation Simplified Everything

The array is already sorted.

That means every duplicate appears immediately next to its previous occurrence.

Instead of comparing the current element with every previous element,

I only need to compare it with its immediate predecessor.

```text
nums[read] != nums[read - 1]
```

If they are different,

I've discovered a new unique value.

That single comparison is enough because sorted arrays naturally group duplicates together.

---

## 4. The Only Catch

While implementing the solution, I immediately ran into an `ArrayIndexOutOfBoundsException`.

Initially, I started my traversal with

```text
read = 0
```

and compared

```text
nums[read - 1]
```

which immediately became

```text
nums[-1]
```

That doesn't exist.

It reminded me of an important habit while working with arrays.

Whenever I access the previous element,

the first valid index cannot be `0`.

Starting `read` from `1` guarantees that `read - 1` is always a valid position.

It also reminded me that array bounds aren't only violated by accessing beyond the last index.

Negative indices are equally invalid.

---

## 5. Accepted Solution

After adjusting the starting index, the solution was accepted.

![Accepted Solution](/images/images-from-learning/overwrite-sol.png)

Getting the **Accepted** verdict felt good, but the bigger takeaway wasn't the algorithm itself.

It was realizing that I never actually removed anything.

I simply kept writing unique values toward the front of the same array.

---

## 6. The Bigger Realization

This problem reminded me that sometimes the wording of a problem makes us imagine operations that aren't actually required.

The statement says:

> Remove duplicates.

My brain eventually translated it into:

```text
Read Current Element
        ↓
Is it different from the previous one?
        ↓
Yes → Copy it forward
        ↓
Continue
```

Nothing was removed.

The array simply evolved into the required state.

---

## 7. A Reusable Thinking Pattern

Looking back, the pattern became surprisingly simple.

```text
Read Every Element
        ↓
Compare with Previous
        ↓
If Unique
        ↓
Write to Next Available Position
        ↓
Return Number of Unique Elements
```

There was no need to shift elements repeatedly.

No need for another array.

No need for nested loops.

Just one traversal and two pointers performing different jobs.

---

## 8. Takeaway

This problem taught me two useful lessons.

The first is algorithmic.

Sometimes the easiest solution isn't to remove unwanted data.

It's simply to overwrite the parts that matter.

The second is about implementation.

Whenever I write expressions like

```text
i + 1
```

or

```text
i - 1
```

I should immediately ask myself:

> "Can this index ever become invalid?"

That small habit prevents many `ArrayIndexOutOfBoundsException`s before they even happen.

---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/8431140/thinking-in-pattern-two-pointer-overwrit-p2xo/