$("document").ready(function(){
	
	$(".box").hover( // Show/hide the status box when a user mouses over a box.
		function() { $("#status").css('visibility', 'visible'); },
		function() { $("#status").css('visibility', 'hidden'); }
	);

	$(".box").click(function() {
		if ($("#toggle-sync").prop("checked")) { // see whether the checkbox is checked or not
			toggleBoxes();
		} else {
			toggleBox($(this));
		}
	});

	function toggleBoxes() {
		$(".box").toggleClass("red").toggleClass("green");

		$("div .red").text("I am a red box.");
		$("div .green").text("I am a green box.");

		return true;
	}

	function toggleBox(elem) {
		elem.toggleClass("red").toggleClass("green"); 

		if (elem.hasClass("red")) {
			elem.text("I am a red box");
		} else {
			elem.text("I am a green box");
		}

		return true;
	}
});