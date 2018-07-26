$(document).ready(function{

	$("#emailStuff").focuseout(function() {

		$("#emailStuff").filter(function() {
			var userEmail = $("#emailStuff").val();
			var enailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if(!emailReg.test(userEmail)) {
				alert("Please enter valid email");
			} else {
				alert("Thank you for your valid email");
			}

		});


	});



});


