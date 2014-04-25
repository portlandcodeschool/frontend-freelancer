Front End Freelancer Course
#Code Challenge 06
## Mobile-first, grid-based, dynamic user experience!

# Overview

Even though that title sounds like a parody of things that web designers say, it describes exactly what we are doing.

Building off of week 9's assignment, we want to make a single-page scroller that is optimized for mobile devices, showing off your portfolio so far. It should deliver the same content to all platforms and respond to screen size so that every user's experience is rich and seamless, regardless of the device they use.

We will use Bootstrap to produce a grid-based, responsive site that includes jQuery-based interactions, retina-friendly images, and mobile design conventions. It will be deployed using github pages and tested on mobile devices. You will work on this by yourself, start to finish.

**You cannot begin this project until you have handed in your assignment.**

*Note: Notes and tips are provided in-line with tasks. Also, **bold** list items indicate which tasks will be used as assessment criteria in a basecamp task. The non-bold list items are still very important, but they are more instructions or advice on process rather than tested features. Some of these tasks are deliberately worded so that you will have to find relevant reference material yourself. Google is your friend!*


# Specification

Week 9's assignment is your codebase. Your hand-in should be considered an exploratory stage which will need to be critically re-evaluated with the goals of the project in mind before you begin.

Create a new Basecamp project for the site, add your instructors, and post your content planning material to the project as it's ready. You will publish your site on github pages to deliver it. 

##Content plan

