# DSA Insight — From Restarting Every Streak to Maintaining State

---

## 1. Context

Today's problem looked deceptively simple.

> Max Consecutive Ones

Given a binary array, find the maximum number of consecutive `1`s.

At first, I immediately thought about checking every possible streak.

It felt natural.

---

## 2. My First Intuition

My initial thought was:

> Start from every `1` and keep moving right until a `0` appears.

For every starting position:

- Count consecutive `1`s.
- Compare the count with the maximum.
- Move to the next position.
- Repeat.

Conceptually, it works.

But something started bothering me.

---

## 3. The Question That Changed My Thinking

I asked myself:

> "Am I counting the same `1`s more than once?"

Consider:

```text
1 1 1 1 1
```

Starting from the first `1`, I count:

```text
5
```

Then from the second:

```text
4
```

Then:

```text
3
```

Then:

```text
2
```

Finally:

```text
1
```

The same sequence is being counted repeatedly.

I wasn't discovering new information.

I was repeating work.

---

## 4. The Realization

That made me rethink the problem.

Instead of asking:

> "Where should I start counting?"

I changed the question to:

> "Why am I restarting the count at all?"

The answer was:

I don't need to.

A consecutive streak already tells me everything I need while I'm traversing it.

---

## 5. Thinking in State Instead of Restarting

Instead of restarting the count for every position, I only needed two pieces of information:

- The current streak of consecutive `1`s.
- The largest streak seen so far.

Now the logic became simple.

When I encounter:

- `1`
  - Extend the current streak.
  - Update the maximum if needed.
- `0`
  - The streak ends.
  - Reset the current streak.

No recounting.

No restarting.

Just continue moving forward.

---

## 6. The Result

After changing my way of thinking, the implementation naturally became a single-pass solution.

Instead of repeatedly counting the same streaks, I maintained the current state while traversing the array only once.

![Accepted Solution](/images/images-from-learning/max-consecutive-ones-accepted-solution.jpeg)

The solution was accepted with an efficient runtime, but the real achievement wasn't the acceptance—it was realizing **why restarting the count was unnecessary**.

---

## 7. The Bigger Insight

The important realization wasn't about consecutive ones.

It was about maintaining state.

Sometimes the information you're looking for is already available from the previous step.

Instead of recomputing it, simply update it.

The current streak is nothing more than the previous streak plus one.

Or zero if the streak breaks.

---

## 8. A Thinking Pattern

I noticed another pattern in my learning.

Whenever my first instinct is:

> "Start from every position..."

I should pause and ask:

> "Can I carry information from the previous iteration instead?"

Many array problems don't require restarting.

They require maintaining a running state.

---

## 9. Beginner Insight

When learning DSA, it's easy to think that optimization comes from clever tricks.

In reality, many optimizations come from asking one simple question:

> "Am I doing the same work more than once?"

If the answer is yes,

there's often a better way.

---

## 10. Takeaway

> Restarting usually means recomputing.

> Traversing while maintaining state often removes repeated work.

> Before starting over, ask whether the previous iteration already contains the information you need.

> Efficient algorithms often come from avoiding repeated computation, not from writing more complex code.