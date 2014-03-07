*Portland Code School*

Front End Freelancer Course
#Code Challenge 01
## Static, single page site upgrade

# Overview

We have two goals for this code challenge:

1. Take an existing design that uses an old form of HTML and bring it up to current standards, adding content and some simple styling, and making sure it is valid, standards-based code.

2. Start working as a team in the simplest way possible.

# Specification

This is a single page, crudely-responsive journal website. Like many beginning employees, you are given an old, ugly page written in XHTML. It is your job to make sure it is standards-based HTML5 that meets the client's specifications.

1. The clients (Al & Nìm) want the page to have two team journal entries: one for each week of the class so far. 
1. The entries should reflect what people think of the class so far and anything specific to each particular week. The team doesn't have to agree. If there are different opinions, voice them all. You don't need to identify who has which opinion. Write a couple short paragraphs.
2. In each week's journal entry, list the team's top five concepts for the week. These can be the most interesting things, the hardest things, whatever. Talk about the two lists before you code them up in an unordered list element.
1. For each week, choose some picture from the web that is licensed for non-commercial reuse. Resize it in an external image editor to be no larger than 250 pixels wide.
1. Float the week's picture left in the first week's article and right in the second week's article. 
2. Make sure the week's article text flows around the picture.
3. Choose two color palettes, one for the site when it is in full width, one when it is in narrow width. They should be thematically related. Use [Kuler](https://kuler.adobe.com/create/color-wheel/) to find a color palette and modify the CSS file to use the appropriate colors in two different locations. 
4. Run your code through the [Unicorn validator](http://validator.w3.org/unicorn/), fix the problems you can, and be ready to discuss the problems you can't. If you are successful and get the "passes validation" badges, insert them on your page by replacing the placeholders. If you don't pass validation, leave the placeholders.
5. Remove any unused journal entries or code left over from the previous file


## Success criteria

The success criteria for this assignment are:

1. The team estimates when they will finish. This can be any time before Friday 9am.
2. The team reports their estimate to Nìm and Al 24 hours after receiving the code challenge
3. The team delivers their site with all the specification items present along with a report of hours spent
4. Each member of the team completes the code challenge quiz after they deliver their code


## Delivery instructions

3. The team notifies Nìm and Al as soon as the final form of the work is pushed to the team repo and is ready to be reviewed. 
4. The team includes a final tally of their hours and a comparison to their estimate in their spreadsheet
4. Al and/or Nìm will clone the repo to their local machine, serve it, and evaluate how closely it matches the specification.


# What you will need to complete this challenge

* A beginner's knowledge of HTML that includes
	* Using DOCTYPE tags
  * Setting the charset appropriately
  * Using HTML div elements to structure pages and style elements
	* Using HTML image tags with height and width attributes
* A beginner's knowledge of CSS that includes:
  * CSS selectors
  * CSS float properties
  * CSS color definitions
  * How to recognize the structure of a media query enough to be able to modify the rules that it applies
* A beginner's understanding of project management that includes
  * Planning your work before you start
  * Dividing large tasks into smaller ones
  * Recording your hours  
* A beginner's understanding of the web developer's tool kit:
  * How to copy and edit files
  * How to serve web site files on your local computer
  * How to share your work with others through a common git repository on a single branch
  * How to submit your files to a validation service and interpret the results

## Code samples, snippets and pseudo code 

See the supplied files in the folder "pcs_cc01_code". 
````
$ tree pcs_cc01_code/
pcs_cc01_code/
├── XXjournal_responsive_template.html    <-- rename and modify this
├── images                                <-- put your images here
│   ├── css_validation_badge_mockup.png
│   ├── html_validation_badge_mockup.png
│   └── image_placeholder.png
├── scripts                               <-- don't worry about this
│   └── XXjournal.js
├── simple_structure.html                 <-- This is a simplified version
└── stylesheets                           
    └── XXjournal_responsive.css          <-- rename and modify this
````

Copy these files to your team's repository when you start work.

# Step by step instructions

###Prepare the environment

0. For each team, create one new repository on github in the team lead's account named *pcs_code_challenge_01*
1. Make all team members collaborators on GitHub for this repository.
1. All team members should clone this repository into their respective MAMP htdocs directory (Or "www" folder on Windows). Put this repository at the same level as any current repositories you may already have. Do *not* work in the front end freelancer class materials repository. Do *not* put one repo inside another repo.
2. Make sure all teammates can push to this repository. If you have trouble, check the collaborators and make sure everybody has their git keys set up correctly.
0. The team lead should copy the code challenge template files into that repo. Don't bring any ".git" folders with you.
0. Push the files up to GitHub so the first developer can get started (see below).


### Plan the work

0. Review the specification with your team and make a Google spreadsheet with a plan of what the team will do to this page, in what order the tasks will be performed, and for each task, assign a team member. Make sure everyone gets at least two tasks. 
	* Note: Only one person should work on the files at a time. It's like a relay race
  * This is because we haven't introduced you to how to use git so everybody can work at the same time on the same code. We will, later.
	* The others can be researching or learning other information. 
	* Yes, this is awkward and requires careful and constant team communication. That's kind of the point.
  * The team can certainly work together in pairs or as a whole. This is more fun and faster than working alone. Only one team member should be modifying the code at one time, tho. It's fun and easy to push and pull from the repo as the team works.
0. Share the Google doc spreadsheet with your team and with Al & Nìm
0. Estimate the number of hours each team member will need. Don't stress too much, just guess.
0. Add up the hours, add some slack, and send an estimate to Al & Nìm via email.  This should a simple estimate of which day of the week you will finish  It should be no later than Friday at 9am but try for earlier.


### Do the work
For each task, the next developer in line should: 

1. Pull the previous developer's work to their local repository
2. Make necessary changes, testing and committing changes as required
3. When the changes are complete, push their work to the common repo on the master branch
4. Update the spreadsheet with the hours spent on that task
4. Notify the next developer in line. 

# Notes on Schedules and Deadline

It is very important that you become aware of your own velocity and productivity. We provide practice making estimates. These code challenges are designed to be difficult, so the sooner you start, the better.

In this assignment, HOW you work is as important as WHAT you produce. In addition to the instructions above, please also perform these process instructions as soon as you get team assignments:

1. Review the code challenge with your new team. 

1. Discuss your abilities, your familiarity with the problem to be solved, and how long it has taken you to accomplish earlier challenges.

1. Discuss what has worked and what hasn't in previous teams, and agree on expectations for how you want to collaborate on this challenge.

1. Look at your calendar for the coming week and estimate how much time you can devote to classwork. There will be some lab time after class, but you will need to schedule time outside of class to finish quickly.

1. Schedule work sessions with your team.

1. Estimate when your team will finish this code challenge. Be careful, it's harder than it looks. Email your instructors with this estimate within twenty four hours of getting your team assignment.

1. Your estimate must be before Friday at 9am.

Can your team complete this code challenge in a week?  What would it take in terms of effort to do it faster than that while giving everybody an equal opportunity to learn and create?

<hr />
Copyright © 2014 Alan Zimmerman & Nìm Wunnan<br />
Used by permission by Portland Code School