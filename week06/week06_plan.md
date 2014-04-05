*Portland Code School*

Front End Freelancer Course

#Week 06

#What we'll cover this week
## MODX
**Concepts in this section**

* Review static elements. UNDERSTAND THEM COMPLETELY
* Understand how chunks, snippets, and template variables interact
* Learn common structures for using these elements together
* Learn how to navigate the manager and how to structure a site

*Includes a Q&A about anything we have covered so far*

## Career / Feedback
* Begin thinking about areas of focus
* Opportunity to request deeper coverage in certain areas


## Introducing Basecamp
**Concepts in this section**

* Understand how to use Basecamp to collaborate as a team
* To-do lists, calendars, projects, and discussions
* Using Basecamp to communicate with clients 

## Role playing as a CMS
* Understand in greater detail the different stages in rendering a page in a CMS
* Be able to abstract these steps and apply them to other CMSs
* Use this understanding to represent a custom field (a "template variable" in MODX)

## Getting Data in and Out of a Database Review
* How to connect to a MySQL database
* Using Sequel Pro
* Understand what tables, columns, rows, and fields are
* Import and export data from a database
* Relationship of configuration to data



## CC_03 lab

## Week review
## CC_04 release

## Assignment

 0. By next week, be ready to do a lightning talk on the technologies and methods that you think you should focus on in your career
 0. Independently research all materials related to Wordpress that we have covered that you have questions about. See if you can install wordpress on your machine! Edit a theme!
 
 <hr>


##Monday

### 9:00 What we'll cover this week

  
### Break

### 9:15 MODX
  * Structuring
  * Manager tips
  * Resources for advanced development

### 10:00 break
### 10:15 MODX - Q&A		

Students have the chance to ask questions about MODX which haven't been covered but have come up during work on CC03
		
	

##Wednesday

### 9:00 Career planning -- your stack

You should start thinking about your strengths and weaknesses and the things that interest you the most. Next week you will have to give a lightning talk on your planned course of study and where you think it will lead you for your capstone.

### 9:10 break

###9:15 MODX structural exercise (45 - 60 min)
A get-out-of-your-seat activity! The goal is to play-act the passage of information through the different moving parts of MODX, passing information between students assembly-line-style in a sequence that represents what MODX is doing. This should clarify the inner workings of MODX and CMSs in general, and introduce the concept of template variables, which are required in CC_03.

Using the restaurant metaphor as a jumping-off-point, the class should divide the whole room into different regions according to the different parts of the MODX page rendering workflow:


* Back-end
	* The manager 
	* Database
	* The MODX API
	* index.php
	* the DB cache
	* static elements (files corresponding to elements)
* The browser
	* Rendered HTML from index.php
	* Stylesheets
	* Javascript

### 10:15 Break

### 11:00 Break

### 11:10 Introducing Basecamp

### 11:30 CC03 lab and CC02 student feedback
* Announce alteration of CC03 timeline


##Friday 
### 9:00 Using Sequel Pro 

