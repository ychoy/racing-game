// sanity check
console.log("App.js is connected!");

$(document).ready(function() {
	var enterprise = {
		top: $("#enterprise").animate().top,
		left: $("#enterprise").animate().left,
		keyCode: 39

	}

	var warbird = {
		top: $("#warbird").animate().top,
		left: $("#warbird").animate().left,
		keyCode: 68
	}

	$(document).keydown(function move(e) {
			if (e.keyCode == enterprise.keyCode) {
				$("#enterprise").animate({top: enterprise.top, left: enterprise.left += 25}, 0);

			}
			if(e.keyCode == warbird.keyCode) {
				$("#warbird").animate({top: warbird.top, left: warbird.left +=25}, 0);
			}

		 if (enterprise.left >= 800 && warbird.left >= 800) {
				$(".status").text("You tied!");
				setTimeout(startNewGame, 100)  // Return the starshis to start
			} else if (warbird.left >= 800) {
				$("status").text("The Romulans won the race to the final frontier.");
				setTimeout(startNewGame, 100) // Return the starship to start
			} else if (enterprise.left >= 800) {
				$(".status").text("The Federation won the race to the final frontier.");
				setTimeout(startNewGame, 100) // Return the starship to start
	    }
  })

	$("button").click(startNewGame);

	function startNewGame() {
		$("#enterprise").animate({top: 20, left: -10}); // Move the starship to the starting position (left)
		enterprise.top = 25;  // simulate launch
		enterprise.left = 0;
		$("#warbird").animate({top: 10, left: -10}) // Move the starship to the starting position (left)
		enterprise.top = 10;  // simulate launch
		warbird.top = 25; // simulate launch
		warbird.left = 0;
	}


})
