*Portland Code School*
### Front End Freelancer Class
# Code Challenge 02 - More structure, More pages

In this exercise, you will take a template file and modify it to meet a client's specifications in several iterations.

A web design brief with the client's specs is included below.

Wireframes are in the "wireframes.pdf" file.


##Iterations

1. Template code, wireframes, and design brief walk-through
2. Create page structure by adding navigation and content elements
3. Create main page with client color palette and content
  	* Header and footer divs
  	* Navigation div
  	* Dummy articles
4. Create "About"" and ""Contact" page with form
5. (Optional) Make the design responsive
 
##The Template

The template file comes from the previous code challenge. If want to continue to modify your previous results, do so. You may also start fresh using the same template.

You will find some of the existing code and HTML / CSS techniques useful.

No navigation panel is included. You will have to add this. You will also have to add a content div.

The color palette is primarily shades of gray with some uncontrolled elements. You'll have to change these colors and get all the elements under control as part of the exercise.

***

#Web Design Brief

Our client today is a massage therapist. She wants a "brochure" site -- a small, static site that highlights her philosophy, presents her business, and invites the visitor to make an appointment by contacting her through the web. 

You'll give the site a consistent look and feel by repeating the header, navigation panel, and filter elements on all pages.

**Note:** When we get to site generators and dynamic websites, we will show you how to automatically place headers on every page of the website. However, in this early exercise, just create the HTML code when you design the main page and then duplicate it for the other pages. Consider this editing practice. :-)


##Color Palette

The client wants a subtle color palette. She would prefer soothing, tranquil colors. Use one of the many design resources given to find a color palette and modify the CSS file to reflect your changes. We suggest a "triad" color scheme with a base color that references the colors in the logo image.

##Body Text Copy

