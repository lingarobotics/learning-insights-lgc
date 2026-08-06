# Thinking in Patterns: Combining Patterns I Already Knew Made a Hard Problem Look Simple

> *"The goal isn't to make the code look complicated. The goal is to simplify the thinking until the code becomes simple."*

---

## Background

Today wasn't just about solving LeetCode problems.

It became a day where I noticed something changing in the way I approach problems.

I solved two completely different problems.

- **169. Majority Element**
- **154. Find Minimum in Rotated Sorted Array II (Hard)**

Looking back, I realized the most valuable thing wasn't getting Accepted.

It was recognizing that my brain was no longer treating every problem as completely new.

Instead, it started searching through patterns I had already learned.

More importantly,

it tried combining them.

That was worth documenting.

---

## Two Completely Different Problems, One Common Learning

At first glance, these two problems have nothing in common.

One asks for the majority element.

The other asks for the minimum element inside a rotated array that may contain duplicates.

Completely different questions.

Completely different difficulty levels.

Yet, while solving both, I realized something.

Neither solution started with,

> "Which algorithm should I memorize?"

Instead,

both started with,

> "Is there something I already know that can simplify this?"

That single question changed the direction of my thinking.

---

## A Small Experiment Before the Actual Solution

Before I seriously thought about the Hard problem,

I intentionally tried something just for fun.

I wrote:

```java
Arrays.sort(nums);

return nums[0];
```

That was it.

Just two lines.

I never intended to submit it.

It wasn't even my actual solution.

I simply wanted to know whether my intuition was correct.

So I clicked **Run**.

To my surprise,

the sample test cases passed.

That honestly made me smile.

For a brief moment,

I thought,

> "Technically... this works."

It felt like a funny little experiment.

Not because I had solved the problem,

but because sometimes the simplest possible thought is still correct.

Of course,

I already knew sorting an entire array just to find the minimum wasn't something I wanted to submit.

Sorting performs more work than the problem actually requires.

So I treated it as nothing more than a tiny experiment.

It answered one question.

> Can sorting solve the problem?

Yes.

The next question became much more interesting.

> Can I reach the same answer without doing all the work required for sorting?

That question pushed me toward the real solution.

---

## My First Serious Thought

After leaving the sorting experiment behind,

my first real algorithm was straightforward.

For every element,

compare it with the remaining elements,

and determine whether it is the minimum.

That works.

It is completely correct.

But I immediately knew what it meant.

Nested loops.

```
O(n²)
```

Nothing was wrong with that.

Correctness wasn't the problem.

The number of operations was.

I wasn't trying to find another algorithm because the first one was wrong.

I was trying to reduce unnecessary work.

That became today's real objective.

---

## The Question That Changed My Direction

Earlier,

I would probably have asked myself,

> "Can this solution be accepted?"

Today,

without even realizing it,

my question changed.

I started asking,

> "Can I remove unnecessary operations?"

That sounds like a very small difference.

But it completely changes the way a problem is approached.

Instead of trying to invent something clever,

I started looking for work that simply didn't need to happen.

That naturally led me somewhere unexpected.

Instead of searching for a brand-new algorithm,

I started searching through patterns I had already learned.

---

## Instead of Looking for a New Algorithm...

I asked myself a different question.

> "Can I combine things I already know?"

That felt surprisingly natural.

I wasn't thinking,

"I need to learn something new."

I was thinking,

"What have I already learned that might fit here?"

Looking back,

I think this is the biggest learning from today.

Sometimes,

progress doesn't come from learning another algorithm.

Sometimes,

it comes from combining two ideas that previously existed separately in your mind.

That is exactly what happened next.

---

## Pattern 1 — My Understanding of Two Pointers

Most explanations introduce Two Pointers like this.

- Left Pointer
- Right Pointer

That isn't how my brain currently understands the pattern anymore.

For me,

Two Pointers simply means:

> **Two variables pointing to two different indices, where each pointer has its own responsibility.**

Those responsibilities depend entirely on the problem.

Sometimes they become:

- Left & Right

Sometimes,

- Read & Write

Sometimes,

- Actual & Expected

Today,

my brain naturally saw something different.

- Fixed Pointer
- Moving Pointer

The moving pointer explores the array.

The fixed pointer represents something meaningful.

That definition feels much more reusable than memorizing left and right.

Because the responsibilities change,

not the underlying idea.

---

## Pattern 2 — Current vs Best-So-Far

The second pattern came from something I had already learned earlier.

Current vs Best-So-Far.

Normally,

the idea looks like this.

```java
if(current < best){
    best = current;
}
```

Simple.

I had already used this pattern before.

But while thinking about today's problem,

something clicked.

The "best" doesn't necessarily have to be stored as a value.

What if it was stored as an index?

That tiny realization immediately connected with my understanding of Fixed & Moving Pointers.

Suddenly,

those two patterns no longer felt separate.

They started becoming one idea.

---

---

## The Moment Both Patterns Connected

The connection happened almost naturally.

The **Fixed Pointer** became the **Best-So-Far**.

The **Moving Pointer** became the **Current** element.

Every time the moving pointer discovered something smaller,

