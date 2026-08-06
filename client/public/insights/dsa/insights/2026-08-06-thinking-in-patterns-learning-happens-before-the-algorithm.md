# Thinking in Patterns: Learning Happens Before the Algorithm

---

## 1. Context

Today's LeetCode problem looked simple.

The implementation itself wasn't difficult.

What surprised me was that most of my learning didn't come from the algorithm.

It came from everything that happened **before** and **around** the algorithm.

This problem reminded me that solving problems isn't only about writing code.

Sometimes the real learning happens before the first line of code is even written.

---

## 2. Understanding the Problem Comes First

The first blocker wasn't algorithmic.

It was conceptual.

The problem mentioned **digit product**.

I didn't know what that meant.

The interesting part wasn't the term itself.

Tomorrow it could be something completely different.

- Prefix
- Suffix
- Lexicographical order
- Monotonic
- Permutation

Any unfamiliar concept immediately blocks problem solving.

During practice, I can ask ChatGPT.

During an interview, I cannot stop and ask the interviewer to explain every term in the problem statement.

That made me realize something.

Before searching for an algorithm, I should first ask myself:

> **Do I understand every concept used in this problem?**

If the answer is no,

understanding that concept becomes Step 0.

Only after that does algorithmic thinking begin.

---

## 3. Applying Previous Learning

Another realization came from something I had already learned.

Earlier, while learning from Educative, I came across a simple guideline.

- Known number of iterations → `for`
- Unknown number of iterations → `while`

Today's problem naturally fit that idea.

I didn't know how many candidate numbers I would have to check before finding the answer.

That immediately reminded me of the concept I had already learned.

The important realization wasn't learning `while` loops.

It was recognizing the correct situation to apply an existing idea.

That made me realize something about learning itself.

Learning isn't complete when I understand a concept.

Learning becomes useful when I naturally recognize where it belongs.

---

## 4. Nested Loops Don't Always Mean O(n²)

Initially, seeing two nested `while` loops made me instinctively think:

```text
O(n²)
```

Then I stopped and questioned my own assumption.

The outer loop searches candidate numbers.

The inner loop only traverses the digits of the current number.

They are not iterating over the same input.

That completely changed the complexity analysis.

This reminded me that time complexity shouldn't be guessed simply by counting nested loops.

Instead, I should always ask:

> **What is each loop actually iterating over?**

---

## 5. The Problem Controlled the Loop

This was probably my favorite realization.

My outer loop was intentionally designed so that its condition would always remain true.

```java
while (smallNum >= n)
```

Since `smallNum` only increases,

the loop condition never becomes false.

Initially, I even introduced a logical bug.

Instead of checking

```java
product % t == 0
```

I accidentally wrote

```java
product % t == smallNum
```

Because of that mistake, the success condition was never satisfied, so the loop never terminated.

Correcting that one condition immediately changed everything.

The loop wasn't supposed to end because its condition became false.

It was supposed to end because the **problem's condition** became true.

That completely changed how I think about search problems.

Sometimes,

the loop doesn't control its own termination.

The problem does.

---

## 6. Accepted Solution

After correcting the termination condition, the solution was accepted.

![Accepted Solution](/images/images-from-learning/smallest-digit-product-sol.png)

The green checkmark felt good.

But the real takeaway wasn't the acceptance.

It was everything I learned before reaching it.

---

## 7. Takeaway

Looking back, this "Easy" problem taught me lessons that had very little to do with the algorithm itself.

I walked away with four reusable ideas.

- Understand every concept before searching for an algorithm.

- I had previously learned that a 'while' loop is a good choice when the number of iterations is unknown. This problem reminded me that learning isn't just about remembering concepts—it's about recognizing the right moment to apply them. That single idea helped me move forward.

- Nested loops don't always mean O(n²). For this solution, the complexity is O(k × d), where k is the number of candidate numbers checked and d is the number of digits in each candidate number.

- A loop doesn't always terminate because its condition becomes false. Sometimes, the required answer itself terminates the loop through return.

Those lessons will stay useful long after I forget this particular problem.

---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/smallest-divisible-digit-product-i/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/8444548/thinking-in-patterns-let-the-problems-co-viw5/