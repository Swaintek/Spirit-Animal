//variable to store our username.
var username = "";
//Function that allows the username to be stored.
var initialClick = function(e) {
	e.preventDefault();
	var userInput = function() {
		username = document.getElementById('username').value;
		//Adding Local Storage of Username.
		localStorage.setItem('username', username);
		document.getElementById('username').style.visibility = 'hidden';
	}
//Function Change the Name Label to a "String" Message preparing the user for the test. 
	var loadQuestions = function() {
	  var label = document.getElementById('labelTag');
	  var msg = "Hello, " + username + "!" + '<br />' + " Are You Ready To Find Your Your Spirit Animal?";
	  label.innerHTML = msg;
	  var submitButton = document.getElementById('submitButton');
	  submitButton.textContent = "IM READY!";
	}
//Calling our functions inside out initialClick function.
	userInput();
	loadQuestions();
//Removes the submit button function once its clicked, the reinstalls it's functionalty. 
	submitButton.removeEventListener('click', initialClick, false);
	submitButton.addEventListener(('click' || keyCode == 13), startGame);
}
//Function to take our user to the next page/to the Spirit Animal Test 
var startGame = function (e) {
	e.preventDefault();
  window.location.href = "questions.html";
}
//Runs our event listener.
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener(('click' || keyCode == 13), initialClick);