the fixed pointer simply moved to that index.

I wasn't inventing a new algorithm.

I wasn't memorizing a solution from somewhere.

I was simply connecting two ideas I had already learned.

That realization transformed the problem from this:

```
Compare every element with every other element.
```

into this:

```
Keep track of the current best answer.

Update it only when something better appears.
```

That single change removed the need for nested loops.

Without realizing it,

my brain had simplified the problem before simplifying the code.

---

## The Final Solution

The final implementation became surprisingly small.

```java
class Solution {
    public int findMin(int[] nums) {

        int fixed = 0;

        for (int mover = 0; mover < nums.length; mover++) {

            if (nums[mover] < nums[fixed]) {
                fixed = mover;
            }
        }

        return nums[fixed];
    }
}
```

When I looked at it afterwards,

it almost didn't feel like a **Hard** problem anymore.

One traversal.

One comparison.

One `if` statement.

That's all.

The interesting part wasn't the amount of code.

The interesting part was the thinking that happened before writing those few lines.

---

![Finding Minimum - Final Solution](images/images-from-learning/minimum-finding-sol-in-may-contain-duplicate-rotated-array.png)

---

## Why This Made Me Smile

This problem is tagged **Hard**.

When I finally looked at my solution,

I couldn't help but smile.

Not because I had solved another Hard problem.

But because the final code looked almost too simple.

If someone only reads the implementation,

they might think,

> "That's obvious."

But simple code doesn't necessarily mean simple thinking.

Behind those few lines was:

- A brute-force idea.
- A sorting experiment.
- Thinking about unnecessary work.
- Remembering previously learned patterns.
- Combining those patterns into one solution.

The simplicity appeared **after** all of that thinking.

That was probably my favorite part of the day.

---

## Honorable Mention — Majority Element

Earlier on the same day,

I solved **169. Majority Element**.

This time,

the simplification came from a completely different direction.

Instead of thinking about HashMaps,

frequency counting,

or nested loops,

I paid attention to something else.

The guarantee given in the problem.

The problem says that one element appears more than

```
⌊n / 2⌋
```

times.

That made me stop and think.

If sorting groups equal elements together,

wouldn't the majority element always occupy the middle?

It would.

That reduced the solution to:

```java
Arrays.sort(nums);

return nums[nums.length / 2];
```

Again,

the interesting part wasn't the code.

It was the observation.

Instead of adding more logic,

I reduced the problem using a property that already existed.

---

![Majority Element Solution](images/images-from-learning/majority-element-sol.png)

---

## Looking Back at Both Problems

When I compare these two problems,

I notice something common.

For **Majority Element**,

the simplification came from the **problem's guarantee**.

For **Find Minimum in Rotated Sorted Array II**,

the simplification came from **combining patterns I already knew**.

Different problems.

Different approaches.

The same mindset.

Instead of immediately searching for another algorithm,

I first looked for something that could simplify the problem.

That is a habit I want to keep developing.

---

## What Actually Changed

Looking back,

I don't think today's biggest learning was:

- Two Pointers.
- Current vs Best-So-Far.
- Sorting.
- Majority Element.
- Finding the Minimum.

Those are all technical things.

The bigger learning happened inside my thinking.

Earlier,

I used to collect algorithms.

Now,

I find myself collecting patterns.

Even more interesting,

those patterns are beginning to connect with one another.

Instead of asking,

> "Which algorithm solves this?"

I increasingly find myself asking,

- Can I reuse something I've already learned?
- Can two patterns work together?
- Can I remove unnecessary work?
- Is there a guarantee hidden in the problem statement?
- Can I simplify the thinking before simplifying the implementation?

Those questions are becoming more natural.

I think that's a bigger milestone than another Accepted submission.

---

## My Biggest Takeaway

Today reminded me that making a Hard problem look simple isn't about writing clever code.

It's about spending enough time understanding the problem that the final code naturally becomes simple.

A simple implementation is often the result of many small thoughts connecting together.

Not every simplification comes from learning a new algorithm.

Sometimes,

it comes from combining patterns that already exist in your own mind.

---

## Final Reflection

When I first started solving DSA problems,

I mostly focused on getting Accepted.

Then,

I started focusing on optimization.

Today,

I noticed something different.

I started focusing on simplifying the thinking itself.

That feels like progress.

The final solution to the Hard problem became:

- One traversal.
- One comparison.
- One `if` statement.

Not because the problem became easier.

Not because I memorized a trick.

But because I gradually connected ideas I had already learned.

I think that's the direction I want my learning to continue.

Not collecting hundreds of isolated algorithms.

But building a network of reusable patterns that naturally connect together whenever a new problem appears.

---

## Related LeetCode Solutions

### 154. Find Minimum in Rotated Sorted Array II
**Thinking in Patterns: When My Brain Connected Fixed & Moving Pointers with Current vs Best-So-Far**

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/8445644/thinking-in-patterns-when-my-brain-conne-q3nb/

---

### 169. Majority Element
**Thinking in Patterns: The Problem's Guarantee Became the Solution**

https://leetcode.com/problems/majority-element/solutions/8445424/thinking-in-patterns-the-problems-guaran-pmt7/