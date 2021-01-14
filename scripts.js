$(document).ready(function() {

                //jquery for instagram api
                //set up variables for instagram account
                var token = '3440039563.d56a1b9.358be37d97b942828ee2397726dd3279',
                    user_id = '3440039563',
                    num_photos = 10;

          //ajax to get images from instagram
          var token = 'IGQVJWSFBLLUl5Q3lLLV82V1BfSG0xNHpSb1UxaGR1UFEtVFBjRXJkdnRoQmxjenJmVXkxWHhSUkR5WWdKbGpuSjgtVVc0ZAVByMk9kVzVwbDBFWkRRX0F4cEp5R1dYd1NncTk1c1pB';
          
          $.ajax({
            url: 'https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption&access_token=' + token,
           	dataType: 'jsonp',
           	type: 'GET',

            //upload pictures acquired from instagram to specific tags in HTML
           	success: function(data){
              console.log(data);
              //$('div#instalinktest').append('<a href="'+data.data[0].media_url+'" target="_blank"><i class="fab fa-instagram fa-lg img-overlay-button"></i></a>');
              $('div#instalinktest').append('<a href="https://www.instagram.com/puffy_pants/" target="_blank"><i class="fab fa-instagram fa-lg img-overlay-button"></i></a>');

              for(var index = 0; index < 5; index++) {
                var instafeed_div = 'div#instafeed'+index;
                if (data.data[index].media_type == 'VIDEO') {
                  $(instafeed_div).append('<center><video autoplay loop muted><source src="'+data.data[index].media_url+'"></video></center>');
                }
                else {
                  $(instafeed_div).append('<img class="d-block img-fluid" src="'+data.data[index].media_url+'">');
                }
              }
           		//$('div#instafeed0').append('<img class="d-block img-fluid" src="'+data.data[0].media_url+'">');
              //$('div#instafeed1').append('<img class="d-block img-fluid"  src="'+data.data[1].media_url+'">');
              //$('div#instafeed2').append('<center><video autoplay loop muted><source src="'+data.data[2].media_url+'"></video></center>');
              //$('div#instafeed2').append('<img class="d-block img-fluid"  src="'+data.data[2].media_url+'">');
              //$('div#instafeed3').append('<img class="d-block img-fluid"  src="'+data.data[3].media_url+'">');
              //$('div#instafeed4').append('<img class="d-block img-fluid"  src="'+data.data[4].media_url+'">');
           	},

            //catch and handle errors
           	error: function(data){
           		//console.log(data);
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

$("project_card_content").click(function(){
  $("project_card_content").css("transform", "rotateY(180deg)");
})

function refreshToken(secret, long_access_token) {
  var url = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" + secret 
            + "&access_token=" + long_access_token;
  $.ajax({
    url: url,
    dataType: 'jsonp',
    type: 'GET',

    success: function(data) {
      console.log(data);
      return data.access_token;
    },
    error: function(data) {
      console.log(data);
      return null;
    }
  });
}

function flipProjectCard(container) {
  var content = '.' + container.firstElementChild.classList.item(0);
  if ( $(content).css("transform") == 'none') {
    $(content).css("transform", "rotateY(180deg)");
  } else {
    $(content).css("transform", "");
  }
}

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
  //var parent_element = btn.parentElement;
  var parent_element = btn;
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