* Download it for free [here](http://www.sequelpro.com/)
* Instructions for connecting to [MAMP](http://www.sequelpro.com/docs/Connecting_to_MAMP_or_XAMPP)
* See screenshots for further reference


### 10:00 Using Basecamp
### 10:05 Week review - Basecamp, Databases, and MODX
 

## Resources and further research

###MODX 
* [writing snippets](http://rtfm.modx.com/revolution/2.x/developing-in-modx/basic-development/snippets/how-to-write-a-good-snippet)
	* here's an [overview of snippets](http://rtfm.modx.com/revolution/2.x/developing-in-modx/basic-development/snippets)
	* [More about chunks](http://rtfm.modx.com/revolution/2.x/making-sites-with-modx/structuring-your-site/chunks)
	* here's another overview [by Bob](http://forums.modx.com/index.php?topic=51748.0)
* [defining media sources](http://rtfm.modx.com/revolution/2.x/administering-your-site/media-sources)

###MODX Snippets / Plugins

* [Wayfinder](http://rtfm.modx.com/extras/evo/wayfinder)
* [MigX](http://rtfm.modx.com/extras/revo/migx)
* [Articles](http://rtfm.modx.com/extras/revo/articles)
* [spieFeed](http://rtfm.modx.com/extras/revo/spiefeed)
* [CodeMirror](http://modx.com/extras/package/codemirror)
* [TinyMCE](http://modx.com/extras/package/tinymce) & [wiki entry on TinyMCE](http://wiki.modxcms.com/index.php/TinyMCE)

###getResources example

``` 
[[!getResources? 
    &tpl=`articleTpl`
    &sortby=`menuindex`
    &includeContent=`1`
    ]]
```

### Basic chunk-as-tpl example

```
	<h2>[[+pagetitle]]</h2>
	<p>[[+content]]</p>
	<hr>
	<p>This is the end of the article. Go away</p>
```

### Basic template example

```
<html>
<head>
  <title>[[++site_name]] - [[*pagetitle]]</title>
  <base href="[[++site_url]]" />
</head>
  <body>
    [[*content]]
  </body>
</html>
```    


<hr>
#Rollover
<hr>

* Review resources to learn more advanced development, including 3rd party snippets 
* Writing Sass
### 9:00 Javascript review Part 2 - AZ

### 9:20 Writing Sass 
* [Structuring your project](http://thesassway.com/beginner/how-to-structure-a-sass-project) 
* Practice turning some of your own code into SASS
	* Look for repeated parent elements
	* Look for sections of related content
* Converting SASS with your editor  

### 10:15 Other CMSs
* Big players 
	* [Wordpress](https://wordpress.org/)
	* [Drupal](https://drupal.org/)
	* [Joomla](http://www.joomla.org/)
	* [Django](https://www.djangoproject.com/)
	* [ExpressionEngine](http://ellislab.com/expressionengine)
	* [Craft](https://buildwithcraft.com/)
* Market-specific CMSs
	* [Shopify](http://www.shopify.com/)
	* [Indexhibit](http://www.indexhibit.org/)
* Site builders
 	* [Squarespace](http://www.squarespace.com/)
 	* [Wix](http://www.wix.com/)
* Non-database CMSs
 	* [Kirby](http://getkirby.com/)
 	* [Jekyll](http://jekyllrb.com/)
 	* [Ghost](https://ghost.org/)
 	* [Pico](http://picocms.org/)
 	* [Statamic](http://www.statamic.com/)

### 10:45 Break



### 10:15 Javascript Review -- AZ
* Return of the DOM

###Wordpress Documentation

[The Codex](http://codex.wordpress.org/)

###Anatomy of Wordpress

* [Meaningful file structure](http://codex.wordpress.org/Site_Architecture_1.5)
* [Themes](http://codex.wordpress.org/Theme_Development)
	* more comprehensive [guide to themes](http://codex.wordpress.org/Blog_Design_and_Layout)
* [Child themes](http://codex.wordpress.org/Child_Themes)
* [Plugins](http://codex.wordpress.org/Plugins)
* [Widgets](https://codex.wordpress.org/WordPress_Widgets)
* The [dashboard](http://codex.wordpress.org/Dashboard_Screen)
	* more info on [administration screens]()
* [Customizing appearance](https://codex.wordpress.org/Appearance_Customize_Screen)

### 9:00 Databases
* Review how to access and navigate phpMyadmin
* Referencing the [MODX quickstart video](https://vimeo.com/68094979), show how to find phpMyadin through a popular hosting C-Panel such as GoDaddy 
* Introduce Sequel Pro
* Show basic MySQL command line interaction
* Show the relationship between the DB configuration and the credentials for logging into each
* Review the idea of tables, columns, rows, and fields
* Show, in a very basic way, how SQL operates on these aspects of the database
* Explain, at a very high level, that the MODX API uses PHP to map the structure of the database to functions and variables (really objects) that you can use to build the page and do more complex, application-like things with the data. 





### 9:15 Wordpress Part II
* Review of materials from Monday
* Wordpress placeholders compared to MODX placeholders
* [The loop](https://codex.wordpress.org/The_Loop)
* **Hands-on** Taking apart a theme 

### 11:00 Mimosas / Real Life Examples

RLE - Ruby-environment site generators I've worked with



## Anatomy of Wordpress
**Concepts in this section**

* Where you put things and what you call them in the Wordpress file structure matters to wordpress
* What are themes, child themes, plugins, widgets
* How to navigate the admin, or dashboard
* Customizing themes and settings without writing code


## Other CMSs
* Big players 
* Non-database CMSs
* Market-specific CMSs
* Site builders
	
**Concepts in this section**

* Each CMS has its own strengths and weaknesses
* Not all of them are written in PHP
* Some don't use databases
* Some run entirely in the browser
* When picking a CMS, understand the reasons behind its creation (ask, "What need does this meet?")

## Wordpress continued
**Concepts in this section**

* Shortcodes
* The Wordpress "Loop"
* Wordpress variables
* How to take apart and edit a theme

## Javascript review
**Concepts in this section**
AZ -- please fill in


## Javascript review continued
**Concepts in this section**
AZ -- please fill in


##Research
* [input filters](http://rtfm.modx.com/revolution/2.x/making-sites-with-modx/customizing-content/input-and-output-filters-(output-modifiers)
* [user management](http://rtfm.modx.com/revolution/2.x/administering-your-site/security/users)
* [modx cloud](https://modxcloud.com/)


 	
  
<hr>
Copyright © 2014 Alan Zimmerman & Nìm Wunnan<br />
Used by permission by Portland Code School
