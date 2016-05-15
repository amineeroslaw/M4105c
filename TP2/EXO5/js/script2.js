	$(document).ready(function(){

		$("burger").click(function(e) {
			e.stopPropagation();
				alert("Hello! I am an alert box!!");
			if($("#humburger").hasClass("inactive")) {
				
				$("#humburger").removeClass("inactive");
				$("#humburger").addClass("active");
			}
			else if($("#humburger").hasClass("active")){
				$("#humburger").removeClass("active");
				$("#humburger").addClass("inactive");
			}
		});

		$("html").click(function(e) {
			if($("#humburger").hasClass("active")){
				$("#humburger").removeClass("active");
				$("#humburger").addClass("inactive");
			}			
		});

	});