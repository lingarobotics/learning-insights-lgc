# Thinking in Patterns: Another Stone Game — Same Top-Down DP Pattern, Different State

> *"I had just seen this pattern. This time, I had to recognize what the state actually represents."*

---

## Intuition

When I saw this problem, I immediately had a feeling that I had seen this pattern before.

I had just solved **Stone Game II**.

That problem made me think in terms of:

- Recursion
- A changing state
- Top-Down DP
- Memoization

So when I saw another Stone Game, my first thought was:

> "This could probably be recursion + Top-Down DP again."

And my intuition was right.

But there was a variation.

The difference was not really the DP pattern itself.

The difference was the **state**.

In Stone Game II, I had more than one piece of information representing the state.

Here, I only need **one state: `n`**.

`n` represents the number of stones currently remaining.

So:

```text
solve(n)
```

means:

> Can the current player win when there are `n` stones remaining?

That made this problem feel much simpler in terms of state.

---

## Recognizing the Pattern Again

I already knew the general Top-Down DP pattern from the previous Stone Game.

The structure is:

```text
solve(state)
    ↓
try possible moves
    ↓
recursively solve smaller states
    ↓
store the result
```

Here, the possible moves are removing a perfect square:

```text
1, 4, 9, 16, ...
```

So from a state `n`, every possible move creates another state:

```text
n → n - 1
n → n - 4
n → n - 9
n → n - 16
...
```

For example, if:

```text
n = 10
```

the possible next states are:

```text
10 → 9
10 → 6
10 → 1
```

So the recursion naturally becomes:

```text
solve(10)
    ↓
solve(9)
solve(6)
solve(1)
```

---

## The State Was the Important Part

This was the main thing I wanted to understand.

In my previous Stone Game, the state was more complicated.

I needed multiple pieces of information to describe where I was in the game.

Here, I don't.

The entire state can be represented by just:

```text
n
```

because knowing the number of remaining stones is enough to determine all possible future moves.

So my DP becomes simply:

```text
dp[n]
```

instead of something like:

```text
dp[i][m]
```

The pattern is still Top-Down DP.

The state representation is what changed.

---

## Understanding the Recursion

I initially thought about the recursion by following one branch.

Suppose:

```text
n = 10
```

The first possible move is removing `1`.

So:

```text
solve(10)
    ↓
solve(9)
```

Then from `9`, the first possible move is again removing `1`:

```text
solve(9)
    ↓
solve(8)
```

And this continues:

```text
solve(10)
    ↓
solve(9)
    ↓
solve(8)
    ↓
solve(7)
    ↓
solve(6)
    ↓
...
    ↓
solve(0)
```

When we reach:

```text
solve(0)
```

there are no stones left.

The current player has no move.

Therefore:

```text
solve(0) = false
```

Then the recursion starts returning back upward.

The important game-theory observation is:

> If I can make a move that puts my opponent into a losing state, then I can win.

So if:

```text
solve(n - square) == false
```

then:

```text
solve(n) == true
```

I found a move that makes the opponent lose.

---

## Why Memoization?

Without memoization, the same states can be calculated again and again.

Different paths can eventually reach the same value of `n`.

So instead of calculating:

```text
solve(5)
```

multiple times, I store its result:

```text
dp[5]
```

Then whenever I reach state `5` again, I can immediately reuse the answer.

This is what turns the recursive solution into **Top-Down DP with Memoization**.

---

## The Base Case

The simplest state is:

```text
n = 0
```

There are no stones left.

The current player cannot make any move.

So:

```java
if (n == 0) {
    return false;
}
```

This also becomes the starting point for the recursion to return its results back upward.

---

## The Final Solution

```java
class Solution {

    Boolean[] dp;

    public boolean winnerSquareGame(int n) {
        dp = new Boolean[n + 1];
        return solve(n);
    }

    private boolean solve(int n) {

        if (n == 0) {
            return false;
        }

        if (dp[n] != null) {
            return dp[n];
        }

        for (int i = 1; i * i <= n; i++) {

            int remaining = n - i * i;

            if (!solve(remaining)) {
                return dp[n] = true;
            }
        }

        return dp[n] = false;
    }
}
```

![Stone Game IV — Top-Down DP Solution](images/images-from-learning/stone-game-sol-top-down-dp.png)

---

## What I Recognized

The interesting part for me was that I didn't have to learn a completely new DP technique.

I had already encountered:

```text
Recursion
    +
Memoization
    =
Top-Down DP
```

in the previous Stone Game.

So when I saw another problem with:

- alternating players
- possible moves
- smaller future states
- repeated states

my brain connected it to the same pattern.

The variation was the state.

Previous Stone Game:

```text
multiple state variables
```

This problem:

```text
n
```

That's it.

---

## My Pattern

This is the pattern I want to remember from this problem:

```text
See a problem with recurring states
        ↓
Think about recursion
        ↓
Identify what completely describes the state
        ↓
Try every possible move
        ↓
Memoize the state
        ↓
Top-Down DP
```

And the important question is not:

> "Is this a DP problem?"

but:

> **"What information completely describes my current state?"**

Once I realized that the answer here was simply `n`, the rest of the recursion became much easier to reason about.

---

## Complexity

- **Time complexity:** `O(n√n)`
- **Space complexity:** `O(n)`

Each state from `0` to `n` is solved at most once, and for each state I try all possible square numbers up to that state.

---

## Related Problems

### 1140. Stone Game II

This was the **first Stone Game problem I solved** and the problem that introduced me to the recursive + Top-Down DP pattern used here.

**Problem:** https://leetcode.com/problems/stone-game-ii/

**My solution:** https://leetcode.com/problems/stone-game-ii/solutions/8451375/thinking-in-patterns-when-i-see-the-poss-pcor/

---

### 1510. Stone Game IV

This is the problem I solved recently.

I recognized the same general pattern from Stone Game II — **recursion + Top-Down DP + memoization** — but this time the state was much simpler.

**Problem:** https://leetcode.com/problems/stone-game-iv/

**My solution:**https://leetcode.com/problems/stone-game-iv/solutions/8452840/thinking-in-patterns-another-stone-game-fq0ke/