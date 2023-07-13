---
author: bastos
categories:
- software development
layout: post
post_image: /assets/images/blog/iceberg.webp
tags:
- tech
title: Avoiding Technical Debt in Federal Software Development
---

Technical debt is the process by which a software development project (or a project of a technical nature) starts to accumulate any number of technical tasks that have not been accomplished. This can sometimes occur when a project is “moving fast” to accomplish the mission and in some, if not most, cases the scope and complexity of this debt is known to the development team but not known by the product and or planning team.

You’re familiar with these positives when developing software:

1. The software development project kicked off at lightning speed
2. The development team seemingly accomplished everything all at once
3. It looks like the project will be under schedule and budget

You’ve also experienced these negatives:

1. Slowed progress
2. Bugs preventing deployment and even development
3. Deadline slippage

Chances are your team encountered technical debt.

These non-started or uncompleted technical “tasks” can encompass any number of areas, for instance: (1) automated testing that has yet to be implemented, (2) scalability rewrites that take newer or larger loads into account, (3) consolidating last minute code written to meet a deadline without testing, and/or (4) manually deploying code into different environments instead of having an automated approach that can cause untested things to make their way into a production environment.

Technical debt can function like real debt as developers rush to impress the customer and/or product owners at a demonstration. Developers innocently neglect a task that they figure they’ll be able to come back to when other tickets and tasks get prioritized ahead of it. Developers are often one of the few team members who understand the downside of not tackling a task as it arises. Scrum masters or product owners might shuffle priorities and the task gets bumped further into the backlog (if it’s even captured there).

![Technical Debt](/assets/img/blog/tech-debt.webp)

Technical debt can especially be prevalent in the government contracting space where contracts are feature or performance based. The incentives for these contracts can put contractors in a position where they de-prioritize addressing technical debt in order to satisfy client priorities. This creates a situation where debt is transferred to their future selves or the new incumbent.

At zCore Group we help our clients build tenable and flexible software. Software is continuously evolving in the private sector and these monumental changes disrupt or push innovation in the public sector. Avoiding technical debt while still delivering the software features is an art of negotiation and trust.

Here are a few things that insure against technical debt in federal contracts as well as how to implement preventative measures in already existing contracts.

1. Ensure the application you’re writing has built in automated tests that test features and code directly. We like to say that good testing is like wearing Kevlar; it does not matter the kinds of tests you write if you can layer them one on top of the other. Having multiple testing frameworks with diverse kinds of tests might seem inefficient but much in the same way that Kevlar catches a bullet, layered tests catch bugs and mistakes early on. Though they may slow down feature development overall, you will be certain that when a feature is built it will stay solid.

2. Create a Continuous Integration (CI) in your code development process to speed up code integration from multiple sources. Whether it’s checking for linting (how well code is formatted), building (whether your code compiles correctly), or running automated testing, having a CI process in place will ensure that teams and team members don’t step over one another. This is a standard practice and is meant to tell the developer when or if they have made a mistake before merging that mistake into a shared code base.

3. Set up Continuous Deployment (CD) automation as soon as possible to ensure the rest of your team (including those who are not technical) can look at the latest code implementations and provide feedback upfront without breaking the main production application. Some Federal deployment teams set up a dozen or so sandbox, staging, or other test environments for the purpose of allowing everyone on a team to see a new feature as soon as possible. This means they are more likely to test and catch bugs earlier in development and get working features into production faster.

4. Set up a proper backlog tracker and allow anyone on your team to write and create a ticket empowers everyone on the team to ‘see something, say something’ about a feature or bug. It is vital to have someone responsible for looking at what is submitted. This person should be objective and not subjective when reviewing tickets. It might make sense for some teams to have a single person to go to with bugs and/or features but, ultimately that creates a single point of failure in terms of reporting issues. We believe it is better to decentralize the process and give everyone permission to be contribute rather centralize and miss a vital problem.

5. Dedicate at least half of a software development sprint to bugs and/or technical debt issues. Whether that time is dedicated to writing tests for the features you are building during the sprint and/or setting up forcing functions and environments listed, establishing the removal of technical debt as a team priority will allow you to develop quicker and ensure a high-quality product.

6. Account for the unknown perils of security audits and reviews required by federal procedures when planning. Our rule of thumb is that 20% of a federal project’s time will be spent on security related technical debt that is unaccounted for in the contract requisition process. Since no software can be released to the public or into production without these security audits first being completed, it really does not matter how cool of an app you built if no one will see it.

7. Set realistic expectations of what can be accomplished in each time limit and/or whether the idea has been done before. We like to take the ‘Working Backwards’ approach popularized by Amazon and other companies. We start a project with the equivalent of what a PR release for what an application would and should look like. When we refine a PR release document ahead of time, we give the developers and remaining team members a better idea of what they are building and why. Using a Frequently Asked Questions section covers any unknown parts of the project.

Building good software is hard; that’s why thousands of companies around the world both succeed and fail every day. Creating forcing functions like the ones described here may slow you down but it will reduce technical debt on your team and project which can be the real measure of success. zCore Group is committed to helping you navigate the complexities of software development in the federal space. Our expertise and innovative approach can help you avoid the pitfalls of technical debt and ensure your project's success. [Learn more about how we can support your software development](/about).