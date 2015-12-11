var site = {};

site.userInput = function() {
	site.username = $('#username').val();
	//var label = document.getElementById('labelTag');
	if(site.username.length == 0) {
		$('#errorTag').show();
		return false;
	}
	localStorage.setItem('username', site.username);
	$('#username').hide();
	return true;
}
//Function Change the Name Label to a "String" Message preparing the user for the test.
site.loadQuestions = function() {
	//var label = $('labelTag').val();
	var msg = "Hello, " + site.username + "!" + '<br />' + " Are You Ready To Find Your Your Spirit Animal?";
	$('#labelTag').html(msg);
	$('#submitButton').replaceWith("I'M READY!");
}

//Function that allows the username to be stored.
site.initialClick = function(e) {
	e.preventDefault();

	if(site.userInput()) {
		$('#submitButton').prop('id', 'startButton');
		site.loadQuestions();
		$('#startButton').on('click', site.startGame);
	}
}
//Function to take our user to the next page/to the Spirit Animal Test
site.startGame = function (e) {
	if (e.which === 1) e.preventDefault();
	window.location.href = "questions.html";
}
//Runs our event listener.
$(function() {
	$('#submitButton').on('click', site.initialClick);
})
