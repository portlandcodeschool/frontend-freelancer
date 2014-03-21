*Portland Code School*

Front End Freelancer Course

#Week 4

##Monday

### What is a CMS

### What is a CMS (45 mins - 15 / 15 / 15)
* [Brief History](http://www.contegro.com/info-center/designers-blog/blog-article/_thread_/a-brief-history-of-cms-development)
* What need do they fill?
* Most are written in PHP
* [There are lots and lots of them](http://www.opensourcecms.com)
* Some cost money and some don't and some sort of do
* Central concepts
	* reusability & repetition
	* separation of content and structure (in an ideal world)
	* letting non-developers CRUD content (explain CRUD)
	* stocking your toolbox with stuff you almost always need
	
#### Exercise
Login to both the [MODX](http://www.opensourcecms.com/scripts/details.php?scriptid=48&name=MODx) and [Wordpress](http://www.opensourcecms.com/scripts/details.php?scriptid=88) live demos and edit content. 

#### The three parts of a CMS
* Files
* Database
* Configuration

### Break

### Lab -- install MODX (60 mins)

**Notes**

* Install this in a NEW FOLDER in your local root
* Find [phpMyAdmin](http://localhost:8888/MAMP/phpmyadmin.php?lang=en-iso-8859-1&language=English)
* [Installation instructions](http://rtfm.modx.com/revolution/2.x/getting-started/installation)
* We are using MODX first mainly because it provides an excellent combination of powerful features and relatively straightforward development methods and tools.

**Steps**

* [Download MODX](http://modx.com/download/)
* What are you downloading?
* Unzip into /htdocs or /www
* Look at the code!
* Follow the [instructions](http://rtfm.modx.com/revolution/2.x/getting-started/installation)
	* go to /setup to begin process
* Create admin user with admin / password
* Login to manager at /manager


### Break

### Git -- merging, branching

### Lab -- install MODX
### Pick team to present

##Wednesday

### What is a CMS part 2

### Break

* Understanding the three parts of the CMS
	* Files: program files and assets
	* database
	* configuration
	
### Basic Structures of MODX
* Snippets
* Chunks
* Templates

### Making A simple site with MODX
* Drop your html into the main template
* View Resource ID 1
* Understand what the URL means
	* Find index.php
	* Change the Query to "2"
	* Make a new resource and revisit that page
* Add a dynamic section to your HTML -- [*content] 


### Break

### Code Challenge Presentation: The Ettes (15 mins)

### Code challenge lab (60 mins)

### Feedback on Code Challenge (concurrent with lab)


##Friday 
### Going further with MODX (60 mins)
	
Introduction to [MODX](http://modx.com/)

[Bob's Guides](http://bobsguides.com/modx.html) - a handy online overview and comprehensive guide book.
	
#####MODX elements

* **template** -- blueprint for a webpage

	`HTML + MODX tags`
* **chunk** -- content

	`[[$content]]`
* **snippet** -- dynamic output, aka PHP

	`$output = "<p>This is the first line of my snippet.</p>";`
	`return $output;`
	
	* Using snippets
	* installing via the Package Manager
	* writing your own
	* the anatomy of a snippet call
	
* **template variable (TV)** -- an extra resource field you create yourself

	`[[*longtitle]]`
* **plugins** -- custome code that intervenes in system event firing for the MODX engine

* **static resource** -- files and database linked together

* Integrating multiple MODX elements and concepts
	* Snippets, chunks, and template variables used in a template
	* Template variables used in a chunk

#####Examples of popular snippets

* [getResources](http://modx.com/extras/package/getresources) = to aggregate content

* [Wayfinder](http://modx.com/extras/package/wayfinder) = to create menus

* [tinyMCE](http://modx.com/extras/package/tinymce) = WYSIWYG editor

* [Gallery](http://modx.com/extras/package/gallery)

* [Code Mirror](http://modx.com/extras/package/codemirror)

###Break

###Resources


#####MODX
[MODX Community Forums](http://forums.modx.com/)

* How to sign up: Go to [MODX registration](http://modx.com/login/).

[Beginner's Guide to MOD](http://wiki.modxcms.com/index.php/Beginner's_Guide_to_MODx)

[MODx Videocasts](http://rtfm.modx.com/revolution/2.x/getting-started/video-quick-start-series/)

[Codingpad's MODx Revolution for Beginners](http://codingpad.maryspad.com/beginner-tutorials/)

[Learning MODx](http://jgulledge.wordpress.com/2010/06/26/learning-modx-tutorial-1-creating-a-template/)
[Guide to installation and development tutorials with WAMP](http://forums.modx.com/thread/70754/modx-revolution-from-scratch-a-beginner-s-workflow)


#####What is a CMS?

[Basic overview](http://docforge.com/wiki/Content_management_system).


#####Example Sites

[MODX Site Gallery](http://modx.com/get-modx/modx-site-gallery/)

[12 Great MODX Sites](http://www.designshifts.com/12-great-modx-websites/)


#####Basic Intros to PHP

* MF discussion of [php resources](http://ask.metafilter.com/237082/How-can-a-schlump-like-me-learn-PHP-in-the-shortest-possible-time)...
* [PHP Manual](http://www.php.net/manual/en/getting-started.php)
* [PHP the Right Way](http://www.phptherightway.com/)
* [PHP 101 for the Absolute Beginner](http://devzone.zend.com/6/php-101-php-for-the-absolute-beginner/)
* [PHP Tutorial for Beginners](http://www.webmonkey.com/2010/02/php_tutorial_for_beginners/)
* Use guides on Treehouse, Code Academy, Khan, [Tutsplus](https://tutsplus.com/course/php-fundamentals/)
* Books: "PHP for Absolute Beginners" or "PHP Cookbook"

###Break	 


###Code challenge hand-in and feedback (30 mins)

### Code challenge assignment (30 mins)

### Real world examples

###Break

#For next week

###Using your computer like a computer person (no more than 20 mins)
* Virtues of laziness
* Automation
* Customization
* Assuming that the machine should do the work, not you

## Assignment

 0. Watch all [MODX quickstart videos](http://rtfm.modx.com/revolution/2.x/getting-started/video-quick-start-series/) **EXCEPT** the first video about MODX Cloud
 1. Try to create a new template in you local install of MODX
 2. Practice [branching and merging in Git](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
 
 ## Reference
  
 * [MODX tutorials](http://rtfm.modx.com/revolution/2.x/getting-started/video-quick-start-series/) -- note, please SKIP the first video about MODX Cloud
 * [MODX documentation](http://rtfm.modx.com/revolution/2.x/)
 * [Wordpress Documentation](http://codex.wordpress.org/)
 
 
<hr />
Copyright © 2014 Alan Zimmerman & Nìm Wunnan<br />
Used by permission by Portland Code School
