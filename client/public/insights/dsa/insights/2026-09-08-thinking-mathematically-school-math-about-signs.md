# Thinking Mathematically: School Math About Signs Helped Me See the Same Problem Differently

---

## 1. Context

Around **12:15 AM on August 4th**, I clicked the **Submit** button on LeetCode for what became my **50th submission**.

That was my previous milestone.

I had already started thinking about LeetCode problems differently — not just asking:

> **"How do I solve this problem?"**

but also:

> **"What thinking pattern can I take from this problem?"**

Since then, I have continued solving and revisiting problems.

Now, around **1:13 AM on September 8th**, I am here again — clicking Submit.

This time, it became my **197th submission**.

But this particular submission wasn't interesting to me because of the number.

It was interesting because I was solving a problem I had **already solved before**, and I found myself approaching it from a completely different angle.

The problem was:

**LeetCode — Sign of the Product of an Array**

The first time I solved it, I used a direct way of maintaining the sign.

The second time, I looked at the problem through something I had learned much earlier in life:

**school mathematics.**

---

## 2. The Problem

The task is simple:

Given an integer array, determine the **sign of the product** of all its elements.

The answer can only be:

* `1` → positive
* `-1` → negative
* `0` → zero

At first glance, calculating the actual product might seem like the natural approach.

But the product itself is not what the problem is asking for.

We only need its **sign**.

That distinction is what makes the mathematical reasoning useful.

---

## 3. My First Solution

I had already solved this problem once.

My first approach was to simply maintain the current sign while traversing the array.

I started with:

```text
sign = 1
```

Then:

* If I encounter `0`, the answer is immediately `0`.
* If I encounter a negative number, I flip the sign.
* Positive numbers don't change the sign.

So the thought process was:

```text
Start with positive
        ↓
Traverse the array
        ↓
Zero?
 ├── Yes → return 0
 └── No
        ↓
Negative?
 ├── Yes → flip sign
 └── No → continue
        ↓
Return final sign
```

This was a correct and efficient solution.

### My first solution

![My First Solution](../images/images-from-learning/array-product-sol-first-approach.png)

The interesting thing is that **this solution was already enough**.

There was no correctness problem that needed fixing.

There was no complexity problem that needed fixing.

It was simply one valid way of representing the idea.

I could have stopped there.

But while revisiting the same problem, I started thinking about the mathematics behind why the sign changes.

That led me to a second solution.

---

## 4. Revisiting the Same Problem

Instead of asking:

> "How can I maintain the sign?"

I asked:

> **"What actually determines the sign of a product?"**

And the answer is something I learned back in school.

If we multiply negative numbers:

```text
(-) × (-) = (+)

(-) × (-) × (-) = (-)

(-) × (-) × (-) × (-) = (+)
```

So the actual values of the negative numbers don't matter for determining the final sign.

What matters is simply:

> **How many negative numbers are there?**

That was the key observation.

---

## 5. The School Mathematics Behind It

The rule is straightforward.

### Even number of negative numbers

For example:

```text
(-2) × (-5)
```

There are **2 negative numbers**.

Two negative signs cancel each other.

So:

```text
(-) × (-) = (+)
```

The result is positive.

Similarly:

```text
(-2) × (-5) × (-3) × (-4)
```

There are **4 negative numbers**.

Again, they pair up:

```text
(-) × (-) → (+)

(-) × (-) → (+)
```

So the final sign is positive.

---

### Odd number of negative numbers

Now consider:

```text
(-2) × (-5) × (-3)
```

There are **3 negative numbers**.

Two cancel each other:

```text
(-) × (-) → (+)
```

but one negative sign remains:

```text
(+) × (-) → (-)
```

So the result is negative.

This gives us the simple rule:

```text
Even number of negatives → Positive
Odd number of negatives  → Negative
```

And that immediately translates into programming.

---

## 6. Zero Is a Separate Case

There is one more mathematical rule we need:

```text
0 × anything = 0
```

Therefore, if the array contains even a single zero, the product is zero.

