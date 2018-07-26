$(document).ready(function() {

	$("#signUp").click(function() {

		$("#signUp").filter(function() {
			var userEmail = $("#emailInput").val();
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,255})?$/;

			if(!emailReg.test(userEmail)) {
				alert("Please enter valid email");
			} else if(emailReg.test(userEmail)) {
				alert("Thank you for your valid email");
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


