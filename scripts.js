$(document).ready(function() {

                //jquery for instagram api
                //set up variables for instagram account
                var token = '3440039563.d56a1b9.358be37d97b942828ee2397726dd3279',
                    user_id = '3440039563',
                    num_photos = 10;

          //ajax to get images from instagram
           $.ajax({
           	url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3440039563.d56a1b9.358be37d97b942828ee2397726dd3279',
           	dataType: 'jsonp',
           	type: 'GET',
           	data: {access_token: token, count: num_photos},

            //upload pictures acquired from instagram to specific tags in HTML
            //<a href="https://puffypants.artstation.com/" target="_blank">
           	success: function(data){
              $('div#instalinktest').append('<a href="'+data.data[0].link+'" target="_blank"><i class="fab fa-instagram fa-lg img-overlay-button"></i></a>');
           		$('div#instafeed0').append('<img class="d-block img-fluid" src="'+data.data[0].images.standard_resolution.url+'">');
              $('div#instafeed1').append('<img class="d-block img-fluid" img src="'+data.data[1].images.standard_resolution.url+'">');
              $('div#instafeed2').append('<img class="d-block img-fluid" img src="'+data.data[2].images.standard_resolution.url+'">');
              $('div#instafeed3').append('<img class="d-block img-fluid" img src="'+data.data[3].images.standard_resolution.url+'">');
              $('div#instafeed4').append('<img class="d-block img-fluid" img src="'+data.data[4].images.standard_resolution.url+'">');
           	},

            //catch and handle errors
           	error: function(data){
           		console.log(data);
               }
           });
  });

/*
 * Function to change style of navigation button when menu is showing
 * Function uses bootstrap drop down menu
 * Change *toggle_pressed* class in css to change style of button when toggled
 */
$( function() {
  $("#dropdownbtn").on('show.bs.dropdown', function() {
    document.getElementById('toggled_button').classList.add("toggle_pressed");
  });
});

/*
 * Function to change style of navigation button back to original when menu is closed
 * Function uses bootstrap drop down menu
 */
$( function() {
  $("#dropdownbtn").on('hide.bs.dropdown', function() {
    document.getElementById('toggled_button').classList.remove("toggle_pressed");
  });
});

//testing click function; REMOVE LATER
  $(document).on('click', function() {
    console.log(2);
  });

/*
 * Function to slide display section to show display text (currently specifically for technical projects section)
 * Parameters: *this* element - btn and String ID of corresponding text section
 * toggles and untoggles upon click
 */
function displaySlideButtonPress(btn, text_section_id){
  console.log("button pressed!");
  console.log(btn.innerHTML);
  console.log(text_section_id);
  var text_section_element = document.getElementById(text_section_id);
  var parent_element = btn.parentElement;
  var button_HTML_slided = '<i class="fas fa-angle-right fa-lg"></i>';
  var button_HTML_unslided = '<i class="fas fa-angle-left fa-lg"></i>';

  parent_element.classList.toggle("display_section_img_slided");
  text_section_element.classList.toggle("display_section_img_text_slided");

  /*if toggled/slided; then remove toggle/slided class and change side of arrow*/
  if (parent_element.classList.contains("display_section_img_slided") || text_section_element.classList.contains("display_section_img_text_slided")) {
    //swapped to toggle; remove later
    //parent_element.classList.remove("display_section_img_slided");
    //text_section_element.classList.remove("display_section_img_text_slided");
    //btn.innerHTML = button_HTML_unslided;
    btn.innerHTML = button_HTML_slided;
  }
  /*if not toggled/slided; then add toggle/slided class and change side of arrow*/
  else {
    //swapped to toggle; remove later
    //parent_element.classList.add("display_section_img_slided");
    //text_section_element.classList.add("display_section_img_text_slided");
    //btn.innerHTML = button_HTML_slided;
    btn.innerHTML = button_HTML_unslided;
  }
}

/*
 * Function for mousing over github button.
 * Changes from *current_innerHTML* to github logo. Github logo can be changed by altering *new_innerHTML*
 * Function is currently called within HTML
 */
function githubMouseOver(){
  var button_message = document.getElementById("github_button");
  var current_innerHTML = button_message.innerHTML;
  var new_innerHTML = '<i class="fab fa-github"></i>';

  //object should not be null
  if (button_message != null){
    button_message.innerHTML = document.getElementById("github_button").innerHTML.replace(current_innerHTML, new_innerHTML);
  }
}

/*
 * Function for mousing out of github button.
 * Changes from *current_innerHTML* to text. Text can be changed by altering *new_innerHTML*
 * Function is currently called within HTML
 */
function githubMouseOut(){
  var button_message = document.getElementById("github_button")
  var current_innerHTML = button_message.innerHTML;
  var new_innerHTML = 'See my Github';

  //object should not be null
  if (button_message != null){
    button_message.innerHTML = document.getElementById("github_button").innerHTML.replace(current_innerHTML, new_innerHTML);
  }
}



/////////////////////////////////////////////////////////////////////////////////////
//additional unused functions from source
/*
$( function() {
  $( ".draggable" ).draggable({
    //axis:"x" //move along horizontally
    snap: true //snaps to other draggable objects
  });
});

//premade functions

//$( "#accordion" ).accordion();



var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});



$( "#button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});



$( "#radioset" ).buttonset();



$( "#controlgroup" ).controlgroup();



$( "#tabs" ).tabs();



$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});



$( "#datepicker" ).datepicker({
	inline: true
});



$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});



$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
*/