The client does not have the body text copy ready yet. Show at least two articles on the front page and use all the titles shown in the wireframes. Use *lorem ipsum* gibberish as body text. You can find a generator at [this Mashable article](http://mashable.com/2013/07/11/lorem-ipsum/).

##The Container

The contents of the site go in a `<container>` div. The container should float in the center of the page by using automatic margins in the CSS file, and should have the lightest background color of the site. 

**Question for discussion:**

* *Is an HTML5 [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element appropriate for this container?*

The background of the page (everything outside the container div) should be either white, black, or the darkest color of the color palette. 

Notice that there are healthy margins around all of the divs inside the container. This provides whitespace among the content that opens up the design, lets it "breathe", and leads to a more engaging customer experience.

##The Header

The header should contain the site title in an h1 container, the site tagline in an an h2 container, and the logo. The logo should float to the right. The header should appear on every page. Use an HTML5 [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) element to define this section.

##The Navigation Panel

The navigation panel should be on the left-hand side of the page. It should contain three links, one to each page in the site. The links should highlight when the cursor hovers over them. It should also contain the client's headshot. Use small rounded corners and a subtle but distinct background color taken from the color palette to separate it from the main container. Use an HTML5 [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) element for this panel.

##The Content Panel

The main content of each page is in the right-hand side of the page. The proportions of the navigation panel to the main content panel should be close to the [golden ratio](http://en.wikipedia.org/wiki/Golden_ratio). 

**Questions for discussion:**

*	*Is an HTML5 [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element appropriate for this panel?*

*	*Should an [HTML5 `<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element be used for each blog article?*

*	*Or are `<div>` elements more appropriate?*

##The Form

You can use the form code from the template in the client site. It connects to a simple app that just echoes the form contents so that you can check that the form works. We won't be discussing how forms work in this class, so it doesn't matter if the form itself works or not!Just make sure it looks the way the client wants.

##The Footer

Use an HTML5 [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) element to define this section.

Put the copyright notice in the footer. Use the "C in a circle" copyright mark. Use a [named character reference](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction#Named_character_references) to create the copyright symbol.

Make sure that you provide attribution on the photos. You can do this in the footer of the page. Make the text small and use a unobtrusive color. Each attribution should link back to the original location.

**Note:** all of these images are used through a Creative Commons commercial license.

For the headshot, the photographer is "Pat David" and the link is:
[http://www.flickr.com/photos/39707801@N00/10214643804](http://www.flickr.com/photos/39707801@N00/10214643804)

For the logo the photographer is "The Tedster" and the link is:
[http://www.flickr.com/photos/14648291@N04/8353617707/](http://www.flickr.com/photos/39707801@N00/10214643804)


#Detailed instructions

##Iteration 1

1. Copy the code_challenge_02 folder from your cloned frontend_freelancer repo to a new folder of your choosing that is not in a repository. 
2. Make the new folder a repository and do an initial commit.
3. Make a new repo on github.com, connect it to your local repo as a remote, and push the initial commit up there. **Note:** This is backward from Code Challenge #1. There, we asked you to create the first repo on github and *then* clone it locally.
2. Examine the CSS template.css file.
3. Look for CSS rules that control color.
4. Look for color definitions.
5. Copy template.html to your own HTML file for the main page.
6. Copy template.css to your own CSS file.
7. Fix the link tag in the HTML file to point to the renamed CSS file.
8. Choose a new color palette.
9. Substitute the new colors in your CSS file.


##Iteration 2

In this iteration, we add a nav panel, use "floats" to put the nav panel and the content panel side by side, and start transitioning towards a flexible, responisve layout.

#####HTML

1. Convert `<header>` and `<footer>` into appropriate HTML5 elements.
2. Create a div after the "header" and before the "footer" that contains all the articles. Assign it a class="main". 
2. Create a div *inside* `<main>` div that contains all the articles. Assign it a class="articles".
3. Create a `<nav>` element *inside* the `<main>` div but *before* the `<articles>` div. 
4. Put a non-breaking space in the `<nav>` __OR__ make a set of one-sentence paragraphs `<p>` __OR__ create an unordered list `<ul>` of one-sentence list items `<li>`. This will become our site menu.

#####CSS

7. Change the `<article_heading>` div to be 80% so that it flexes inside the new containing divs
0. Add a "clear:both" rule to both the header and footer so the floats don't apply to them.
5. Make `<nav>` 30% wide and float it to the left using the appropriate CSS rules (look them up: "width", "min-width", "max-width" and "float").
6. Make `<articles>` 70% wide. Float it to the left also, so it snugs up against `<nav>`.
7. Make sure there's lots of negative space between the nav panel and the main content panel.

While you are playing with your new divs, keep this in mind:

* You can set the background color to your divs as you work so they are easier to see

* Use Chrome Developer Tools to adjust the properties until you like them, then edit the CSS files with the resulting values.

* As you add margin and padding, be aware of how that changes the width of your side-by-side div containers.

**Question for discussion:**

*What technique did we show you in class to handle this situation?*

##Iteration 3

Here we create the header & footer.

1. Change the `<h1>` entry to match the design brief/wireframes. Style the h1 (and only the h1 inside `<header>`) to fit with the site color palette. [See SEO note, below.]
2. Create the site tag line using your choice of tags and styling
3. Put in an image tag `<img>` for the logo, float it right. Look at the badges to understand how to do this.
4. Remove the badges
5. Move the contact link to the footer
6. Change the page title (in the "title" container in the "head" of the page) to match the h1 contents.
7. Make sure `<header>`  behaves well when you squish and stretch your browser. *(What does this mean? We'll discuss.)*

The footer is similar. Make sure it flexes and contains all the information specified above.

#####SEO note

Google and other robot spiders expect one -- and *only one* -- h1 on each page that "tells the story" for that page. They pay special attention to contents, and thus meaning. Given that using an h1 for the company name makes sense on this page. However, does it make sense on any other page of the site? Probably not.

**Therefore:**

*How would you change the header so that it looks the same but doesn't use an h1 container?*

*What would the h1 on the main page be?*

##Iteration 4

1. Create the other two pages. (Simple, huh?)  
2. Modify the nav panel on the main page to include links to the other pages.
3. Make the links on the other pages link back to the main page.
4. Copy the header and footer to the new pages.

## Iteration 5 - optional extra credit
Use a media query to make the following modifications when the screen width is less than 600 pixels.

1. The logo image should be smaller and in line with the header information.
1. The nav panel should be smaller and in line after the header.
2. The headshot should disappear.



<hr />
Copyright © 2013-2014 Alan Zimmerman & Nìm Wunnan <br />
Used by permission by Portland Code School