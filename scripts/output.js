var site = {};

site.winningAnimal = '';

site.declareWinner = function () {
	var animalObjects = JSON.parse(localStorage.getItem('animals'));
	var highScore;
	var scores = [];
	for (var i = 0; i < animalObjects.length; i++) {
		scores.push(animalObjects[i].score);
	}

	highScore = Math.max.apply(null,scores);

	var winningAnimals = [];
	for (i = 0; i < animalObjects.length; i++) {
		if (animalObjects[i].score === highScore) {
			winningAnimals.push(animalObjects[i]);
		}
	}

	site.winningAnimal = winningAnimals[Math.floor(Math.random()*winningAnimals.length)];
}

site.output = function() {
	var msgOne = "Congratulations, " + localStorage.getItem('username') + '<br />' + "We've Found Your Spirit Animal "
                        + " the " + site.winningAnimal.animalName + '<br />' + '<img id="animalpic"src= ' +
                        site.winningAnimal.animalImage.toUpperCase() + ' />' + '<br />' ;
	$('#textMsg').append(msgOne);
	$('#animal-content').append(site.winningAnimal.animalInfo);
}

site.playAgain = function() {
	window.location.href = "index.html";
}

$(function() {
	site.declareWinner();
	site.output();
	$('#play-again').on('click', site.playAgain);
});