* Start your project with a [design spike](http://www.smashingmagazine.com/2012/11/06/design-spikes-fit-big-picture-ux-agile-development/) to identify improvements and new features
* **Create a written content plan that states all the high level goals of the project**
* **Specify phone and tablet layouts, taking both landscape and portrait mode into account**
* **Visually represent this with wireframes using your preferred method** *You can use hand drawing, Adobe Illustrator, etc - as long as it looks professional*
* **Create a [style guide](http://www.smashingmagazine.com/2010/07/21/designing-style-guidelines-for-brands-and-websites/) for your project* 
* * **Use the following common design patterns and bootstrap features:**
	* **Fixed header**
	* **Scrollspy**
	* **Smooth scrolling**
	* **A cover-style landing area** 
	* **Modals**
* **Your portfolio materials should be a discrete section, with the rest of the site serving to give characterizing and relevant information about you as a person**
* **Include About Me, Work, and Contact sections in the site**

## Mobile-first development

Read the section and references from North regarding the [mobile-first methodology](https://github.com/Snugug/north#mobile-first).

* On your Mac, install X-code and use the [iOS simulator](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSStimulator/GettingStartedwithiOSStimulator.html) to test your site's mobile appearance. 
* **None of your interactions should interfere with normal scrolling and swiping on a phone or tablet** 
* **Your classes, HTML structure, and code comments should be semantic and logical so that the site can be easily re-styled, rebuilt, or changed in the near future**


##UX
* **Use the [CSS-transform](http://www.w3schools.com/cssref/css3_pr_transform.asp) property to add some visual flair to your site**
* **Your CSS transformations must be compatible with Firefox, IE, Safari, and mobile browsers** 
* **Use **[collapsible groups](http://getbootstrap.com/javascript/#collapse)** or another accordion-style plugin to group related content within your portfolio section so that it all fits within the height of a single screen on mobile, tablet, and full-screen desktop browsers**
* **Use fonts from the Google Font API to personalize your font choices, specifying common fonts as fallbacks**
* **Use the Compass library to set your font sizes in a vertical rhythm ** *Hint: this is a very google-able sentence*
* **Style the fields and buttons on the contact form to match the rest of your site**

## Discussion

*We're starting to ask you to consider content and implementation at the same time. This doesn't mean that you should no longer follow best practices of separating structure and presentation, but that you should be considering the high-level goals of the site at all stages of work. Does this change your approach in any way? If you're not comfortable with graphic design, what tools or conventions can you use to present your site in a visually pleasing way without having to generate new visual design yourself?*

## Success criteria
* **The mobile experience of your site should not be degraded in any way when compared side-by-side to the desktop version**
* Your content should be clearly presented and communicated.
* **None of your code or design should distract from the content, rather it should enhance and clarify it.**
* You should leverage Bootstrap's grid system to make the entire page responsive
* **The overall feeling of the site should be "this person really knows how to make a website"**
* **None of the content should be placeholder content -- this will be a complete site**

Remember #2 on the [Done Manifesto](http://www.brepettis.com/blog/2009/3/3/the-cult-of-done-manifesto.html). A small finished product is better than a big half-finished project. Since _you_ are planning the content, you should be able to plan the scope of the finished project. So, part of your assignment is to

* Identify necessary features or content as "must haves" in your content plan
* Identify non-critical features or content as "would be nice" in your content plan


## Delivery instructions

* You will post your site on Github Pages and send the repo and the live link to your instructors via Basecamp.
* You should have already posted content plan materials as they were finished, notifying your instructors as they are ready

# What you will need to complete this challenge

* Facility with Bootstrap layouts and plugins
* The ability to test the site on a smartphone or a simulator as you develop
* A clear and thorough content plan
* A new Basecamp project
* The ability to research material referenced in the instructions that may be new to you
* The ability to clearly plan and communicate the purpose and content of the site
* The ability to write and compile SASS


#Detailed instructions

##Iteration 1 - Planning your content experience

* **Write out a simple, high-level statement of what the site is about, its technical requirements, and what it intends to communicate**
* **Create a written content plan that states all the high-level goals of the project**
* **Specify phone and tablet layouts, taking both landscape and portrait mode into account**
* **Visually represent this with wireframes using your preferred method** *You can use hand drawing, Adobe Illustrator, etc - as long as it looks professional*
* **Your wireframes should be specific, ordered, and directly related to your final code, using ids, classes, and plugin or function names to identify parts of the page**
* **Create a [style guide](http://www.smashingmagazine.com/2010/07/21/designing-style-guidelines-for-brands-and-websites/) for your project which defines the following:**
	* **All fonts and font weights in use and their corresponding HTML elements, classes, or contexts** *i.e.. Provide examples of all headings you use and show the classes or page regions that have special formatting, such as a sidebar with italic text*
	* **A branded, complimentary set of colors including at least two main colors with light and dark variants and one highlight color. These should be listed with both the hex and RGB values.**
	* **A paragraph of jargon-free language explaining the visual style of the site in enough detail that another developer could work on it without having to call you up for help.**
	* **Examples of any custom elements that are important to your design, such as buttons, menus, or forms**
* Note the technical requirements in Iteration 1.5


##Iteration 1.5 - Technical requirements that affect content planning
*These are only separated for organizational purposes. This information should be considered at the same time as you are working on Iteration 1*

* **Include the following common design patterns and bootstrap features:**
	* **Fixed header**
	* **Scrollspy**
	* **Smooth scrolling**
	* **A cover-style landing area** 
	* **Modals**
* **The "contact" section should include a customized [Mailchimp form](http://mailchimp.com/features/custom-forms/). This should be presented as a contact form, not a "join my mailing list" form** *You will have to create a free Mailchimp account first*
* **Create and include a favicon that legibly communicates your site's style**  
* **Plan one region of the page to deliver wide-screen content (such as an image or a video) on screens >1000px wide that transforms significantly to look just as good on a mobile screen**
* **Use **[collapsible groups](http://getbootstrap.com/javascript/#collapse)** or another accordion-style plugin to group related content within your portfolio section so that it all fits within the height of a single screen on mobile, tablet, and full-screen desktop browsers**
* **Use fonts from the Google Font API to personalize your font choices, specifying common fonts as fallbacks**



##Iteration 2 - Mobile-first development

* Re-evaluate your site piece by piece according to the new content plan and requirements, making changes to the code as necessary.
* Add all custom rules to the standard Bootstrap media queries
* Adjust values in Bootstrap's media queries if necessary (you should have a good reason for doing this, not just because you want to)
* **Use media queries and the background-image property to deliver 2x resolution images to devices with a high pixel density (i.e. retina screens)**
* **Produce icons for iOS home-screen bookmarks**
* **Include the meta-tags in the head of the document necessary to add home-screen bookmark icons on iOS devices, both retina and non-retina.** 
* **Your classes, HTML structure, and code comments should be semantic and logical so that the site can be easily re-styled, rebuilt, or changed in the near future**
* Style any regions that will change significantly on mobile devices first, so that their behavior will be known and reliable before moving on
* Adjust any HTML or page design as necessary to accommodate any new mobile-centric decisions


##Iteration 3 - UX integration

* Add your CSS transformations. 
* Adjust any visual or functional design to reduce as much "friction" in the user experience as possible
* **Your CSS transformations must be compatible with Firefox, IE, Safari, and mobile browsers** 
* **Use the Compass library to set your font sizes in a vertical rhythm ** *Hint: this is a very google-able sentence*
* **Style the fields and buttons on the contact form to match the rest of your site**
* Add modal, accordion, and any other plugin necessary
* Test navigation of the entire site on multiple platforms (phone or phone simulator, standard desktop, wide-screen)

##Iteration 4 - Refinement
* Review your content plan and compare to your site as-implemented
* **Post any adjustments you've made to the approved content plan to discussions in Basecamp, explaining your reasons with clear examples.**
* Refine or tweak any fine details which might vary on different browsers or screen sizes *This can be surprisingly time-consuming*
* **Deploy to Github Pages when the site is stable**

## Iteration 5 - optional extra credit
* **Using jQuery and media queries, transform the collapsible section region into discrete, sequential sections when viewed on a phone in landscape mode**
* **Add a live feed from one of your social media channels**
* **Add a fixed, [vertical tab](http://www.doitwithwp.com/add-fixed-support-tab-side-every-page/) that links users to your social media presence**
* **Show only the edges of this tab by default, using CSS transitions to ease it out into full view when the user hovers over it**
* **Include a pleasant warning visible only to users who have disabled Javascript** *Please mention this to your instructors if you have done this, as they will not check for it by default*
* **Add simple, parallax effects**


# Schedule and deadline

* This project includes a halfway-point review. One week from project start you will have to check in with your instructors and walk them through the current state of the site. 
* For half of the interview treat them as clients. 
* Use the other half to ask them questions which will help you finish as instructors

<hr />
Copyright © 2014 Alan Zimmerman & Nìm Wunnan<br />
Used by permission by Portland Code School