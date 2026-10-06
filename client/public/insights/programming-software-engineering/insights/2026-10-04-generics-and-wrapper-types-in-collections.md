# Generics And Wrapper Types In Collections

**Course Name:** Java: Data Structures  
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning Java data structures and collections, I encountered how Java generics interact with collection types.

The important point was understanding why collections use reference types rather than primitive types, and how wrapper classes allow primitive values to be used with generics.

---

## New Learning

🆕 **New learning:** Java generics require reference types, so collection types cannot directly use primitives.

For example, this is not valid:

    List<int>

Instead, the wrapper type is used:

    List<Integer>

Similarly:

    List<double>     // not valid
    List<Double>     // valid

    List<boolean>    // not valid
    List<Boolean>    // valid

The primitive type has a corresponding wrapper class:

    int      → Integer
    double   → Double
    boolean  → Boolean
    char     → Character

---

## Autoboxing And Unboxing

🆕 **New learning:** Java can automatically convert between primitive values and their corresponding wrapper objects when working with collections.

For example:

    List<Integer> numbers = new ArrayList<>();

    numbers.add(10);

The `10` is an `int`, while the List expects an `Integer`.

Java automatically performs the conversion from:

    int → Integer

This is called **autoboxing**.

The reverse conversion:

    Integer → int

is called **unboxing**.

This allows primitive-looking values to be used conveniently with generic collection types.

---

## Why This Matters

Generics operate with reference types.

Therefore, when a collection needs to represent values that would normally be primitive, the corresponding wrapper class is used.

For example:

    List<Integer>
    Set<Double>
    Map<String, Integer>

This is why Java collection declarations commonly contain types such as `Integer`, `Double`, and `Boolean` rather than their primitive counterparts.

---

## Where This Matters

This becomes relevant whenever generic types are used throughout Java's Collections Framework.

For example:

    List<Integer> scores

allows a collection of integer values.

The programmer can work with the values naturally because Java handles the conversion between the primitive and wrapper representation when appropriate.

---

## Why People Get Stuck

It can initially seem strange that Java allows:

    List<Integer>

but not:

    List<int>

The reason is that generics work with reference types, while `int` is a primitive type.

The wrapper class provides the object representation required by the generic type system.

---

## Takeaway

🆕 The new learning was understanding why Java collections use **wrapper types with generics instead of primitive types**.

The mental model is:

    Primitive
        ↓
    Wrapper object
        ↓
    Generic collection

For example:

    int → Integer → List<Integer>

Java's autoboxing and unboxing make these conversions largely transparent during normal collection usage.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`