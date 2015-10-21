var winningAnimal;

var declareWinner = function () {
	var animalObjects = JSON.parse(localStorage.getItem('animals'));
	var highScore;
	var scores = [];
	for (var i = 0; i < animalObjects.length; i++) {
		scores.push(animalObjects[i].score);
	};
	console.log(scores);
	highScore = Math.max.apply(null,scores);
	console.log(highScore);
	var winningAnimals = [];
	for (var i = 0; i < animalObjects.length; i++) {
		if (animalObjects[i].score === highScore) {
			winningAnimals.push(animalObjects[i]);
		}
	};
	console.log(winningAnimals);
	winningAnimal = winningAnimals[Math.floor(Math.random()*winningAnimals.length)];
}

declareWinner();

var song = winningAnimal.animalSong
var output = function() {
	var hOne = document.getElementById('textMsg');
	var article = document.getElementById('animal-content');
	var msgOne = "Congratulations, " + localStorage.getItem('username') + '<br />' + '<img src= ' + 
						winningAnimal.animalImage + ' />' + '<br />' + "We've Found Your Spirit Animal " 
						+ " The " + '<q>' + winningAnimal.animalName.toUpperCase() + '</q>';
	hOne.innerHTML = msgOne;
	var msgTwo = winningAnimal.animalInfo;
	article.innerHTML = msgTwo;
  var audio = document.getElementById('audio');
  var source = document.getElementById('mp3Source');
  source.src=song

  audio.load();
  audio.play();
}

output();

var playAgain = function() {
	 window.location.href = "index.html";
}

var again = document.getElementById('play-again');
again.addEventListener('click', playAgain);