So before worrying about the parity of negative numbers:

```text
If num == 0
    → return 0
```

Once there is no zero, the only remaining question is:

> **Is the number of negative values even or odd?**

That's the entire problem.

---

## 7. From Mathematics to an Algorithm

The mathematical reasoning can now be translated directly into steps.

### Step 1 — Traverse the array

Visit every element.

### Step 2 — Check for zero

If any element is zero:

```text
return 0
```

There is no need to continue.

### Step 3 — Count negative numbers

Whenever:

```text
num < 0
```

increase the count.

### Step 4 — Check parity

After traversal:

```text
count % 2 == 0
```

means there are an even number of negative values.

Therefore:

```text
return 1
```

Otherwise:

```text
return -1
```

The complete reasoning becomes:

```text
Traverse
   ↓
Check for zero
   ↓
Count negative numbers
   ↓
Check even / odd
   ↓
Determine sign
```

---

## 8. My Second Solution

This became my second solution to the same problem.

![My Second Solution — Code and LeetCode Code-Style Analysis](../images/images-from-learning/array-product-sol-second-approach-school-math-leetcode-analysis-says-its-readablity-and-strucutre-as-excellent-greatjob-and-its-clean-readable-and-well-strucutred.png)

The important difference from my first solution is not that one is correct and the other is wrong.

**Both are correct.**

The difference is in the way I represented the reasoning.

### First solution

```text
Maintain the sign
```

Every negative number flips the current sign.

### Second solution

```text
Count the negative numbers
→ Check their parity
→ Determine the sign
```

The second approach came from explicitly recognizing the mathematical property behind the problem.

---

## 9. Why I Like the Second Approach

The thing I liked most about this solution is that I didn't need to calculate the product at all.

Suppose the array contains:

```text
[2, -3, 4, -5, -6]
```

The actual product is irrelevant.

I only need to observe:

```text
Negative numbers:

-3
-5
-6
```

There are **3 negative numbers**.

```text
3 % 2 != 0
```

Therefore:

```text
answer = -1
```

The magnitude of the numbers doesn't matter.

Whether the values are:

```text
-2, -3, -4
```

or:

```text
-2000, -37, -918273
```

the sign behaves the same way.

The problem has effectively been reduced from:

> **"What is the product?"**

to:

> **"What is the parity of the number of negative factors?"**

That is the mathematical simplification I found interesting.

---

## 10. A Second Look at My First Solution

Revisiting the problem also made me appreciate my first solution differently.

The first solution:

```text
negative → flip sign
```

is actually performing the same mathematical operation incrementally.

For example:

```text
Start:
sign = +

First negative:
sign = -

Second negative:
sign = +

Third negative:
sign = -
```

So every negative number effectively toggles the sign.

My second solution simply makes the underlying reason explicit:

```text
1 negative  → odd  → negative

2 negatives → even → positive

3 negatives → odd  → negative

4 negatives → even → positive
```

The two implementations are different representations of the same mathematical truth.

---

## 11. The Interesting Part: I Learned This in School

This is probably the part I enjoyed the most.

The mathematical rule behind the solution isn't something I learned from a DSA tutorial.

I learned the basic sign rules around **8th standard**.

At that time, it was simply school mathematics:

```text
+ × + = +
+ × - = -
- × + = -
- × - = +
```

Years later, while solving a programming problem, that same concept became an algorithmic tool.

I didn't need to learn a new complicated technique.

I needed to recognize that something I already knew could solve the problem.

That was a nice reminder for me:

> **Programming doesn't always require new knowledge. Sometimes it requires recognizing the usefulness of knowledge you already have.**

---

## 12. No Need to Calculate the Product

One of the first thoughts I had when looking at the problem was:

> "Could I just calculate the product?"

Mathematically, yes, the product would contain the information.

But it is unnecessary.

The problem isn't asking:

```text
What is the product?
```

It is asking:

```text
What is the sign of the product?
```

So calculating the entire product would be doing more work than necessary.

