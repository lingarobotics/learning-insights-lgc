# Inheritance Constructor Chaining

**Course Name:** Java Essential Training: Objects and APIs  
**Platform:** LinkedIn Learning *(as part of the Java Foundations Professional Certificate by JetBrains journey)*

---

## Context

While learning inheritance, I encountered how constructors behave when a child class extends a parent class.

The important part was understanding the order in which constructors execute and what `super()` actually represents.

---

## New Learning

🆕 **New learning:** When an object of a child class is created, the parent-class constructor executes before the child-class constructor.

For example:

    class Person {
        String name;

        Person(String name) {
            this.name = name;
        }
    }

    class Employee extends Person {
        Employee(String name) {
            super(name);
        }
    }

When an `Employee` object is created, `super(name)` calls the matching constructor of `Person`.

The execution is therefore:

    Employee object creation
            ↓
    Person constructor
            ↓
    Employee constructor

### Understanding `super()`

`super()` refers to the parent-class constructor.

If the parent has a no-argument constructor:

    super();

If the parent has a constructor accepting a name:

    super(name);

The arguments determine which parent constructor is called.

---

## Mental Model

An `Employee` object is still an `Employee`, but it contains the inherited `Person` part as part of its object structure.

For example:

    Employee employee = new Employee("Jayavelu");

The name belongs to the `Person` portion inherited by `Employee`.

So:

> Jayavelu is the person's name, but the overall object is an Employee object.

`super(name)` initializes the parent-class portion of that object through the parent constructor.

---

## Where This Matters

Constructor chaining becomes important when designing inheritance hierarchies where parent classes own common state or initialization logic.

Instead of duplicating parent initialization in every child class, the child constructor can delegate that responsibility to the parent constructor.

---

## Why People Get Stuck

It can initially seem like the child constructor is responsible for creating everything inside the object.

But inheritance means the parent portion of the object also needs to be initialized.

That is why the parent constructor executes first.

The child constructor then continues with its own initialization.

---

## Takeaway

🆕 The new learning was understanding **constructor chaining in inheritance**:

**Child object creation → parent constructor → child constructor**

And `super(...)` provides the explicit way for the child constructor to invoke the appropriate parent constructor.

---

## Author

**Ramalingam Jayavelu**

Portfolio: `linga.engineer`  
GitHub: `github.linga.engineer`  
LinkedIn: `linkedin.linga.engineer`  
LeetCode: `leetcode.linga.engineer`  
Blogs: `blogs.linga.engineer`  
Email: `contact@linga.engineer`