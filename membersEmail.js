$(document).ready(function() {

	$("#download").focuseout(function() {

		$("#download").filter(function() {
			var userEmail = $("#download").val();
			var enailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if(!emailReg.test(userEmail)) {
				alert("Please enter valid email");
			} else {
				alert("Thank you for your valid email");
			}

		});


	});



});

// Slideshow
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


