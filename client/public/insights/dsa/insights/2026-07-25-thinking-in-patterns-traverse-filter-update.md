# Thinking in Patterns: Traverse, Filter, Update

---

## 1. Context

Today's problem looked different from the previous matrix problems I had solved.

The task was to find the **largest prime number** present in either the primary or secondary diagonal of a square matrix.

At first glance, it seemed like a completely new problem.

But while solving it, I realized something interesting.

It wasn't introducing a completely new algorithm.

It was asking me to reuse patterns I had already learned.

---

## 2. My First Intuition

The first thing I noticed was that I already knew how to traverse both diagonals.

I had solved **Matrix Diagonal Sum** before, so the traversal itself wasn't new.

Instead of thinking,

> "How do I solve this problem?"

my brain slowly shifted towards asking,

> "What changes compared to the last problem?"

That question changed everything.

The traversal stayed exactly the same.

Only the condition and the action changed.

---

## 3. Breaking the Problem into Small Pieces

Instead of trying to solve the problem all at once, I mentally decomposed it into smaller responsibilities.

- Traverse both diagonals.
- Get the current value.
- Check whether it is a prime number.
- Compare it with the current largest prime.
- Update the answer if necessary.

None of these steps were difficult individually.

The challenge was simply putting them together.

---

## 4. Building a Helper Instead of Repeating Logic

One realization during the implementation was that checking whether a number is prime is a responsibility on its own.

Rather than mixing that logic inside the traversal, I extracted it into a separate helper method.

This made the traversal easier to read because it could focus only on visiting elements and updating the answer.

The prime checking logic had a single responsibility.

---

## 5. Small Optimization, Same Algorithm

Initially, I checked divisors only up to the square root of the number by writing:

- `d <= Math.sqrt(num)`

The solution was correct and accepted.

Later, I realized that the square root calculation would be performed repeatedly inside the loop.

A small optimization was to replace it with:

- `d * d <= num`

The logic remains mathematically identical, but it avoids repeated calls to `Math.sqrt()`.

The algorithm didn't change.

The implementation simply became a little more efficient.

---
## 6. Accepted Solution

After putting everything together, the solution was accepted.

![Accepted Solution](/images/images-from-learning/diagonal-prime-large-sol.jpeg)

Getting the **Accepted** verdict was satisfying, but that wasn't the part I wanted to remember.

The more valuable takeaway came while reflecting on *how* I had solved it.

I realized I wasn't learning a completely new algorithm.

I was reusing a traversal pattern I had already learned and applying a different operation to each visited element.

That realization turned this problem from "another LeetCode question" into a reusable way of thinking.

The links to the original problem and my accepted solution are available at the end of this article for anyone who wants to explore the implementation.

---

## 7. The Bigger Realization

While solving this problem, I noticed that the traversal never changed.

Only two things changed.

- The condition.
- The action.

The pattern looked like this:

```
Traverse
    ↓
Filter
    ↓
Update
```

For this problem:

- **Traverse** → Visit both diagonals.
- **Filter** → Keep only prime numbers.
- **Update** → Store the largest prime found.

---

## 8. Same Pattern, Different Operation

While solving this problem, I naturally compared it with **Matrix Diagonal Sum**, which I had solved earlier.

At first, they looked like two completely different problems.

- One asked me to calculate the sum of both diagonals.
- The other asked me to find the largest prime number on the diagonals.

But once I stopped looking at the problem statements and started looking at the **pattern**, I noticed something interesting.

The traversal never changed.

What changed was **what I did with each element after visiting it.**

| Matrix Diagonal Sum | Largest Prime in Diagonal |
| :------------------ | :------------------------ |
| Traverse both diagonals | Traverse both diagonals |
| Visit every element | Visit every element |
| Add the value to the running sum | Check whether the value is prime |
| Continue until traversal ends | Update the running maximum if it is prime |

> ### 💡 The Moment It Clicked
>
> ```text
> Matrix Diagonal Sum
>
> Traverse
>     ↓
> Visit Value
>     ↓
> Add to Sum
>
>
> Largest Prime in Diagonal
>
> Traverse
>     ↓
> Visit Value
>     ↓
> Check Prime
>     ↓
> Update Maximum
> ```
>
> **The traversal stayed the same.**
>
> **Only the operation performed after visiting each element changed.**

That realization completely changed how I looked at the problem.

I wasn't learning a brand-new traversal.

I was reusing an existing traversal and simply swapping the operation performed on each visited element.

From that point on, these no longer felt like two different problems.

They became two different applications of the same underlying pattern.

---

## 8. A Reusable Thinking Pattern

Once I noticed this pattern, I started seeing how many other problems could follow the same structure.

The traversal can remain exactly the same.

Only the condition and the action need to change.

For example:

- Largest even number on the diagonals.
- Count prime numbers.
- Sum all positive numbers.
- Store all negative numbers.

Different problems.

Same traversal.

Different condition.

Different action.

---

## 9. Takeaway

This problem reminded me that learning DSA isn't about memorizing hundreds of solutions.

It's about recognizing reusable patterns.

Whenever I face a new problem now, I want to ask myself:

> "Have I already seen this traversal before?"

If the answer is yes, then the real questions become:

- What condition am I checking?
- What operation am I performing on each visited element?

For this problem, the pattern was simple:

```text
Traverse
    ↓
Visit Element
    ↓
Check Prime
    ↓
Update Maximum
```

The problem changed.

The traversal didn't.

And that's the lesson I wanted to remember.

---

## Resources

- 📖 **LeetCode Problem:** https://leetcode.com/problems/prime-in-diagonal/
- 💻 **My Accepted Solution:** https://leetcode.com/problems/prime-in-diagonal/solutions/8418432/thinking-in-patterns-traverse-filter-upd-nz22/