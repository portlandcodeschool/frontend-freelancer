##CMS management tool review
###Databases
* Review how to access and navigate phpMyadmin
	* Referencing the [MODX quickstart video](https://vimeo.com/68094979), show how to find phpMyadin through a popular hosting C-Panel such as GoDaddy 
	
			(AZ - let me know if you don't have access to any accounts like that.)
* Introduce Sequel Pro
* Show basic MySQL command line interaction
* Show the relationship between the DB configuration and the credentials for logging into each
* Review the idea of tables, columns, rows, and fields
* Show, in a very basic way, how SQL operates on these aspects of the database
* Explain, at a very high level, that the MODX API uses PHP to map the strucutre of the database to functions and variables (really objects) that you can use to build the page and do more complex, application-like things with the data. 

		(AZ - the idea will just be to introduce that there is something called the MODX API, which is PHP Code, and it serves as the connection between the things that become webpages -- ie index.php -- and the raw data in the database. It is what they see at work between the <?php  ?> tags if they open up index.php in SublimeText.)

###MODX structural exercise (45 - 60 min)
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

The students should assign themselves roles in this process and sit in the corresponding region of the room.

The students should lead the decisions on how to represent each of the pieces. We're going for a medium-grained level of detail here. They should represent the interaction of chunks, snippets, templates, and page/template variables. The real challenge should be in representing all the pieces in the right place and sequence. Once they have planned that out, it should be trivial for them to play-act the construction of a page.

Once they have done that once or twice, finish the exercise by introducing the idea of [template variables](http://rtfm.modx.com/revolution/2.x/making-sites-with-modx/customizing-content/template-variables). Template variables are just a way to create a new field and associate it with a template, which then gives any resource using that template access to the new field. Creating one will require demonstration of how to ask the database to make this new field and associate it with a template, and review the fact that databases need to store information about your content that doesn't ever make it to the user's eyes, just because they need to keep track of that content.
