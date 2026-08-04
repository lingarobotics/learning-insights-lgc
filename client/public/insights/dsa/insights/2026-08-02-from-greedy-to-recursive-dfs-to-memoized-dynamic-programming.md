# From Greedy to Recursive DFS to Memoized DP

---

## 1. Context

This wasn't one of those problems where I immediately recognized the pattern.

Instead, it became one of the longest learning sessions I've had while solving a single LeetCode problem.

When I first read the problem statement, my brain immediately leaned toward a greedy approach.

At every row, I only have two possible choices.

- Stay at index `i`
- Move to index `i + 1`

So my first intuition was simple.

> "Why not compare both values and always move to the smaller one?"

At first glance, it felt completely reasonable.

But after thinking about it for a while, I realized something.

Choosing the smaller value **right now** doesn't guarantee the minimum total path in the future.

The problem wasn't asking for the locally smallest choice.

It was asking for the globally minimum path.

That realization completely changed my direction.

---

## 2. I Didn't Set Out to Learn DP

Interestingly, I never opened this problem thinking,

> "Today I'm going to learn Dynamic Programming."

I simply wanted to solve the Triangle problem.

When my greedy intuition failed, I realized I had reached a point where another way of thinking was required.

At that moment, I also realized something about myself.

Although I knew recursion and DFS conceptually, I had never become comfortable implementing them from scratch.

Instead of asking AI to solve the problem,

I used it as a learning partner.

The goal wasn't to obtain code.

The goal was to understand execution.

That single decision changed the entire learning session.

The Triangle problem slowly transformed into a recursion experiment.


---

## 3. A Different Way of Looking at the Problem

During the discussion, another realization appeared.

This problem isn't about comparing two numbers.

Every position asks the same question.

> **"What is the minimum path sum starting from this `(row, col)`?"**

Once I started thinking that way,

the recursive state naturally became

```text
(row, col)
```

From every state,

there are only two possible next states.

```text
(row + 1, col)

(row + 1, col + 1)
```

That naturally led to recursion.

Something else clicked here.

Although the input itself is simply a

```java
List<List<Integer>>
```

the recursive execution behaves like a DFS traversal over the state space.

Until this problem, I mostly associated DFS with trees and graphs.

This problem taught me that DFS is not tied to a particular data structure.

It's simply one way of exploring states.

---

## 4. Learning Recursion Before Learning DP

This became the biggest learning of the entire problem.

Instead of memorizing recursion,

I wanted to understand how the JVM actually executes recursive calls.

I spent most of the session tracing every single recursive call.

Questions that looked simple suddenly became very important.

- Which function receives the returned value?
- Why doesn't the base case calculate left and right?
- Why does only the immediate caller receive the returned value?
- How does every function "wait" for the deeper recursive call?

After tracing the execution manually,

I finally understood something that had always felt abstract.

Every recursive function pauses.

The deeper recursive call finishes first.

Its returned value goes only to its immediate caller.

That caller then performs its own computation,

returns its answer,

and the process continues upward until the very first function receives the final result.

Only after understanding this execution flow did I write the recursive solution completely by myself.

---

## 5. The First Implementation

After understanding how recursion actually executes, I wrote the recursive solution completely by myself.

Logically, the solution was correct.

Computationally, it wasn't.

The submission ended with a **Time Limit Exceeded**.

![Pure Recursion](/images/images-from-learning/triangle-pure-recursion-tle.png)

Surprisingly, I wasn't disappointed.

For the first time, a Time Limit Exceeded error didn't feel like a failure.

Instead, it confirmed something much more important.

The recursive thinking was correct.

The recursive state was correct.

The implementation was correct.

The only remaining problem was efficiency.

That failure naturally led to the next question.

> "Why am I solving the same state multiple times?"

That single question became the doorway to Dynamic Programming.

---

## 6. When Dynamic Programming Finally Clicked

While tracing the recursion,

I noticed something interesting.

The same state

```text
(row, col)
```

was being solved repeatedly.

For example,

the same recursive function would be called multiple times from different paths,

even though the answer could never change.

That was the moment Dynamic Programming finally made sense to me.

Not as another algorithm.

Not as another topic.

Simply as

> **"If I've already solved this exact state once, why solve it again?"**

That one realization completely changed the way I think about DP.

Recursion became

```text
Solve

↓

Return
```

Memoization simply became

```text
Already solved?

↓

Yes → Return stored answer

↓

No → Solve, Store and Return
```

---

## 7. Another Time Limit Exceeded...

I implemented memoization immediately.

I expected it to work.

It didn't.

Another Time Limit Exceeded.

At first,

I thought my understanding of DP was still incomplete.

It wasn't.

The algorithm was correct.

The bug was hiding inside a very small implementation detail.

---

## 8. The Sentinel Value Lesson

Initially,

I used

```java
-1
```

to represent

> "Not computed."

Then I noticed something in the problem constraints.

Negative numbers are allowed.

Which means

```java
-1
```

can also be a perfectly valid minimum path sum.

Now my memoization table couldn't distinguish between

```text
Not Computed
```

and

```text
Computed Answer = -1
```

That tiny implementation detail caused memoization to fail,

which meant recursion kept recomputing states.

Another Time Limit Exceeded.

![DP Sentinel Bug](/images/images-from-learning/triangle-dp-sentinel-bug-tle.png)

That bug taught me something beyond this problem.

Sometimes the algorithm is completely correct.

The implementation detail is what makes it fail.

---

## 9. The Final Fix

Instead of using

```java
int[][]
```

I switched to

```java
Integer[][]
```

Now,

every cell initially contains

```text
null
```

instead of `-1`.

`null` now means

> "This state has not been computed."

Every integer,

including negative values,

represents a valid computed answer.

That small implementation change fixed the entire solution.

![Accepted Solution](/images/images-from-learning/triangle-dp-accepted.png)

---

## 10. Looking Back

Looking back, this wasn't really a Dynamic Programming problem for me.

It started as a greedy intuition.

Then it became a recursion lesson.

Later, it became a DFS lesson.

Only after understanding recursive execution did Dynamic Programming feel natural.

The accepted solution was satisfying.

But the bigger achievement was realizing that I no longer think of recursion, DFS and DP as isolated topics.

I now see them as ideas that naturally build on one another while solving a real problem.

That made this learning feel organic instead of memorized.


---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/triangle/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/triangle/solutions/8437308/triangle-problem-from-greedy-recursive-d-jxze/