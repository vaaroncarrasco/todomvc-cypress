# Learning Cypress

This is where I'll have some Cypress notes and also the React TodoMVC App
I have used to practice Cypress testing.All the following content is based
on the courses from this [website](https://learn.cypress.io/#courses).


# Testing Foundations


## Testing is a mindset

Testing methodologies, tools, frameworks, etc. are irrelevant if you first
do not understand that testing is first and foremost, a mindset.

The reason thy dev teams and QA teams are separate is because both teams
view an app completely different. Developers build, QA professionals break
things. If devs wanna write test, they need to learn to think like a QA
professional first. And then translate the thinking into automated tests.

As new feature requests or bugs come in, the team should be thinking first
about how they'll test the app related to these changes. These discussions
have to incorporate both dev & QA teams.

Even if the QA team is only doing manual testing, the whole team needs their
input. They can provide test cases that they would expect to run against the
new feature, which devs can translate test cases into automated tests.

If there's no QA team, then it's the dev team job to have discussions on what
kind of tests will be necessary to ensure the new features are working correctly.

An easy way to do this is to start with the end goal and work backwards. What
does this new feature need to do? Once you understand that, you can break the
brek the problem down into small incremental steps and translate thos steps
into tests.

If you're working with Agile, the testcases can be captured in the user stories
as acceptance criteria for the story to be done.


## Knowing what to test
Okay, let's write some tests... but, what to test? Where should I start from?
How do I test my app? The answer for these 3 questions always is: "It depends".

It depends on each app unique features, functionalities, technical debts, etc.

Here are some ways to help you determine what to test:

**User Journeys**

If you are trying to test an already existing app, we suggest you to
begin with the "mission-critical" pieces. These are any portions of
the app that cannot go down or break. For example, login/auth, purchasing a
product, processing a credit card, sign-up forms, etc.

It's highly recommended to have your first suite of tests based on these
portions. They should be end-to-end tests.

Now that you have those critical areas of your app, how exactly shoud you write
your tests? We recommend writing user tests for "user journeys". User journeys are
the essetial paths/behaviour in which a user of your app takes.

For instance, we have an e-commerce app. A user will first search for a product, add it
to the shopping cart, fill out shipping data, enter payment info, and finally purchase it.

The whole flow a user takes from finidng a product to ultimately buying it is a user
journey. The entire user journey should also be tested witha signle test. The reason why it
should be a single test, rather than several tests for each step, is so that you can make sure
that all the pieces are working correctly.

You should be testing all of the layers within your tech stack. You are testing the frontend, the
backend, database layer, networking/API layers, etc.

With one test, you are testing the most critical pieces of your application, which will ultimately
provide you with confidence that your application is behaving as it should.


**New Features**

When testing a new feature,a helpful technique is to have the end goal in mind before writing
any test. What does this feature need to do? What problems does it solve? Once you can break
the feature down into small incremental steps, we translate them into tests.

Now that you have a suite of tests for each step, you can write the code necessary to make each
step pass. By doing this, whenever you refactor your code, you will see if you have not
broken anything during the refactor. If you have, your tests will fail.


**Bugs**

It is highly recommended that you write tests around any bug that appears in your app. A good
approach is to first write a falling test around the bug before fixing it. Once the bug has been
fixed, your test will pass, which verifies that your new code has eliminated the bug.


## Manual vs Automated Testing

**Manual Testing**
Manual testing involves someone, typically QA, physically interacting with an app. Manual testing
is often very time-consuming as it requires someone repeating the same tasks over and over again,
something that computers are incredibly good at.

Modern software dev temas are shipping code into production multiple timeas a day, which is the next
to impossible if you are only manually testing.

With the advance of Continous Integration (CI) and Continous Deployment (CD), modern software dev
teams are automating as much as possible, including testing, allowing them to push to production
multiple times a day confidently.

**- Continous Integration**
Is the practice of automating the integration of code changes from multiple devs into a single
repo. CI allos devs to frequently merge their code into a central repository where builds and
tests run against their changes.

If the builder tests fails, CI system will block the code from being integrated into the main
branch. Meaning that each time we introduce a new feature, we may need to fix a bug. Or in case
we want to merge a pull request, we can be confident that the latest change has not broken our
app if it passes the tests.

As you may notice, testing in CI provides a useful feedback loop if any of our tests fails. The
errors will be logged and we can quickly debug our code.


**- Automated Testing**
As more and more teams adopt CI/CD systems and want to push to production multiple times a day,
automated tests are the only way to scale such demand.

There is currently a movement within software development known as "shift left". Shift left
essentially means that the developers are increasingly becoming more involved with testing.

Historycally, testing was performed by a QA team at the very end of the development process.
Now the industry is "shifting left" by having the responsibility of testing fall more and more
upon the dev's shoulders. So instead of testing being an afterthough, it is now integrated into the
entire Software Development Lifecycle from the very beginning.

Test automation is quickly becoming the "norm" for most software engineering teams, and its popularity
and usefulness will only increase over time.


## Who should be responsible for testing?

Short answer, everyone's.

In the real world, there are basically three team structures within modern software companies:

**1. Dedicated development and QA teams**
Companies with dedicated development and QA typically leave the software development up to the
developers and teting to the QA team.

**2. Designer, Developer, QA, etc**
Some companies will have small teams having, in some cases, a dev, a designer and a qa engineer.
All working together on a single project or feature. In this scenario, which I think it is pretty
obvious how it will turn out, the developer is responsible for the development and QA for testing.

**3. Fullstack Solo Dev**
Some companies, like early-stage startups, do not have dedicated QA teams and put all of the testing
responsibility on the developers. The developers are responsible for writing the code and ensuring
that it works as expected.

While many companies and teams have dedicated QA engineers, everyone is responsible for ensuring
that an application is working as intended.

In order to ship reliable, high quality software, testing should be everyone's responsibility and
should be at the thought process of the entire team at the start of a project.


## Testing Pyramid
![Testing Pyramid: (from top to bottom) End to End, Integration and Unit](testing-pyramid.png)

"it's not important what you call it, but what it does" - Gojko Adzic.

**Unit tests**

Unit tests are the foundation upon which your other tests rest. As you can see, they take up
the largest amount of space of the pyramid and are typically the tests you'll write the most.

Unit tests are inteded to test a single "unit" within an app. Meaning, they should not depend
upon other parts of the system. Think of testing a single function, for example.

When writing unit tests, you wanna think of the function being tested as a black box. You are
not concerned with the logic inside of it. You are only concerned that you expect a certain output
from a given input. THis way, you can always refactor the internals or body of the function
without breaking your tests.

SO again, you are simply testing independently a given set of inputs into this function, we then
expect a certain output. How that works internally is irrelevant for your testing purposes.


**Integration tests**

The point of integration testing is to ensure that individual pieces or units within an app work
together as expected. They are fundamentally dependent.

So the main difference is clear, Unit = Isolation|Independent while
Integration = Dependent|Working together.

Integration tests are great for when you're building a new app from scratch or an app feature that
does not have a UI yet. However, once you have a UI, that is when you should be writing end to end
(E2E) tests.


**End to End tests**
These types of tests are written to test anything that runs in the browser. The purpose of these tests
is to imitate what a real user would do. Simulating a user journey.

For example, you might write a single test that registers a new account, logs in to that newly created
account, purchases a product and then logs out. This way, you can ensure that all the layers within your
application are working together correctly.

End-to-end (E2E) tests will often replace your integration tests, as they are essentially testing the
same thing. However, E2E tests have an ever more significant advantage and value over integration tests,
as they are testing real user interactions within your application.