$(document).ready(function() {
                //$('#pagepiling').pagepiling();

                /*jquery for instagram api*/

                var token = '3440039563.d56a1b9.358be37d97b942828ee2397726dd3279',
                    user_id = '3440039563',
                    num_photos = 10;

           $.ajax({

           	url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3440039563.d56a1b9.358be37d97b942828ee2397726dd3279',
           	dataType: 'jsonp',
           	type: 'GET',
           	data: {access_token: token, count: num_photos},
           	success: function(data){
               $("p").append("test");
            		console.log(data);
           		//for( x in data.data ){
           			$('div#instafeed0').append('<img class="d-block img-fluid" src="'+data.data[0].images.standard_resolution.url+'">'); // data.data[x].images.low_resolution.url - URL of image, 306х306
                //$('div#instafeed1').append('<img class="d-block img-fluid" img src="'+data.data[1].images.standard_resolution.url+'">');
                $('div#instafeed2').append('<img class="d-block img-fluid" img src="'+data.data[5].images.standard_resolution.url+'">');
                $('div#instafeed3').append('<img class="d-block img-fluid" img src="'+data.data[6].images.standard_resolution.url+'">');
           		//}
           	},
           	error: function(data){
           		console.log(data);
               }
           });

            });




$( function() {
  $( ".draggable" ).draggable({
    //axis:"x" //move along horizontally
    snap: true //snaps to other draggable objects
  });
});

//premade functions

$( "#accordion" ).accordion();



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
