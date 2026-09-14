# DSA Insight — The Example Showed Me Not to Add Distinctness Conditions

---

## 1. Context

Today's problem was **1925. Count Square Sum Triples**.

The definition says a square triple `(a, b, c)` satisfies:

`a² + b² = c²`

I used three nested loops and checked this condition for every possible combination.

---

## 2. The Important Detail I Noticed

The example was more important than it initially looked.

For `n = 5`, it gives:

`(3,4,5)`  
`(4,3,5)`

This told me that `(a, b, c)` is an **ordered triple**.

So I did not add unnecessary conditions such as:

```java
i != j
i != k
j != k
```

The problem doesn't require the three values to be distinct.

The example made that clear.

![Problem Statement](/images/images-from-learning/count-square-sum-triples-problem.png)

---

## 3. Connecting It With the Constraint

The constraint is:

`1 <= n <= 250`

This also gave me confidence that I could directly use three nested loops instead of looking for a more optimized approach.

I could iterate through:

`i = 1 ... n`  
`j = 1 ... n`  
`k = 1 ... n`

and check:

```java
if ((i * i) + (j * j) == (k * k)) {
    countOfTriples++;
}
```

This gives an `O(n³)` solution, which is acceptable for the given constraint.

![My Implementation](/images/images-from-learning/count-square-sum-triples-implementation.png)

---

## 4. What I Actually Learned

The useful part wasn't simply "read the problem statement."

It was learning to use the **example to understand what the problem considers a separate valid combination**.

I could have incorrectly assumed:

> "A triple should contain three distinct numbers."

But `(3,4,5)` and `(4,3,5)` clearly show that this assumption would be wrong.

The constraint also helped me recognize that the straightforward brute-force approach was sufficient.

---

## 5. Takeaway

> **Don't add restrictions that the problem never asked for.**

The definition told me **what condition to check**.

The example told me **how the triple should be interpreted**.

The constraint told me **that `O(n³)` was practical**.

Those three pieces of information directly shaped my implementation.