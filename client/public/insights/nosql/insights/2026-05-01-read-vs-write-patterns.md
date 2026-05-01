# DB Insight — Read vs Write Patterns (Understanding System Behavior)

---

## Course Name

Introduction to NoSQL Databases (Infosys Springboard)

---

## 1. Context

While designing database systems, I came across terms like:

- Read-heavy systems  
- Write-heavy systems  

Initially, I thought:

> “All systems both read and write data, so why classify them?”

This raised a doubt:

- If reading happens after writing, how can a system be called read-heavy or write-heavy?

---

## 2. The Insight

I realized that:

> Read-heavy or write-heavy does not mean one operation is absent — it means one dominates.

And more importantly:

> System design depends on which operation happens more frequently.

---

### Core idea

Every system performs:

- Writes → storing data  
- Reads → retrieving data  

But the ratio between them defines system behavior.

---

### Key realization

> Classification depends on frequency, not possibility.

---

## 3. Where this matters

This directly connects to database design and performance.

Different systems behave differently:

- Some generate continuous data  
- Some mostly retrieve existing data  
- Some involve constant interaction  

---

### Real-world mapping

I connected patterns to practical scenarios:

User activity logs:

- Continuous logging  
- Rare reads  

→ Write-heavy  

---

Product catalog:

- Rare updates  
- Frequent searches  

→ Read-heavy  

---

Comments system:

- Users read comments  
- Users also write comments  

→ Balanced (read + write)  

---

Session management:

- Write during login  
- Read during every request  

→ Balanced  

---

This made me realize:

> System classification depends on how users interact with data.

---

## 4. Why people get stuck

Most people:

- Think every system is equal in reads and writes  
- Focus only on functionality, not frequency  

Common mistakes:

- Misclassifying systems  
- Ignoring user behavior  
- Designing without considering load patterns  

Also:

- Assuming write automatically implies read dominance  

---

## 5. My Learning Approach

I didn’t just accept definitions.

I:

- Observed how different systems behave  
- Compared frequency of operations  
- Mapped scenarios to real applications  
- Focused on user interaction patterns  

This helped me understand:

> System design depends on usage patterns, not just data structure.

---

### Trade-off I learned

> Write-heavy → optimized for fast inserts, may limit queries  
> Read-heavy → optimized for fast retrieval, may slow updates  

So:

- Choose database based on dominant operation  
- Accept limitations of the other side  

---

## 6. Beginner Insight (What I Wish I Knew at Start)

If someone is learning databases:

- Don’t think in terms of “can read” or “can write”  
- Focus on “how often” each happens  

Most beginners think:
> “System supports both operations”

But the real foundation is:

> “Which operation dominates?”

---

### Key beginner shift

Stop thinking:
- “Does this system read and write?”

Start thinking:
- “Which operation happens more frequently?”

---

## 7. Takeaway

> Read-heavy and write-heavy systems are defined by frequency, not capability

> Understanding usage patterns is critical for choosing the right database

> System performance depends on optimizing the dominant operation