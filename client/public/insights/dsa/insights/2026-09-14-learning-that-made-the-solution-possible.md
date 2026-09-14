# DSA Insight — The Learning Behind the Solution

---

## 1. Context

Today's problem was **Square Is White**.

The task was to determine whether a given chessboard coordinate represents a white square using:

* Columns: `a` to `h`
* Rows: `1` to `8`

While solving it, I learned a small Java concept that I hadn't properly understood before.

---

## 2. My First Approach

I initially looked at the problem as a set of conditions:

* If the row is even, certain characters represent white.
* If the row is odd, the remaining characters represent white.

So I wrote multiple character comparisons to determine the result.

![My Solution](/images/images-from-learning/chessboard-sol.png)

---

## 3. The Key Learning

The important part wasn't the chessboard pattern.

It was understanding that **`char` values can be used in arithmetic operations in Java**.

For example:

```java
'a' - 'a'   // 0
'b' - 'a'   // 1
'c' - 'a'   // 2
```

This lets us convert:

`a` → `0`, `b` → `1`, ..., `h` → `7`

Similarly:

```java
'1' - '0'   // 1
'2' - '0'   // 2
```

So:

```java
coordinates.charAt(0) - 'a'
coordinates.charAt(1) - '0'
```

turn the coordinate's characters into useful numbers.

---

## 4. Why This Matters

Once I understood this, the problem became much simpler.

Instead of explicitly checking every character, I could use the **numeric positions and their parity** to determine the square's color.

This was the concept that allowed me to write the accepted solution.

---

## 5. The Real Learning

The biggest takeaway from this problem was:

> **Before writing many conditions, understand what information is already encoded in the input.**

A character isn't only something to compare.

It can also carry a numerical position that can be used to derive a pattern.

---

## 6. Takeaway

> I couldn't have written the accepted solution without understanding this concept first.

> The real learning from this problem was not just the chessboard pattern—it was learning how `char` arithmetic can convert characters into meaningful numeric values.

## Small language concepts like this can completely change how we approach a DSA problem.

## Author

**Ramalingam Jayavelu**

Portfolio: [linga.engineer](https://linga.engineer)
GitHub: [github.linga.engineer](https://github.linga.engineer)
LinkedIn: [linkedin.linga.engineer](https://linkedin.linga.engineer)
LeetCode: [leetcode.linga.engineer](https://leetcode.linga.engineer)
Blogs: [blogs.linga.engineer](https://blogs.linga.engineer)
Email: [contact@linga.engineer](mailto:contact@linga.engineer)
