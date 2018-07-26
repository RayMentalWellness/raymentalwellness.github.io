$(document).ready(function() {

	$("#signUp").click(function() {
		$("#emailInput").filter(function() {
			var userEmail = $("#emailInput").val();
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,255})?$/;

			if(!emailReg.test(userEmail)) {
				alert("Please enter valid email");

			} else if(emailReg.test(userEmail)) {
				emailjs.init("user_t9dhzdnq135YXSGrhqJWe");
			      var service_id = 'gmail';
			      var template_id = 'template_jNAnYR13';
			      var template_params = {
				      to_name: 'Albert',
				      reply_email: $("#emailInput").val(),
				      message: 'It works!'
			  		} 
		  		emailjs.send(service_id,template_id,template_params);
				alert("Thank you for your valid email");
				$("#emailInput").val("");
				$("#download").hide();


			} else {
				alert("you should enter an email");
			}


		});


	});
});


// Slideshow Go
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


