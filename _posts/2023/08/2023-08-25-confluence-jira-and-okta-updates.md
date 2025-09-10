---
author: zCore Group
categories:
- Information
layout: post
post_image: /assets/images/blog/update.jpg
tags:
- tech
- DevOps
title: "DOTS CoP Presentation Update: Confluence, Jira, and Okta"
---

During the recent DOTS Tools and Technology presentation, a series of updates and overviews were presented concerning DOTS CoP tools, specifically focusing on Confluence, Jira Software, and Okta. Here's a concise summary for users:

##### Okta Updates
Okta has been introduced as the new verification system for sign-in.
Users should complete their profiles with both PIV and username/password. Failure to do so might lead to account deactivation.
Should any issues arise, users are advised to raise a ticket with the service desk.

##### Confluence Updates
The platform has been upgraded from version 7.13 to 7.19.12.
Synchrony operates efficiently, allowing between 5 to 8 users to edit a page simultaneously.
Delete permissions are now accessible.
Comprehensive documentation on archiving is provided at alaskan.com. This latest upgrade to the data center permits users to archive projects or specific issues, enhancing system performance.
Certain features, like the ability to list users in a group on a Confluence page from the max.gov implementation, weren't migrated. However, efforts are being made to reinstate this through new plugins and REST APIs.
A potential addition to the platform's features is the global template for specific spaces, which teams sharing the same space can use.
VA's Confluence doesn't currently integrate directly with SharePoint. Discussions are ongoing about potential integration with the Microsoft team. In the meantime, users can upload document copies directly to Confluence. For those seeking alternatives to Visio, Lucidchart or Gliffy might be viable options.

##### Jira Software Updates
The seminar included an in-depth discussion on automation rules and archiving.
Automation rules, which consist of triggers, conditions, and actions, will soon become a built-in feature of the software.
Automation functionalities, such as notifications to product owners upon issue creation or the cloning and transitioning of issues between projects, are on the horizon.
To maintain system integrity, it's being considered to treat automations like a development program. This might entail the creation of code in a separate environment before refining and committing it to a git repo.
Users keen on exploring this automation feature are encouraged to submit a ticket.
A minor issue has been identified where new users' profiles show emails instead of names, and this is under review.

##### Questions Addressed
Can automation replace transition triggers in Jira? Yes, automation can be tailored to check fields and conditions upon status changes.
Who will have the authority to create automations? Likely, project admins, but with specific guidelines in place.
Currently, enabling the Jira inbox for customer notifications is a challenge due to technical and security constraints, particularly with VA's email system. Collaboration with Atlassian continues to address these and other concerns.

##### Next Steps
Users facing issues with Okta are advised to raise a ticket with the service desk.
Those interested in the upcoming automation feature in Jira should submit a ticket.
The integration issues between Okta and Jira are being investigated, and solutions for the Jira inbox issue are being explored.

##### Wrapping Up
Engagement from users is crucial for continuous improvement. All are reminded to access the resources and documentation provided post-presentation. Feedback and questions are always appreciated. For inquiries, reach out to the devopsteam@va.gov or connect through email, Slack, Teams, or the DOT service desk. For those unable to attend, the session recording will soon be available on the stream channel.