$(document).ready(function() {
    // run function on initial page load
	nameGuess();
});

function nameGuess() {
	var nameArray = ["Andrew","Ben", "Nick", "Jordan","Patrick","Andre","Zachary","Toeray","Adam","Gina","Kate","Josh","Marissa","Kasey","Matthew","Eric","Triss","June","Anthony" ];
	var randomNumber = Math.floor(Math.random() * nameArray.length);
	var stripped = nameArray[randomNumber].toLowerCase();
	console.log(nameArray[randomNumber]);
	console.log(stripped);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == nameArray[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}