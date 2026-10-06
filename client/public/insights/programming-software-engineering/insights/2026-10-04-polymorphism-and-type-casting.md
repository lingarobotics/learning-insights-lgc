# Polymorphism And Type Casting

**Course Name:** Java Essential Training: Objects and APIs  
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning inheritance and polymorphism, I encountered how a parent-type reference can refer to different child objects, how Java determines the implementation at runtime, and how downcasting can provide access to child-specific behavior.

These concepts connected inheritance with actual object behavior.

---

## New Learning

🆕 **New learning:** Java polymorphism can be understood through one parent-type reference referring to different child-type objects.

For example:

    Animal pookie = new Cat();

    pookie = new Dog();

The reference is declared as `Animal`, but the actual object can be a `Cat` or a `Dog`.

When an overridden method is called, the implementation belonging to the actual object is selected at runtime.

This is **runtime polymorphism**.

---

## Compile-Time And Runtime Polymorphism

🆕 **New learning:** Polymorphism can occur at different stages.

### Compile-time polymorphism

Method overloading provides different methods with the same name but different parameter lists.

The compiler determines which overloaded method should be used.

### Runtime polymorphism

Method overriding allows a child class to provide its own implementation of a parent method.

The actual object determines which overridden implementation executes at runtime.

So:

    Overloading  → compile time
    Overriding   → runtime

---

## Downcasting

🆕 **New learning:** A parent-type reference can be downcast when the actual object is a child object and child-specific behavior needs to be accessed.

For example:

    Animal pookie = new Cat();

    ((Cat) pookie).Zoomie();

The cast does not transform the object into a `Cat`.

The object was already a `Cat`.

The cast tells Java to treat the reference specifically as a `Cat` so that child-specific members can be accessed.

---

## `instanceof`

🆕 **New learning:** The `instanceof` operator can be used to check whether an object is an instance of a particular type before performing a type-specific operation.

For example:

    if (pookie instanceof Cat) {
        ((Cat) pookie).Zoomie();
    }

The result of `instanceof` is a boolean.

Conceptually:

    "Is Pookie a Cat?"

This can be used to make a downcast safer.

---

## Pattern Matching With `instanceof`

🆕 **New learning:** Java can combine the `instanceof` type check and the creation of a subtype reference.

For example:

    if (student instanceof NoDueStudent qualifiedStudent) {
        // use qualifiedStudent
    }

Instead of checking the type first and then separately casting the object, the pattern introduces `qualifiedStudent` as the matching subtype reference.

The reference still points to the same object; it simply provides a more specific type through which that object can be used.

---

## Why Downcasting Needs Care

A parent reference can point to different child objects.

For example:

    Animal pookie = new Cat();

The following is valid:

    Cat cat = (Cat) pookie;

But if the actual object were a `Dog`:

    Animal pookie = new Dog();

then treating it as a `Cat` would be invalid and can result in a `ClassCastException`.

Therefore, downcasting should be performed only when the actual object type supports the cast.

---

## Where This Matters

Polymorphism allows code to work with a common parent type while different child objects provide different behavior.

Downcasting and `instanceof` become useful when code needs to access behavior that exists specifically on a particular subtype.

This connects inheritance, references, runtime behavior, and type checking into one mental model.

---

## Why People Get Stuck

A reference type and an actual object type are not necessarily the same.

For example:

    Animal pookie = new Cat();

Here:

    Reference type → Animal
    Actual object  → Cat

The reference determines what can be accessed through that reference.

The actual object determines which overridden implementation executes at runtime.

Keeping these two ideas separate makes polymorphism and casting much easier to understand.

---

## Takeaway

🆕 The new learning was understanding polymorphism as the separation between:

**what type the reference is**  
and  
**what object the reference actually points to**.

Runtime polymorphism uses the actual object to select overridden behavior.

Downcasting provides a more specific view of an existing object, while `instanceof` can be used to check the type before doing so.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`