Front End Freelancer Course
#Code Challenge 06
## Mobile-first, grid-based, dynamic user experience!

# Overview

Even though that title sounds like a parody of things that web designers say, it describes exactly what we are doing.

Building off of week 9's assignment, we want to build a single-page scroller that is optimized for mobile devices, showing off your portfolio so far. It should deliver the same content to all platforms and respond to screen size so that every user's experience is rich and seamless, regardless of the device they use.

We will use bootstrap to produce a grid-based, responsive site that includes jQuery-based interactions, retina-friendly images, and mobile design conventions. It will be deployed using github pages and tested on mobile devices.

**You cannot begin this project until you have handed in your assignment.**

*Note: Notes and tips are provided in-line with tasks. Also, **bold** list items indicate which tasks will be used as assesment criteria in a basecamp task. The non-bold list items are still very important, but they are more instructions or advice on process rather than tested features.*


# Specification

Week 9's assignment is your codebase. Your hand-in should be considered an exploratory stage which will need to be critcally reevaluated with the goals of the project in mind before you begin.

##Content plan

* Start your project with a [design spike](http://www.smashingmagazine.com/2012/11/06/design-spikes-fit-big-picture-ux-agile-development/) to identify improvements and new features
* **Create a written content plan that states all the high level goals of the project**
* **Specify phone and tablet layouts, taking both landscape and portrait mode into account**
* **Visually represent this with wireframes using your preferred method** *You can use hand drawing, Adobe Illustrator, etc - as long as it looks professional*
* **Create a [style guide](http://www.smashingmagazine.com/2010/07/21/designing-style-guidelines-for-brands-and-websites/) for your project which defines the following:**
	* **All fonts and font weights in use and their corresponding HTML elements, classes, or contexts** *ie. Provide examples of all headings you use and show the classes or page regions that have special formatting, such as a sidebar with italic text*
	* **A branded, complimentary set of colors including at least two main colors with light and dark variants and one highlight color. These should be listed with both the hex and RGB values.**
	* **A paragraph of jargon-free language explaining the visual style of the site in enough detail that another developer could work on it without having to call you up for help.**
	* **Examples of any custom elements that are important to your design, such as buttons, menus, or forms**
* **Use The following common design patterns and bootstrap features:**
	* **Fixed header**
	* **Scrollspy**
	* **Smooth scrolling**
	* **A cover-style landing area** 
	* **Modals**
* **Your portfolio materials should be a discrete section, with the rest of the site serving to give characterizing and relevant information about you as a person**
* **Include About Me, Work, and Contact sections in the site**
* **Create and include a favicon that legibly communicates your site's style**
	 

## Mobile-first development

Read the section and references from North regarding the [mobile-first methodology](https://github.com/Snugug/north#mobile-first).

* **None of your interactions should interfere with normal scrolling and swiping on a phone or tablet** 
* **Use media queries and the background-image property to deliver 2x resolution images to devices with a high pixel density (ie retina screens)**
* **Include the meta-tags in the head of the document necessary to add home-screen bookmark icons on iOS devices. These should also be retina-ready**
* **Style one region of the page to deliver wide-screen content (such as an image or a video) on screens >1000px wide that transforms significantly to look just as good on a mobile screen**
## jQuery-based interaction

Finally, use jQuery to modify one page element after the document has been loaded.
* **load the current version of jQuery from [Google's hosted code library](https://developers.google.com/speed/libraries/devguide#jquery)**
* **Add a block of jQuery to the *footer* element that contains your code**

##UX
* CSS -based transformations
* [Collapsible groups](http://getbootstrap.com/javascript/#collapse) 
* Google fonts with common fallbacks
* Use the Compass library to set your font sizes in a vertical rhythm *Hint: this is a very google-able sentence*

## Discussion

*Wordpress has specific ways of rendering menus and other regions of the page. It may help to go through each page element one by one and make sure you understand what part of Wordpress controls its creation*

*Does your theme already use jQuery? Do you have to be careful not to conflict with that? How can you test for this if you don't know the answer?*

*Is your theme built in a way you can't modify? Can you make compromises in your design to find a more usable theme?*

## Success criteria

Remember #2 on the [Done Manifesto](http://www.brepettis.com/blog/2009/3/3/the-cult-of-done-manifesto.html). A small finished product is better than a big half-finished project. Since _you_ are planning the content, you should be able to plan the scope of the finished project. So, part of your assignment is to

* Identify necessary features or content as "must haves" in your content plan
* Identify non-critical features or content as "would be nice" in your content plan
* Customize the visual appearence of the parent theme to the point where an average user would view the site as a coherent brand rather than a stock installation of the parent theme.
* Clearly communicate what you were able to accomplish on delivery, referencing these items
* Deliver a site that does not appear broken or incomplete in any way, regardless of the level of completion

## Delivery instructions


* You will have to do a client walk-through with your instructors. You can use your own laptop and guide them through the site, but you will have to allow them to click around on the site on their own for a few minutes.
* You should send them an up-to-date DB dump, a link to the theme you used, and a repo containing your child theme (basically the same deploy process as MODX).
* You should be able to completely remove and reinstall your parent theme without losing any of your customizations *ie All your work should be contained in your child theme directory*

# What you will need to complete this challenge

* The ability to install and configure Wordpress
* Identical configuration in all environments that need to run the site
* An understanding of what all the files in a Wordpress theme are for
* The ability to import and export databases between Wordpress installations 
* The ability to clearly plan and communicate the purpose and content of the site

**Wordpress elements used**

* [Menus](http://codex.wordpress.org/Navigation_Menus)
* [Sidebars](http://codex.wordpress.org/Customizing_Your_Sidebar)
* [Posts](https://codex.wordpress.org/Writing_Posts)
* [Pages](https://codex.wordpress.org/Pages)
* [Themes](https://codex.wordpress.org/Theme_Development)

#Detailed instructions

##Iteration 1
Planning your site architecture and workflow


* **Write out a simple, high-level statement of what the site is about, its technical requiremets, and what it intends to communicate**
* **Research and pick a free responsive theme that fits your criteria**
* **Create a sketch site based on the structure of the theme you chose** 
* Organize all content and assets and plan how you will add them to the theme
* Identify areas that will have to be stubbed out with filler content
* **Identify necessary features or content as "must haves" in your content plan**
* **Identify non-critical features or content as "would be nice" in your content plan**


##Iteration 2 - Setting up Wordpress

*Most of this work will happen in the database*

* Install your chosen theme
* **[Create](http://www.elegantthemes.com/blog/resources/wordpress-child-theme-tutorial) a [child theme](https://codex.wordpress.org/Child_Themes), named [your theme]-child**
* Create a repo from the root directory of the child theme. *Note that Wordpress is not forgiving about its file structure, so you will have to make sure you are in control of the naming of your repo and the directory it corresponds to*
* Plan any visual assets you will need for the site, separating them between "content" and "design elements". *"Design elements" will be image files that are part of the structure of the site, such as backgroud images for buttons or icons, whereas content is something like a photo in a slideshow or a downloadable .pdf*
* **Upload all "content" images that the user will expect to edit using the Wordpress admin** *Usually this is done directly on a post or a page, either using the "set featured image" option, or by adding an image to a WYSWIG content field.* 
* **Use [placehold.it](http://placehold.it/) to generate placeholder images for regions that need an image for demonstration and development purposes but won't have final content until the client adds it.**
* Referencing your content plan, enter representative content
	* **Create pages for standalone pages**
	* **Create posts for "article" style pages**
* **Adjust all necessary settings in the "Appearence" or "Theme Settings" areas of wp-admin.** *If you're not sure if you should make these changes here or in the CSS, ask yourself "Should the client have control over this?" and "Does this make anything else harder to do down the line?"*
* Set up menus
	* **Define the titles and links to all pages that should appear in the Nav menu**
	* **Add / configure widgets to any sidebars or page regions if your content plan requires other lists of articles** *Such as links to all articles by a certain author, or within a certain category.*



##Iteration 3 - Styling your theme

*Most of this work will happen in the files inside your child theme folder or in your planning notes*

* As a team, review all the rendered HTML and its corresponding styles in all areas you plan to modify
* Identify any areas that will need to have their HTML altered *as opposed to things that can be modified strictly through CSS*
* **Inform your instructors of any part of the content plan that may have to be altered because of limitations of the theme** *ie Explain how you will have to compromise or adapt because of things that can't be done with a reasonable amount of work due to the way Wordpress or any third-party components work -- not compromises due to your lack of understanding. You should be able to explain clearly why it's not a good idea to take a certain approach given the technical constraints of the project.*
* **Add all image files used as design elements in your theme to [your theme]-child/images**
* Create all the .css files in your child theme that you will need to override your parent themes styles, working only in the child theme files. 
* **Add a new element to the header area of your theme which will be visible on all pages and posts. It should have all the necessary classes provided by your theme to resize appropriately.** 
* **Add a new element to the footer area of your theme which will be visible on all pages and posts. It should have all the necessary classes provided by your theme to resize appropriately.**
* **Add HTML comments to indicate the start and end points of each of these new elements**
* Make all necessary changes to template files or content areas in the database to output the classes and elements that you will need for your custom styles.
* Agree on a milestone state of the database so you can work primarily in the child theme files
* **Adapt the styles and the theme files to reach a not-broken looking milestone**
* **Check in with clients / instructors to walk them through the current state of the project and explain what will come next**

##Iteration 4

* Repeat the steps of Iteration 3 to incorporate more polished styles
* Pay special attention to any ways in which your new changes or markup have changed or broken mobile styles
* Look for opportunities to add "would be nice" features without compromising vital features

##Iteration 5
* Review your content for completion, accuracy, and structure
* Make any necessary adjustments to HTML structure
* **Add a link to the most recent jQuery library in the footer or confirm that your theme has a working version of jQuery already installed**
* **Write a simple function in jQuery that visually changes an element on the page using the .onClick() event**
 


## Iteration 6 - optional extra credit
* **Install a 3rd party slideshow plugin**
* **Create two categories of posts, and add an extra widget or custom field to one but not both categories**
* **Embed a twitter feed, a facebook widget, and/or streaming video**
* **Add an element to the footer that only shows up on the home page, using a Wordpress function (not jQuery or CSS)**
* **Add a preview image to your child theme that shows up in the "themes" area of wp-admin**


# Schedule and deadline

* This project includes a halfway-point review. One week from project start you will have to check in with your instructors and walk them through the current state of the site. 
* For half of the interview treat them as clients. 
* Use the other half to ask them questions which will help you finish as instructors

<hr />
Copyright © 2014 Alan Zimmerman & Nìm Wunnan<br />
Used by permission by Portland Code School