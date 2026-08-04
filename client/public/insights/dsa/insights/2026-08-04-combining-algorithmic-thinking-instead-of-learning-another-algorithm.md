# Combining Algorithmic Thinking Instead of Learning Another Algorithm

---

## 1. Context

Today, I solved **3Sum**.

After submitting it successfully, I immediately moved on to **3Sum Closest**.

Initially, I thought this would require learning another algorithm.

Instead, it became a continuation of what I had already learned.

---

## 2. Starting With What I Already Knew

The first thing I asked myself was,

> "Can I solve this using the same approach as 3Sum?"

Looking at the problem, the answer seemed to be yes.

The overall algorithm didn't need to change.

- Sort the array.
- Fix one element.
- Use two pointers.
- Move the pointers based on the current sum.

So I began by mentally reusing the exact same solution I had written just a few minutes earlier.

### 3Sum

![Accepted 3Sum Solution](/images/images-from-learning/3sum-sol.png)

- 📖 **LeetCode Problem:** https://leetcode.com/problems/3sum/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/3sum/solutions/8440647/thinking-in-patterns-fix-one-element-use-o5xu/

---

## 3. The Question That Changed Everything

While thinking through the solution,

I realized something.

In **3Sum**, every iteration asks a very simple question.

> "Did I find a triplet whose sum is exactly zero?"

If yes,

store the triplet.

Otherwise,

continue searching.

But **3Sum Closest** asks a different question.

Every iteration still produces one triplet.

Every triplet still produces one sum.

But now I don't need every valid answer.

I only need **one** answer.

The one that's closest to the target.

That was the only part I couldn't directly reuse from 3Sum.

---

## 4. Then Another Pattern Came Back

While thinking about that question,

another problem I had solved earlier suddenly came to mind.

**Max Consecutive Ones.**

In that problem,

every iteration produced a

```text
currentCount
```

and I continuously compared it with

```text
maxCount
```

Whenever the current answer became better,

I updated the best answer.

That exact thinking fit perfectly here.

Instead of

```text
currentCount

↓

maxCount
```

it became

```text
currentSum

↓

closestSum
```

The only thing that changed was the comparison.

Instead of asking

```text
Is the current value larger?
```

I asked

```text
Is the current sum closer to the target?
```

using

```java
Math.abs(target - currentSum)
```

and

```java
Math.abs(target - closestSum)
```

The searching algorithm came from **3Sum**.

The answer-tracking logic came from another problem I had solved before.

Without consciously planning it,

I had combined both ideas into one solution.

---

## 5. A Small Realization About Myself

The accepted solution felt good.

But looking back,

that wasn't the biggest learning.

The bigger realization was noticing **how** I arrived at the solution.

I didn't look for another algorithm.

I didn't search for another pattern.

Instead,

my brain automatically started pulling together ideas from problems I had already solved.

The two-pointer searching logic from one problem.

The current vs best-so-far tracking logic from another.

That combination produced the solution naturally.

It made me realize something about my own learning.

Maybe pattern recognition isn't something I'm trying to force anymore.

Maybe it's slowly becoming a habit.

---

## 6. Final Solution

![Accepted 3Sum Closest Solution](/images/images-from-learning/3sum-closest-sol.png)

- 📖 **LeetCode Problem:** https://leetcode.com/problems/3sum-closest/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/3sum-closest/solutions/8440694/thinking-in-patterns-combining-two-point-wqms/