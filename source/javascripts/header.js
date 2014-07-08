$(document).ready(function(){
	var navLinks =  document.querySelectorAll("nav a");
	for ( var i = 0; i < navLinks.length; i++){
		navLinks[i].addEventListener("mouseover", function() {
			document.querySelector(".dropdown-browse-jobs").style.display = "block";
		});
	}

	document.querySelector(".dropdown-browse-jobs").addEventListener('mouseleave', function(){
		var area=this;
		var delay=setTimeout(function(){document.querySelector(".dropdown-browse-jobs").style.display = "none"},200);
		area.addEventListener('mouseover', function(){clearTimeout(delay)});
	});

})
 $(".search-field-trigger").focus(function(){
   $(this).closest("div").addClass("expander");
  }).blur(function(){
       $(this).closest("div").removeClass("expander");
  })
  