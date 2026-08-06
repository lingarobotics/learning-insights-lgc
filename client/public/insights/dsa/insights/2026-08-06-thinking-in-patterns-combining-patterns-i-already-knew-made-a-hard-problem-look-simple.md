# Thinking in Patterns: Making Hard Problems Look Simple

> *"The goal isn't to make the code look complicated. The goal is to simplify the thinking until the code becomes simple."*

**Date:** 2026-08-06

---

## Background

Today was an interesting day.

I solved two completely different LeetCode problems, but what stayed with me wasn't the acceptance itself.

It was the way my brain approached them.

The first one was **169. Majority Element**.

The second one was **154. Find Minimum in Rotated Sorted Array II**, which is tagged **Hard**.

When I looked back after solving both, I realized I wasn't simply applying algorithms anymore.

I was beginning to recognize patterns and, more importantly, **combine them.**

That felt worth documenting.

---

# A Small Experiment Before the Actual Solution

Before I seriously thought about the Hard problem, I intentionally tried something just for fun.

I wrote:

```java
Arrays.sort(nums);
return nums[0];
```

That was it.

Just two lines.

I never intended to submit it.

I simply wanted to know whether my intuition was correct.

I clicked **Run**.

It passed the sample test cases.

That honestly made me smile.

For a moment, I thought,

> "Technically... this works."

Of course, I already knew sorting an entire array just to find its minimum wasn't the solution I wanted to submit.

It performs unnecessary work.

So I treated it as a tiny experiment rather than a real solution.

The experiment answered one question.

> **Can sorting solve this problem?**

Yes.

The next question became much more interesting.

> **Can I reach the answer without doing all the work required for sorting?**

That question led me to think further instead of stopping.

---

# My First Serious Thought

The first algorithm that naturally came to mind was straightforward.

For every element,

compare it with every remaining element,

and determine whether it is the minimum.

That works.

But it also means nested loops.

Immediately I knew the cost.

```
O(n²)
```

Nothing was wrong with that solution.

It was correct.

But something inside me wanted to reduce the amount of work.

Instead of asking,

> "Can this be accepted?"

I started asking,

> "Can I remove unnecessary operations?"

That small change in questioning completely changed my direction.

---

# Instead of Looking for a New Algorithm...

...I started looking through the patterns I had already learned.

That was probably today's biggest realization.

I didn't need to invent something completely new.

Maybe I could combine ideas I already knew.

---

# Pattern 1 — Fixed & Moving Pointer

Most resources introduce Two Pointers like this.

- Left Pointer
- Right Pointer

My brain doesn't naturally think about Two Pointers that way anymore.

For me,

> **Two Pointers simply means two variables pointing to two different indices, where each pointer has its own responsibility.**

That responsibility changes from problem to problem.

Sometimes they are:

- Left & Right

Sometimes,

- Read & Write

Sometimes,

- Actual & Expected

Today,

they became:

- Fixed Pointer
- Moving Pointer

The moving pointer explores.

The fixed pointer represents something meaningful.

That definition makes much more sense to me than memorizing "left" and "right."

---

# Pattern 2 — Current vs Best-So-Far

Another pattern I had learned previously was:

**Current vs Best-So-Far**

Normally, it looks like this.

```java
if(current < best){
    best = current;
}
```

I had already seen this idea before.

But today something clicked.

Instead of storing the **best value**,

what if I stored the **index of the best value?**

That tiny realization suddenly connected two completely different patterns.

---

# The Connection

Once those two patterns met,

the algorithm almost wrote itself.

The Fixed Pointer became the **Best-So-Far**.

The Moving Pointer became the **Current** element.

Whenever the moving pointer found something smaller,

the fixed pointer simply moved.

```java
int fixed = 0;

for (int mover = 0; mover < nums.length; mover++) {

    if (nums[mover] < nums[fixed]) {
        fixed = mover;
    }
}

return nums[fixed];
```

That's it.

One traversal.

One comparison.

One `if` statement.

---

# The Funny Part

The problem is tagged **Hard**.

Yet my final solution looked almost too simple.

One `for` loop.

One `if`.

If someone only looks at the final code,

they might think,

> "That's all?"

But what they don't see is everything that happened **before** writing those few lines.

The simplicity came from simplifying the thinking,

not from magically writing simple code.

---

# Honorable Mention — Majority Element

Earlier today,

I solved **169. Majority Element**.

Again,

I didn't start by thinking about HashMaps or frequency counting.

Instead,

I paid attention to the guarantee given in the problem.

The problem guarantees that one element appears more than

```
⌊n / 2⌋
```

times.

That immediately made me wonder,

"If all equal elements become adjacent after sorting,

wouldn't the majority element always occupy the middle?"

It would.

That reduced the solution to:

```java
Arrays.sort(nums);

return nums[nums.length / 2];
```

Again,

the code became simple because I noticed a property hidden inside the problem statement.

---

# What Actually Changed

Looking back,

I don't think today's biggest learning was:

- Two Pointers
- Best So Far
- Sorting
- Majority Element

The biggest learning was this:

I am beginning to think in reusable patterns instead of isolated algorithms.

Earlier,

I would learn a technique.

Today,

I found myself asking,

- Can I reuse something I've already learned?
- Can two patterns work together?
- Can I remove unnecessary work?
- Does the problem statement itself contain useful information?

Those questions are becoming more natural.

---

# Final Reflection

I don't think making hard problems look simple is luck.

I don't even think it's about intelligence.

It's a skill.

A skill built by repeatedly asking,

> "Can I simplify this?"

instead of,

> "Can I make this more clever?"

Today's Hard problem eventually became:

- One traversal.
- One comparison.
- One `if` statement.

Not because the problem changed.

Because my way of thinking did.

And I think that's a much bigger achievement than simply getting another Accepted submission.