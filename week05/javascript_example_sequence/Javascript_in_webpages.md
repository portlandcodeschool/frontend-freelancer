Portland Code School

Front End Freelancer Course


#Introduction to using JavaScript on a web page


##Background

In the class demonstration, we saw how to write a simple loop in JavaScript. Because the JavaScript was contained inside a script tag and the script tag was inside the body of the document, the JavaScript ran as soon as the browser loaded the page.

Because we used document.write () to output information from the JavaScript, the JavaScript completely replaced the page with a new document and wrote the output to that new document.

This simplified example rarely happens in practice.

We want to be able to change things or add things to a webpage using JavaScript without destroying the existing page.

We want to be able to start a JavaScript based on user input, not only when the page is loaded.



##Functions

One way of managing complexity is to put program code in a function. That way, you can *encapsulate* that behavior and give it a simple name. Then, you can do that behavior simply by calling that function. You don't have to repeat that code over and over in your program. 

[More info on functions](http://w3schools.com/js/js_functions.asp)

Here's an example of a loop:

````
document.write("<p>The script is starting...</p>");
	<script type="text/javascript">
			for (var i=0; i<10; i++) { 
				document.write("Times this loop has run: "+i+"<br />");
			}
			document.write("<p>The script is done.</p>");
	</script>
````

Here's an example of the loop inside a subroutine:
````
	<script type="text/javascript">
		function loop_and_display() {
			document.write("<p>The script is starting...</p>");
			for (var i=0; i<10; i++) { 
				document.write("Times this loop has run: "+i+"<br />");
			}
			document.write("<p>The script is done.</p>");
		}	
	</script>
````

Here are some rules of thumb for functions:

* The names of functions should be verb phrases
* Functions must be defined before they are used


## Calling a function using a button press.

Often, buttons are used within forms. The two types of buttons built in to all browsers are the *submit* button and the *cancel* button

Buttons can be placed on an HTML page all by themselves. Simply use the `<input type="button">` tag. We don't use the button to submit a form, we use the button to call a JavaScript subroutine. We do this using the “on click” attribute.

````
<input type="button" onclick="javascript_function_name()"> 
````

[Play with functions using the onclick attribute](http://w3schools.com/js/tryit.asp?filename=tryjs_events)


Here is an example of HTML that creates a button, labels it, and then calls the JavaScript function that we defined above whenever the user clicks on the button:

````
	<!-- This button starts the looping script  -->
	<input type="button" onclick="loop_and_display()" value="Run Script" />
````

When the user clicks the button, the browser calls the function and that loop will run.

## Replacing the contents of div container

Every document has a built-in function called `write()`. Here is the line of JavaScript that we have used in our examples:

````
document.write("Times this loop has run: "+i+"<br />");
````

Normally, this function replaces the entire contents of the document. It makes a new web page. But, you can be more specific than that and replace the contents of a single element on the webpage.

To do this, we need two pieces of the puzzle:

0. A way for JavaScript to find out the name of an element
0. A way for JavaScript to replace the HTML in that element with something new.

### How to find the name of an object

First, give the element an ID.

````
<div id="a_special_block_of_text">
  <p>Some text</p>
</div>
````

Second, use the *get element by ID* built-in function to get the ID of that element, and put the ID in a variable.

````
var element_to_be_changed = getElementById('a_special_block_of_text');
````

Then, you can use that variable, `element_to_be_changed`, to change that HTML element.

### How to change the HTML of an element.

Every element on the page has a property called `innerHTML()`. It allows your script to access whatever is inside that element.

[More info on innerHTML](http://www.w3schools.com/jsref/prop_html_innerhtml.asp)

The JavaScript statement that replaces the HTML for an element looks like this:

````
HTMLElementObject.innerHTML=text
````

So, now, let's put it all together.

Here's a <div> with some text:

````
	<div id="output_area">
		<p>This is the area where the text goes. This content appears before the script is run.</p>
	</div>
````

Here's the code that changes the html inside that div to something new.

````
	<script type="text/javascript">
		function put_new_html_in_a_div() {
			var the_new_html="<p>The new text.</p>";
			document.getElementById("output_area").innerHTML=the_new_html;
		}	
	</script>
````

<hr>
Copyright © 2014 Alan Zimmerman & Nìm Wunnan<br />
Used by permission by Portland Code School
