# Thinking in Patterns: Have I Seen This Before?

---

## 1. Context

At first, the problem looked very straightforward.

I simply needed to determine whether an array contained any duplicate values.

Without knowing any specialized data structure for this kind of problem, my natural instinct was:

> Compare every element with every other element.

It wasn't the optimal solution, but it was the best approach I could think of with the tools I knew at that time.

---

## 2. My First Intuition

I started with two nested loops.

For every element, I compared it against every other element.

```text
Current Element
        ↓
Compare with everyone
```

If two values were equal, I concluded that a duplicate existed.

However, I quickly noticed something unexpected.

Even an array with all distinct values was returning `true`.

After observing the comparisons, I realized the mistake.

Every element was also being compared with itself.

```text
nums[i] == nums[j]

When

i == j

nums[i] == nums[i]
```

which is always true.

That wasn't actually detecting duplicates.

It was simply comparing an element with itself.

---

## 3. Fixing the First Bug

To fix this, I ignored comparisons where

```text
i == j
```

Now the logic became correct.

An element would only be compared against different positions in the array.

The incorrect answers disappeared.

But another problem appeared immediately.

---

## 4. The Next Wall: Time Limit Exceeded

Although the solution was now logically correct, it still compared every pair of elements.

That meant

```text
n × n
```

comparisons.

As soon as LeetCode tested it with a much larger input,

I received:

**Time Limit Exceeded (TLE)**

![Brute Force TLE](/images/images-from-learning/brute-force-solution-tle.png)

That made me realize something important.

The problem was no longer correctness.

The problem was unnecessary work.

---

## 5. A Small Learning Changed My Thinking

While trying to understand how to optimize the solution, I learned about `HashSet`.

More importantly, I learned **when** it should be used.

Until then, my thinking was:

```text
Current Element
        ↓
Compare with everyone
```

After learning `HashSet`, my thinking changed to:

```text
Current Element
        ↓
Have I seen this before?
```

If yes,

a duplicate already exists.

If no,

remember it and continue.

That completely removed the need to compare every pair.

---

## 6. Accepted Solution

Using a `HashSet`, I only needed a single traversal.

For every number,

- if it already exists in the set, return `true`
- otherwise, add it to the set

The solution was accepted.

![Accepted Solution](/images/images-from-learning/actual-sol-for-have-i-seen-with-hashset-approach.png)

The runtime wasn't the biggest learning.

The thinking pattern was.

---

## 7. The Bigger Realization

This problem wasn't really teaching me `HashSet`.

It was teaching me a different question to ask.

Instead of asking,

> "Does this value match every other value?"

I started asking,

> "Have I already seen this value?"

That small change transformed an `O(n²)` solution into an `O(n)` solution.

The data structure simply made that thinking efficient.

---

## 8. A Reusable Thinking Pattern

Looking back, the pattern became very simple.

```text
Read Current Element
        ↓
Have I Seen It Before?
      ↙           ↘
    Yes            No
     ↓              ↓
Return True     Remember It
                    ↓
               Continue
```

This isn't limited to this problem.

Whenever a problem asks things like

- Have I seen this before?
- Does it already exist?
- Is this repeated?
- Is this a duplicate?

my first thought should now be:

> Can a `HashSet` help here?

---

## 9. Takeaway

Today's learning wasn't just about another data structure.

It was about recognizing a new thinking pattern.

Earlier, my only option was comparing.

Now I have another option.

Remember.

Sometimes the fastest solution doesn't come from making comparisons faster.

It comes from avoiding the comparisons altogether.

---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/contains-duplicate/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/contains-duplicate/solutions/8438806/thinking-in-patterns-have-i-seen-this-be-d3bp/