*Portland Code School*
### Front End Freelancer Class
# Code Challenge 02 - More structure, More pages

In this exercise, you will take a template file and modify it to meet a clients specifications in several iterations.

The client specifications are given in a web design brief, included below, and some wireframes included in the "wireframes.pdf" file.


## Iterations

0. Template code, wireframes, and design brief walk-through
0. Create page structure by adding navigation and content elements
0. Create main page with client color palette and content
  0. Color palette
  0. Header div
  0. Navigation div
  0. Dummy articles
0. Create "About" page
0. Create "Contact" page with form
1. (Optional) Make the design responsive






# The template

The template file comes from the previous code challenge. If you have the results of the previous code challenge and want to continue to modify it, you can do so. If you want to start fresh, start with the template.

It has some code that you will find useful. It also has some HTML and CSS techniques that you will find useful.

It does not have a navigation panel. You will have to add this. You will also have to add a content div.

It's color palette is primarily shades of gray with some uncontrolled colors and some elements. You'll have to change these colors and get all the elements under control as part of the exercise.



# Web Design Brief

Our client today is a massage therapist. She wants a "brochure" site, a small, static site that highlights her philosophy, presents her business, and invites the visitor to make an appointment by contacting her through the web. 

The site will have a consistent look and feel by repeating the header, navigation panel, and filter elements on all pages.

Note: when we get to site generators and dynamic websites, we will show you how to automatically place headers on every page of the website. However, in this early exercise, just create the code when you design the main page and then duplicate the HTML code from page to page. Consider this editing practice. :-)


## Color Palette

The client wants a subtle color palette. She would prefer soothing, tranquil colors. Use one of the many design resources given to find a color palette and modify the CSS file to use the appropriate colors. We suggest a "triad" color scheme with a base color that references the colors in the logo image.

## Body text copy

