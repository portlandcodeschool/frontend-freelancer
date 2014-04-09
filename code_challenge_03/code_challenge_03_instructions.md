*Portland Code School*

Front End Freelancer Course
#Code Challenge 03 - Welcome to the Dynamic Web
## Make a small, multi-page site in MODX with repeated content

# Overview
The goal is to plan, construct, and style a small site in MODX that includes a dynamic list of articles, shared elements such as headers and footers, and custom template variables. As a team you will also have to come up with one new design or layout element that will change in a logical way on each "page" or, in MODX terms, each resource.

# Specification

Pick a team-member's Code Challenge 02 deliverable to use as a codebase. Starting  with the HTML and CSS from that project, your team will have to abstract page structures to use the basic principles of a CMS:

* Repeatability
* Editability
* Use of an existing toolbox


**Question for discussion:**

*If you are building this in MODX, how can you structure and name your wireframes and repo so that you are clear on what parts of the site correspond to which types and instances of MODX objects?*

*How will you tailor your workflow to make sure everyone has the current version of the database and all the files when they need them?"*


##Iteration 1
Planning your site architecture and workflow

1. Review existing code, and [draw up your own wireframes](http://balsamiq.com/download/)
2. Create a new repo for the team that you will clone into the "assets" directory of your MODX site and install a development environment for MODX on all of your local machines. MAKE THE REPO THE SAME THING AS ASSETS. NAME IT ASSETS.
3. MAKE A NEW INSTALL OF MODX

##Iteration 2
Getting material into MODX

1. Import static site into MODX
5.  Practice exporting and importing the database using [phpMyadmin](http://localhost:8888/phpMyAdmin/?lang=en-iso-8859-1&language=English) or [SequelPro](http://www.sequelpro.com/)
	* Understand the relationship between the files in your repo, the MODX program files, and the information in the database


##Iteration 3
Making the site dynamic according to your wireframed plans.

1. All elements that are shared by all pages should be made into Chunks and placed in the appropriate templates. 
2. Get to the point where your "Pages" template can be used to output a site identical to your initial codebase	
##Iteration 4
Adding blog articles

1. Make new resources for each blog article, and add placeholder content.
2. Make chunks to output information from these resources in different contexts.
3. Use getResources to output information from articles using chunks as templates or 'tpls'.
	

##Iteration 5
Cleaning up

1. Add the "something dynamic" the client asked for.
2. Make sure that any the new material you have added will make sense to the client.


## Iteration 6 - optional extra credit
Dealing with multiple users.
 
#Web Design Brief

You did such a good job with your current client that they've decided that they want more! They would like to be able to update their site themselves, make the site look a little more "dynamic." They can't articulate what they mean by that in any more detail. "I'm sure you'll come up with something good," is the best they can do.

#Delivery
In this challenge, Al and Ním are the sysadmins on the client's server. They need you to send them a pull request on your repo, an up-to-date database export, and the admin credentials when you are ready to deliver the site. 

*Note: Include your wireframes in the repo as well, since Al and Ním are also your teachers*


##The Template

The template HTML and CSS comes from the previous code challenge. Besides the client's vague 'something dynamic' requirement, we will not be adding any new permanent content or adding new styling or HTML content. The challenge is to take what you've made and turn it into a dynamic MODX site. 



##Repeatability
You will create a category of resources called "Articles" that will be dynamically referenced in three contexts:

* As standalone pages
* In a list with excerpts on a "collection" page (you will adapt the "Home" page from CC_02 -- the one with the headline of "keeping in touch.")
* In a list with titles and subtitles in the sidebar featured throughout the site

You will also identify page regions that are shared by all pages on the site and abstract these out into MODX chunks.

##Editability
All of the written copy on the site should be editable. That means that it should be possible to change the titles, content, and all headlines by logging into the MODX manager and editing a resource or an element.

This means you will have to [create a new user](http://rtfm.modx.com/revolution/2.x/administering-your-site/security/security-tutorials/giving-a-user-manager-access) for your client and share the login credentials with them.

**Extra credit**: Make the images editable as well.

##Use of existing tools
Besides using MODX itself, we will be using a snippet called [getResources](http://rtfm.modx.com/extras/revo/getresources). This is the most popular MODX snippet by far, and there's a lot of support online about using it.

#Workflow
CMS's use three different concepts: files, data, and configuration. You will need to separate your working files into a repo that *does not* include the program files for MODX. You will need to get comfortable exporting and importing databases, and you will need to ensure that your configuration is the same on all machines.  (Windows users will have to be aware of any potential differences in their configuration.)

**Discussion topic: Why don't you want to version MODX itself? Why doesn't pulling down the repo update the database? Why do you need to synchronize your configuration?**

#GIT and CMS's
No database-depenent CMS is fully versionable, but most major ones have strategies to help you use versioning tools like Git. MODX allows you to keep all of the content for elements (templates, chunks, snippets) in files linked to the database using [static elements](http://rtfm.modx.com/revolution/2.x/administering-your-site/upgrading-modx/upgrading-to-2.2.x#Upgradingto2.2.x-StaticElements). You will keep all of your files in the "assets" directory in MODX and use the manager to link them to the database.
  
Clone your new repo into the assets directory. This should contain all the static files for your chunks, templates, and CSS. The organization and naming of this and everything in it directory is up to you and part of your assignment.


##Configuration
* Name your database modx_CC_03
* Use the default table prefix (modx_)
* Use the default MYSQL username and password for MAMP (root/root)

##Managing the database
Whenever you need to update another environment with changes made to the database, you will have to export and import the database using [phpMyadmin](http://localhost:8888/phpMyAdmin/?lang=en-iso-8859-1&language=English) or [SequelPro](http://www.sequelpro.com/)

**Note**: *You can put your databases exports in your repo as a method of keeping track of them, but it's up to your team to decide if this is efficient for the way you are working. Try to keep the number of times you have to export and import a database to a minimum. This is more about work strategy than knowing code.*


#MODX
**Every element you create in this challenge** should be a [static element](http://rtfm.modx.com/revolution/2.x/administering-your-site/upgrading-modx/upgrading-to-2.2.x#Upgradingto2.2.x-StaticElements) pointed to a file in your repo within the assets directory. The names of the elements in the database should correspond logically to the names of the files.

Use categories and parent resources within MODX to organize your resources and elements.

##Templates
You will create two templates: one for "articles" and one for "pages". "Articles" will be used to display the full content of individual articles, in the same way that a blog will let you click through to a standalone page for individual articles.

"Pages" are the other pages on your site -- these will look nearly identical to your current, static site to the user 

**It is up to you and part of your assignment to provide navigation between articles and the rest of the site, and to organize the relevant content on an article's standalone page.**

##Chunks
You will use chunks for two purposes -- sharing repeated content like a header throughout the site, and for templating the output of the getResources snippet.

##Snippets
You won't be creating any snippets yourself, but you will have to install and use [getResources](http://rtfm.modx.com/extras/revo/getresources). Do not edit or version the content of this snippet. Keep it exactly as it comes to you from the package manager.




#Detailed instructions

##Iteration 1
Planning your site architecture and workflow

1. Review existing code, and [draw up your own wireframes](http://balsamiq.com/download/)
	* Isolate sections of existing page structure that will become repeated content
	* Identify and wireframe the additions you plan on adding per the client's vague request 
2. Create a new repo for the team that you will clone into the "assets" directory of your MODX site.
3. Install a development environment for MODX on all of your local machines, using the same configuration options and the most current version of MODX on all of the machines.

##Iteration 2
Getting material into MODX

1. Import static site into MODX
2. Create resources for "Home", "About", and "Contact". Give these pages the category of "Pages"
3.  Create a new category of resources called "articles" and create dummy resources.
4.  Create two templates -- one for "Articles" and one for "Pages"
5.  Practice exporting and importing the database using [phpMyadmin](http://localhost:8888/phpMyAdmin/?lang=en-iso-8859-1&language=English) or [SequelPro](http://www.sequelpro.com/)
	* Understand the relationship between the files in your repo, the MODX program files, and the information in the database


##Iteration 3
Making the site dynamic according to your wireframed plans.

1. All elements that are shared by all pages should be made into Chunks and placed in the appropriate templates. 
2. Get to the point where your "Pages" template can be used to output a site identical to your initial codebase, using chunks for repeated elements and the [[*content]] variable for page-specific content
3. Use the [Package Manager](http://rtfm.modx.com/revolution/2.x/developing-in-modx/advanced-development/package-management) to install the  [getResources Snippet](http://rtfm.modx.com/extras/revo/getresources)
	* If you are comfortable with the package manager, we recommend you install TinyMCE and CodeMirror to make editing content in the manager easier.
	
##Iteration 4
Adding blog articles

4. Make new resources using the content from the "blog" articles on "Home"
	* Each resource should have information in the content, pagetitle, longtitle, and introtext fields.
	* You will have to enter placeholder content in the appropriate fields if they do not already have content from CC_02. Make sure this content is client-friendly, logical, and unique to each resource.
	* Make all "Article" resources as child resources within the resource "Home"
4. Create chunks as output templates (*not* Template elements, but "[tpls](http://rtfm.modx.com/extras/revo/getresources#getResources-TemplatingProperties)" for getResources) based on the existing HTML used in the sidebar and in the content area of "Home". 
	* You should use two different chunks -- 'sidebarTpl' to make the list in the sidebar, and 'blogTpl' to list articles in the main content region on "Home".
	* sidebarTpl should include the following placeholders: pagetitle, longtitle
	* blogTpl should include the following placeholders: pagetitle, publishedon, introtext
5. Add getResources snippet calls to the sidebar region on the Pages template and the "content" field on "Home."
	* The call in the sidebar should use "sidebarTpl" to output all resources in the category "Articles"
	* The call in the content field on resource "Home" should use "blogTpl" to output all resources in the category Articles


##Iteration 5
Cleaning up

1. Add the "something dynamic" the client asked for. The only requirement is that you use a new [template variable](http://rtfm.modx.com/revolution/2.x/making-sites-with-modx/customizing-content/template-variables) to achieve this.
2. Make sure that the placeholder content you've used for the Articles is clear, and that the new "Articles" template looks and acts the way you want it to.

*Discussion topic: What information from an article is relevant to show on a standalone page that isn't relevant to show on the "Home" page where they're all collected? What new dynamic feature could be useful to the client, instead of just something for show? What makes a new template variable different from MODX's built-in page variables?*

## Iteration 6 - optional extra credit
Create an Access Policy for the user you create for the client, and limit them to only editing and updating resources. Then add the name of the user who created a blog post to the output of "blogTpl" and create at least one post with the client's user as the author.



<hr />
Copyright © 2013-2014 Alan Zimmerman & Nìm Wunnan <br />
Used by permission by Portland Code School