Instead, I only track the information that actually determines the answer.

That gives us:

```text
Zero?
→ Answer is 0.

No zero:
→ Count negative numbers.

Even?
→ Answer is 1.

Odd?
→ Answer is -1.
```

---

## 13. Complexity

The array needs to be traversed to determine whether there is a zero and how many negative numbers exist.

So in the worst case:

**Time Complexity: `O(N)`**

The algorithm only maintains a counter and a few variables.

So:

**Space Complexity: `O(1)`**

There is no need to create another array or store the elements.

And importantly, the early return for zero doesn't change the worst-case complexity.

A zero could occur at the very beginning, giving us an early `O(1)` case.

But if there is no zero, or the zero appears near the end, we still traverse most or all of the array.

Therefore the appropriate overall complexity remains:

```text
O(N) time
O(1) space
```

---

## 14. Something Else Was Different This Time

After submitting the second solution, I checked LeetCode's analysis.

And this was probably the most satisfying part.

For the first time, I got an external validation that wasn't just:

> **Accepted**

LeetCode's analysis identified the approach as:

**Array / Counting**

and identified the key idea as determining the sign of the product by **counting negative numbers and checking for zero**.

But the part that caught my attention was the efficiency analysis.

It reported:

**Current complexity: `O(N)`**

**Suggested complexity: `O(N)`**

with the suggestion:

> **“Perfectly optimized. No further changes needed for complexity.”**

![LeetCode Analysis — Optimality and Complexity](../images/images-from-learning/array-product-sol-second-approach-school-math-leetcode-says-its-optimal-no-more-optimal-needed-O\(n\)-suggestedapproach-is-same-asimplemented.png)

This was particularly satisfying because the approach I had arrived at independently was already aligned with what LeetCode considered optimal.

There was no additional asymptotic optimization suggested.

The implemented complexity was already:

```text
O(N)
```

and the suggested complexity was also:

```text
O(N)
```

---

## 15. And Then the Code Style Validation

The other part that stood out to me was LeetCode's code-style analysis.

It evaluated the code as:

**Readability: Excellent**

**Structure: Excellent**

And described it as:

> **Clean, readable, and well-structured.**

The second screenshot also shows the actual code that received this evaluation.

![Second Solution — Code Style Validation](../images/images-from-learning/array-product-sol-second-approach-school-math-leetcode-analysis-says-its-readablity-and-strucutre-as-excellent-greatjob-and-its-clean-readable-and-well-strucutred.png)

That was meaningful to me because code style is something I consciously care about while solving problems.

I don't want the solution to merely produce the correct answer.

I want the implementation to clearly represent the reasoning behind it.

In this case, the structure of the code followed the thought process naturally:

```text
Count negative numbers
        ↓
Handle zero
        ↓
Check parity
        ↓
Return sign
```

So the external evaluation wasn't only validating the complexity.

It was also validating the **clarity and structure of the implementation**.

---

## 16. What This Validation Means to Me

I don't see LeetCode's analysis as proving that my thinking is universally "the best."

There can be multiple correct ways to solve a problem.

My first solution is proof of that.

But in this particular case, something nice happened:

**My independently developed approach matched the platform's recommended approach.**

And:

```text
My reasoning
     ↓
Count negatives + check zero
     ↓
O(N)
     ↓
LeetCode: O(N), perfectly optimized
     ↓
Code structure: Excellent
     ↓
Readability: Excellent
```

That makes this submission a useful checkpoint for me.

It tells me that the mathematical abstraction I arrived at wasn't just an interesting way of looking at the problem.

It translated cleanly into an efficient and readable implementation.

---

## 17. Two Solutions, One Problem

Looking at both solutions together is actually more useful to me than looking at either one individually.

### First solution

```text
Traverse
   ↓
Check zero
   ↓
Negative?
   ↓
Flip sign
   ↓
Return sign
```

### Second solution

```text
Traverse
   ↓
Check zero
   ↓
Count negatives
   ↓
Check parity
   ↓
Return sign
```