The client does not have the body text copy ready yet. Show at least two articles on the front page and use the titles as shown in the wireframes. On the *About* page, use the title as shown in the wireframes. However, you should use *lorem ipsum* gibberish as body text. Use one of the generators listed at [this Mashable article](http://mashable.com/2013/07/11/lorem-ipsum/).

## The Container

The contents of the site are contained in a "container" div. The container div should float in the center of the page by using automatic margins in the CSS file. The container div should have the lightest background color of the site. 

Questions for discussion: Is a HTML5 [<section> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) appropriate for this container? 

The background of the page (everything outside the container div) should be either white, black, or the darkest color of the color palette. 

Notice that there are healthy margins around all of the divs inside the container. This provides whitespace among the content that opens up the design, lets it "breathe", and leads to a more engaging customer experience.

## The Header

The header should contain the site title in an h1 container, the site tagline in an an h2 container, and the logo. The logo should float to the right. The header should appear on every page. Use a HTML5 [<header> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) to define this section.

## The Navigation Panel

The navigation panel should be on the left-hand side of the page. It should contain three links, one to each of the pages in the site. If possible, the links should highlight with an underlying when the cursor hovers over them. It should also contain the headshot of the client. Use small rounded corners and a subtle but distinct background color taken from the color palette to separate it from the main container. Use a HTML5 [<nav> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) for this panel.

## The Content Panel.

The main content of each page is in the right-hand side of the page. The proportions of the navigation panel to the main content panel should be close to the [golden ratio](http://en.wikipedia.org/wiki/Golden_ratio). 

Questions for discussion: Is a HTML5 [<section> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) appropriate for this panel? Should a [HTML5 <article>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element be used for each blog article? Or are <div> elements more appropriate?

## The Form

You can use the form code from the template in the client site. It connects to a simple app that just echoes the form contents so that you can check that the form works. We won't be discussing how forms work in this class. So, it doesn't matter if the form itself works or not. Just make sure it looks the way the client wants.

## The Footer

Use a HTML5 [<footer> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) to define this section.

Put the copyright notice in the footer. Use the "C in a circle" copyright mark. Use a [named character reference](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction#Named_character_references) to create the copyright symbol.

Make sure that you provide attribution on the photos. You can do this in the footer of the page. Make the text small and use a unobtrusive color. Each attribution should link back to the original location. Note: all of these images are used through a Creative Commons commercial license.

For the headshot, the photographer is "Pat David" and the link is
http://www.flickr.com/photos/39707801@N00/10214643804

For the logo the photographer is "The Tedster" and the link is
http://www.flickr.com/photos/14648291@N04/8353617707/


# Detailed instructions

##Iteration 1

Part A.

1. Copy the code_challenge_02 folder from your cloned frontend_freelancer repository to a new folder of your choosing that is not in a repository. 
2. Make the new folder a repository and do an initial commit.
3. Make a new repo on github.com, connect it to your local repo as a remote, and push the initial commit up there. Note: This is backward from the last time. Then we asked you to create the first repo on github and then clone it locally. 
2. Examine the CSS template.css file. 
3. Look for CSS rules that control color
4. Look for color definitions
5. Copy template.html to your own HTML file for the main page
6. Copy template.css to your own CSS file.
7. Fix the link tag in the HTML file to point to the renamed CSS file.
8. Choose a new color palette 
9. Substitute the new colors in your CSS file.



##Iteration 2

In this iteration, we add a nav panel, use "floats" to put the nav panel and the content panel side by side, and start transitioning towards a flexible, responisve layout.

Part A. HTML

1. Convert the header and footer divs into appropriate HTML5 elements.
2. Create a div after the "header" and before the "footer" that contains all the articles. Assign it a class="main". 
2. Create a div *inside* the "main" div that contains all the articles. Assign it a class="articles".
3. Create a <nav> element *inside* the "main" div but *before* the "articles" div. 
4. Put a non-breaking space in the <nav> (\&nbsp;) OR as set of one-sentence paragraphs OR an unordered list (ul) of one-sentence list items (li). This will be come our site menu.

Part B. CSS

7. Change the "article_heading" div to be 80% so that it flexes inside the new containing divs
0. Add a "clear:both" rule to both the header and footer so the floats don't apply to them.
5. Make the "nav" element 30% wide and float it to the left using the appropriate CSS rules (look them up: "width", "min-width", "max-width" and "float").
6. Make the "articles" div 70% wide float it to the left also, so that it snugs up against the "nav" element.
7. Make sure there's lots of negative space between the nav panel and the main content panel.

While you are playing with your new divs, keep this in mind:

* You can set the background color to your divs as you work so they are easier to see

* Use Chrome Developer Tools to adjust the properties until you like them, then edit the CSS files with the resulting values.


* As you add margin and padding, be aware of how that changes the width of your side-by-side div containers. What technique did we show you in class to handle this situation?

##Iteration 3

In this iteration, we do the header & footer.

1. Change the H1 entry to match the design brief/wireframes. Style the H1 (and only the H1 inside the header div) to fit with the site color pallette. [See SEO note, below.]
2. Create the site tag line using your choice of tags and styling
3. Put in an image tag (img) for the logo, float it right. Look at the badges to understand how to do this.
4. Remove the badges
5. Move the contact link to the footer
0. Change the page title (in the "title" container in the "head" of the page) to match the H1 contents.
0. Make sure the header div behaves well when you squish and stretch your browser. (What does this mean? We'll discuss.)

The footer is similar. Make sure it flexes and contains all the information specified above.

### SEO note

Google and other robot spiders expect one and only one H1 on each page that "tells the story" for that page. They pay special attention to contents, and thus the meaning of the page. Give that, using an H1 for the company name makes sense on this page. However, does it make sense on any other page of the site? Probably not. In which case, how would you change the header so that it looks the same but doesn't use an H1 container? What would the H1 on the main page be?

##Iteration 4

1. Make the other two pages. (Simple, huh?)  
2. Modify the nav panel on the main page to include links to the other pages.
3. Have the links on the other pages link back to the main page.
4. Copy the header and footer to the new pages.

## Iteration 5 - optional extra credit
Use a media query to make the following modifications when the screen width is less than 600 pixels.

1. The logo image should be smaller and in line with the header information.
1. The nav panel should be smaller and in line after the header
2. The headshot should disappear



<hr />
Copyright © 2013-2014 Alan Zimmerman & Nìm Wunnan <br />
Used by permission by Portland Code School