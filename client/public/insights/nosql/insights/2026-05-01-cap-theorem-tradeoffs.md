# DB Insight — CAP Theorem (Choosing Trade-offs in Distributed Systems)

---

## Course Name

Introduction to NoSQL Databases (Infosys Springboard)

---

## 1. Context

While learning NoSQL, I came across the CAP theorem:

- Consistency  
- Availability  
- Partition Tolerance  

Initially, it felt like:

> “Just three properties of a database”

But the course mentioned:

> Only two of the three can be guaranteed at the same time

This confused me because:

- Why can’t a system have all three?
- Why should we sacrifice something?

---

## 2. The Insight

I realized that:

> CAP theorem is not about database features — it is about choosing trade-offs during system failures.

And more importantly:

> When network issues occur, a system must choose between consistency and availability.

---

### Core idea

In distributed systems:

- Multiple servers exist  
- Network failures can happen  

When systems cannot communicate:

- Data may become inconsistent  
- Or requests may be blocked  

---

### Key realization

> CAP only matters when there is a network partition.

If no failure:

- Systems can provide both consistency and availability  

But during failure:

- One must be sacrificed  

---

## 3. Where this matters

This directly connects to real systems.

In large-scale applications:

- Systems are distributed across machines  
- Network failures are unavoidable  

So systems must decide:

- Should we return correct data?  
- Or should we always respond?

---

### Real-world mapping

I connected this to eCommerce scenarios:

Inventory system:

- If stock = 10 and one user buys all  
- Other users must not see incorrect stock  

Decision:

- Block requests if unsure  
- Ensure data is correct  

→ Consistency is prioritized  

---

Review system:

- User adds a review  
- Network fails  

Decision:

- Allow review to be stored  
- Sync later across servers  

→ Availability is prioritized  

---

This made me realize:

> Different parts of a system require different CAP choices.

---

## 4. Why people get stuck

Most people:

- Memorize CAP definitions  
- But don’t understand when to apply them  

Common mistakes:

- Thinking CAP is always active  
- Ignoring network failures  
- Assuming all systems need strong consistency  

Also:

- Treating CAP as theory, not design decision  

---

## 5. My Learning Approach

I didn’t just learn definitions.

I:

- Analyzed real-world scenarios  
- Compared consistency vs availability decisions  
- Understood impact of network failures  
- Connected CAP to business logic  

This helped me understand:

> CAP is about choosing what matters when things break.

---

### Trade-off I learned

> Consistency → correct data, but may block requests  
> Availability → system responds, but data may be outdated  

So:

- Choose consistency for critical data  
- Choose availability for non-critical features  

---

## 6. Beginner Insight (What I Wish I Knew at Start)

If someone is learning distributed systems:

- Don’t treat CAP as theory  
- Don’t try to memorize definitions  

Instead understand:

- What happens when systems fail  
- What your system should prioritize  

Most beginners think:
> “Which property is better?”

But the real foundation is:

> “What can my system afford to sacrifice?”

---

### Key beginner shift

Stop thinking:
- “Can I have everything?”

Start thinking:
- “What should not fail in my system?”

---

## 7. Takeaway

> CAP theorem is about trade-offs, not features

> You cannot guarantee consistency and availability during network failures

> System design is about choosing what matters under failure