Both are:

```text
O(N) time
O(1) space
```

The difference is the abstraction.

The first one thinks operationally:

> **"Every negative flips the sign."**

The second one thinks mathematically:

> **"The parity of negative factors determines the sign."**

And I think both ways of thinking are useful.

---

## 18. The Bigger Learning

This problem reminded me of something I have been noticing throughout my LeetCode journey.

Sometimes solving a problem isn't about discovering something completely new.

Sometimes it is about **revisiting something familiar from a different perspective**.

I already knew:

```text
negative × negative = positive
```

I already knew:

```text
odd / even
```

I already knew how to traverse an array.

I already knew how to write a loop and an `if` condition.

The new part was connecting those pieces:

```text
School mathematics
       ↓
Sign cancellation
       ↓
Parity of negative numbers
       ↓
Algorithmic invariant
       ↓
Array traversal
       ↓
O(N) solution
```

That connection is what I wanted to capture.

---

## 19. A Reusable Mathematical Thinking Pattern

The broader pattern I took from this problem is:

> **Don't calculate more information than the problem actually needs.**

The problem gives us an array.

It might tempt us to calculate its entire product.

But we don't need the magnitude of the product.

We only need its sign.

So we identify the smallest property that determines the answer:

```text
Zero exists?
        ↓
      Yes → 0

No
        ↓
Count negative numbers
        ↓
Even → +1
Odd  → -1
```

This is a useful way of approaching problems:

> **What information actually determines the answer?**

Once that is clear, the implementation can become much simpler.

---

## 20. From My Previous Solution to This One

This is also why I wanted to keep both solutions.

My first solution wasn't something I needed to discard.

It was the first representation of my understanding.

Then, while revisiting the problem, I found another representation.

So the progression became:

```text
First solution
      ↓
Maintain sign
      ↓
Revisit the same problem
      ↓
Think about the mathematics
      ↓
Recognize negative-number parity
      ↓
Second solution
      ↓
LeetCode validates approach
      ↓
LeetCode validates O(N) efficiency
      ↓
LeetCode validates readability & structure
```

That is much more interesting to me than simply having another Accepted submission.

---

## 21. Takeaway

My previous solution showed me how to **maintain the sign**.

My second solution reminded me that the sign can also be determined mathematically by the **parity of negative factors**.

And the idea came from something I learned around **8th standard**.

That was the part I wanted to remember.

A concept that once existed as a simple school-math rule:

```text
- × - = +
```

eventually became:

```text
Count negatives
      ↓
Check parity
      ↓
Determine product sign
```

And for the first time in this journey, LeetCode's own analysis independently aligned with both my **approach and implementation quality**:

* **Array / Counting**
* **`O(N)`**
* **No further optimization needed**
* **Readability: Excellent**
* **Structure: Excellent**
* **Clean, readable, well-structured**

So this wasn't just another solution.

It was a small example of how **old mathematical knowledge, when recognized in the right context, can become algorithmic thinking.**

And perhaps that's what I want to keep getting better at:

> **Not just learning more things, but learning to recognize what I already know — and where it can be applied.**

---

## Resources

* 📖 **LeetCode Problem:** https://leetcode.com/problems/sign-of-the-product-of-an-array/

* 💻 **My First Approach:** https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/8507861/thinking-in-patterns-when-the-product-is-mo4k/

* 🧮 **My Second Approach — Thinking Mathematically:** https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/8508215/thinking-mathematically-school-math-abou-ncm0/

------

## Author

**Ramalingam Jayavelu**

Portfolio: [linga.engineer](https://linga.engineer)  
GitHub: [github.linga.engineer](https://github.linga.engineer)  
LinkedIn: [linkedin.linga.engineer](https://linkedin.linga.engineer)  
LeetCode: [leetcode.linga.engineer](https://leetcode.linga.engineer)  
Blogs: [blogs.linga.engineer](https://blogs.linga.engineer)  
Email: [contact@linga.engineer](mailto:contact@linga.engineer)
