
	function show_confirm()	{
		var result=confirm("Press a button and watch the output area...");
		var output_area_div=document.getElementById("output_area"); 
		var button;

		if (result==true) {
			button = "OK";
			output_area_div.style.background="#ddeedd"; 
		} else {
			output_area_div.style.background="#eedddd"; 
			button = "Cancel";
		}
		output_area_div.innerHTML="<p>You pressed  " + button +"!</p>";
		
		alert("You pressed " + button +"!");
	}

	function display_alert_and_window(textString) {
		var output_area_div=document.getElementById("output_area"); 	
		var output_html;

		output_html="<p><strong>You wrote: </strong>";
		output_html += '"' + textString + '"</p>'; // notice the quotes

		output_area_div.innerHTML=output_html; 
		output_area_div.style.background="#ddddee"; 
		
		alert (textString) ;
	}
