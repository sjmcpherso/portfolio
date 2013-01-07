/*

	Just add the class anchor at your <a> tag and it will slide, user with no javascript will 
	still go to destination with the normal html anchor

	*Requires jquery.easing.js for complex easing	
*/
		
$(document).ready(function() {
	anchor.init()
	
});

	$(window).scroll(function () {

	});

anchor = {

	init : function()  {
		$("nav a").click(function () {	
			$("nav li").removeClass("current");
			var li = $(this).closest("li");
			li.addClass("current");
			var destination = 0;
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			//$("a[href='" + filename + "']").addClass("sel"); 			
			console.log(filename);
			if(filename == "index.php" || filename == "/"){
				if (li.is(':not(:first-child)')) {
					var elementClick = $(this).attr("href");
					var goClick = elementClick.substring(elementClick.lastIndexOf('#'));
					destination = $(goClick).offset().top;
				}
				$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1000,"easeOutExpo", function(){});
				return false;
			}		  	
		})
	}
}