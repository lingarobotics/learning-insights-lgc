# DSA Insight — Prefix Sums, HashMaps & Thinking in Growth

---

## 1. Context

Today started with a simple LeetCode problem:

> Left and Right Sum Differences

At first glance, it looked like a problem about arrays.

But while solving it, I ended up understanding three deeper concepts:

- Prefix sum thinking
- Big-O with sequential vs nested loops
- HashMap as a lookup structure

Instead of memorizing the solution, I kept asking:

- Why do we calculate the total sum first?
- Why are two loops still O(n)?
- Why use a HashMap instead of multiple if-else statements?

---

## 2. The Insight

The biggest realization today was:

> Before performing the actual computation, identify the information you need first.

For this problem, that information was:

> Total Sum

Instead of recalculating the right side every time,

I realized I could compute:

rightSum = totalSum - leftSum - currentElement

This transforms repeated work into constant-time work for every element.

---

### My thinking

Instead of asking:

> "How do I find the right sum?"

I changed the question to:

> "What information would let me calculate the right sum instantly?"

That answer was:

> Total Sum

---

## 3. Sequential Loops vs Nested Loops

One question stayed in my head:

"If I have two for-loops, shouldn't that become O(n²)?"

After breaking it down, I realized something fundamental.

Sequential loops:

for (...)
for (...)

perform

n + n

operations.

Which becomes:

2n

Since Big-O ignores constants,

it remains:

O(n)

---

Nested loops are different.

for (...)
    for (...)

perform

n × n

operations.

Which becomes:

O(n²)

---

### Key realization

I learned a very simple mental rule.

> Sequential loops ADD work.

> Nested loops MULTIPLY work.

This is much easier to remember than memorizing formulas.

---

## 4. HashMap — Thinking Beyond if-else

The next concept I explored was HashMap.

Initially, I saw Roman numerals like:

I
V
X
L

as individual conditions.

Then I realized:

This is simply a lookup problem.

Instead of writing

if(c == 'I')
else if(c == 'V')
...

I can store

'I' → 1
'V' → 5
'X' → 10

inside a HashMap.

Then retrieving becomes:

roman.get(c)

I immediately connected this with Python.

> Java HashMap is conceptually the same as Python Dictionary.

---

## 5. A Small Java Learning

While solving the problem, I encountered:

Math.abs()

Initially it looked like another Java method.

Then I noticed something simpler.

Whenever mathematics writes

|x|

Java writes

Math.abs(x)

---

### Key realization

Mathematical notation often has direct equivalents in programming.

Instead of memorizing methods,

I can translate mathematical symbols into Java.

---

## 6. Why This Matters

Today's learning wasn't really about Roman numerals or prefix sums.

It was about reducing unnecessary work.

In software engineering,

before writing more code,

ask:

"What information can I compute once and reuse?"

That single question improves both algorithms and system design.

---

## 7. My Learning Approach

I noticed a pattern in how I learn.

I rarely stop at:

"What is the solution?"

Instead, I keep asking:

- Why does this work?
- Why is it O(n)?
- Why use this data structure?
- What problem is this solving?

Those questions often teach me more than the problem itself.

---

## 8. Beginner Insight (What I Wish I Knew Earlier)

Many beginners memorize:

- Prefix Sum
- HashMap
- O(n)

But the important part is understanding:

Why they reduce work.

Data structures are not chosen because they are popular.

They are chosen because they eliminate unnecessary computation.

---

### Key beginner shift

Don't ask:

> "Which algorithm solves this?"

Instead ask:

> "What repeated work am I doing?"

Then ask:

> "Can I compute it once?"

Most efficient algorithms are simply answers to those two questions.

---

## 9. Takeaway

> Compute reusable information before solving the actual problem.

> Sequential loops add work. Nested loops multiply work.

> HashMaps replace repeated searching with instant lookup.

> Mathematical notation often maps directly to programming functions.

> Good algorithms don't perform less work by magic—they avoid doing the same work twice.