# Static For Shared Class Data

**Course Name:** Java Object-oriented Programming

**Platform:** LinkedIn Learning (as part of Java Foundations Professional Certificate)

---

## Context

The challenge itself may look simple, and yes, it is.

But while implementing it, I noticed that even a small class requires decisions about how data should be represented.

The challenge asked me to create an `Employee` class with attributes such as name, age, salary, and location, along with a `raiseSalary` behavior.

I decided to represent the employee-specific data like this:

    class Employee {
        String name;
        int salary;
        static String location = "Chennai";

        public Employee(String name, int salary) {
            this.name = name;
            this.salary = salary;
        }

        public int raiseSalary() {
            this.salary = this.salary + 2000;
            return this.salary;
        }
    }

---

## The Decision

You may look at this and think:

> "It's just a simple class."

And yes, the implementation is simple.

But the interesting part for me was the decision about **what belongs to an individual employee and what can be shared**.

The name can vary from person to person.

The salary can also vary from person to person.

Even if two employees happen to start with the same salary, one employee can later receive a raise while the other does not.

So these are properties of the individual object:

    Employee 1
        ↓
    name + salary

    Employee 2
        ↓
    name + salary

Then I thought about `location`.

Location can vary from person to person in a larger system, but for this particular challenge, I decided that both employees could belong to the same location.

So instead of making `location` an instance field for every employee, I used:

    static String location = "Chennai";

This made `location` a class-level value shared by the `Employee` objects.

My mental model became:

    Employee
    │
    ├── employeeOne
    │     ├── name
    │     └── salary
    │
    ├── employeeTwo
    │     ├── name
    │     └── salary
    │
    └── location
          ↓
       shared value

The important part was not simply learning the keyword `static`.

It was thinking:

> Does this data belong to each object, or can it be shared by the class?

That was the decision that led me to use `static`.

---

## Another Small Experiment

While implementing the same challenge, I also tried something I had recently discovered outside the course.

I had traditionally seen the `main` method written as:

    public static void main(String[] args)

After learning that varargs can also be used for the `main` method, I decided to try:

    public static void main(String... args)

It compiled successfully and the program ran without a compile error.

This was my first time specifically using **BlueJ** for an object-oriented programming challenge. I had already installed BlueJ, but had not previously used it for this kind of learning.

The screenshot shows both sides of this implementation: the LinkedIn Learning challenge on one side and my completed Java implementation in BlueJ on the other.

![Java OOP challenge completed in BlueJ](images/images-from-learning.oop-challenge-java-with-linkedin-learning-interface-in-side.png)

---

## Takeaway

> Even a simple programming challenge involves design decisions.

The important part was not only completing the `Employee` class.

It was deciding what data belongs to an individual object, what can be shared by the class, and then experimenting with something I had recently learned to see whether it actually worked.

Small implementations can still contain real engineering decisions.

---

## Author

**Ramalingam Jayavelu**

Portfolio: linga.engineer  
GitHub: github.linga.engineer  
LinkedIn: linkedin.linga.engineer  
LeetCode: leetcode.linga.engineer  
Blogs: blogs.linga.engineer  
Email: contact@linga.engineer