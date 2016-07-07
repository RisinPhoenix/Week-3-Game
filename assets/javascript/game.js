window.onload = function() {

	var alphabet = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
	var wins = 0;
	var losses = 0;
	var guessesRemain = 9;
	var guessesUsed = 0;




	game = function () {
		letter = alphabet[Math.floor(Math.random()*alphabet.length)];
		console.log(letter)}

	game ();

	win = function(){
			
			wins = wins + 1;

			document.getElementById("wins").innerHTML = ("Wins: " + wins);


		if (guessesRemain < 9) {

			guessesRemain = 9;

			document.getElementById("guessesRemain").innerHTML = ("Remaining Attemps: " + guessesRemain);
			}

		else {}

		}

	guessR = function(){

			guessesRemain = guessesRemain - 1;

			document.getElementById("guessesRemain").innerHTML = ("Remaining Attemps: " + guessesRemain);
		
			guessesUsed = guessesUsed + 1;

			document.getElementById("guessesUsed").innerHTML = ("Attemps Already Used: " + guessesUsed);
		

		if (guessesRemain < 1) {

			losses = losses + 1;

			document.getElementById("losses").innerHTML = ("Losses: " + losses);

			guessesRemain = 9;

			document.getElementById("guessesRemain").innerHTML = ("Remaining Attemps: " + guessesRemain);

			game ();
			}


		else {}
	
		}

	document.onkeyup = function(event)	{
		var guess = String.fromCharCode(event.keyCode).toUpperCase();

		if (guess == letter){
			win ();
			game ();
			}
		else{
			guessR ();
			}
		}
 }