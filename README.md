# Learning Cypress

This is where I'll have some Cypress notes and also the React TodoMVC App
I have used to practice Cypress testing.All the following content is based
on the courses from this [website].(https://learn.cypress.io/#courses)


## Testing Foundations


### - Testing is a Mindset
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
