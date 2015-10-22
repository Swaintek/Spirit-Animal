var Animal = function (animalName, animalImage, strong, wise, resourceful, cunning, noble, loyal, loner, smallgroup, 
	largegroup, water, land, air, arctic, forest, river, animalInfo) {
	this.animalName = animalName;
	this.animalImage = animalImage;
	this.strong = strong;
	this.wise = wise;
	this.resourceful = resourceful;
	this.cunning = cunning;
	this.noble = noble;
	this.loyal = loyal;
	this.loner = loner;
	this.smallgroup = smallgroup;
	this.largegroup = largegroup;
	this.water = water;
	this.land = land;
	this.air = air;
	this.arctic = arctic;
	this.forest = forest;
	this.river = river;
	this.animalInfo = animalInfo;
	this.score = 0
};

var animalData = [
	['wolf', 'img/wolf.jpg', true, false, true, true, false, false, false, true, false, false, true, false, true, false, 
	 'Just like the Wolf, you are intuitive, strong, cunning and resourceful. You crave freedom and independence. You have very strong relationships with just a few and are fiercely loyal to them.'],
	['eagle', 'img/eagle.jpg', true, true, true, false, false, false, true, false, false, false, true, false, false, false,
	 'Just like the Eagle. you are strong, wise and resourceful. You have great balance and decision-making skills. You have strong primary relationships and are able to maintain them in times of physical distance, which is good because you like to walk this life alone.'],
	['penguin', 'img/penguin,jpg', false, false, true, false, true, true, false, false, true, true, false, true, false, false,
	 'Just like the Penguin, you are resourceful, loyal and noble. You are a social creature by nature and enjoy people and playtime. You believe in harmony and are committed to teamwork.'],
	['bear', 'img/bear.jpg', true, true, false, true, false, false, true, false, false, false, true, false, true, false,
	 'Just like the Bear, you are strong, wise and cunning. You are not afraid to exhibit strength when you need to protect your loved ones or property. You are a confident person and enjoy your alone time. This helps facilitate your natural curiosity of life.'],
	['squirrel', 'img/squirrel.jpg', false, true, true, true, false, false, false, true, false, false, true, false, true, false,
	 'Just like the Squirrel, you are wise, resourceful  and cunning. You have a tenacious way of attacking any problems. You are playful, assertive and family-oriented. You enjoy small groups with lots of activity.'],
	['salmon', 'img/salmon.jpg', true, false, true, false, true, false, false, false, true, true, false, false, false, true,
	 'Just like the Salmon, you are strong, resourceful and noble. You are tireless in your pursuit of what you want and great at overcoming obstacles. You enjoy large groups and crowds and feed off the energy and knowledge of others.']
];

var animalObjects = [];

var questionNumber = 0;

var questions = ["After dining at your favorite restaurant, you notice someone at the table next to you leaves their wallet behind. You...", 
				 "When parallel parking at your work parking garage, you accidentally knock the 200lb garbage receptacle over. You...",
		 		 "Your favorite band is playing at the Gorge in George. You...", 
		 		 "You attend the wedding of a friend in Hawaii. You spend most of your time...", 
		 		 "You win an awesome prize at work… a paid vacation! Your destination of choice is...",
		 		 "You enter a clothing store and immediately find a shirt that you love. As you approach the counter, you notice that there isn't a sales person in sight. You...",
		 		 "The bathroom sink at home springs a leak. You...",
		 		 "You are invited to a small dinner party at your best friend's house. You... ",
		 		 "Your colleague wants to schedule an office 'exercise outing'. You suggest...",
		 		 "A good friend is planning his honeymoon and is asking for your advice. You suggest..."];

var a1Text = 	['<label for="A1">Run after them in hopes of returning their wallet.', 
				'<label for="A1">Spend the next ten minutes lifting the receptacle upright and cleaning up all of the garbage that has fallen out.', 
				'<label for="A1">Read more about the venue, but ultimately do not buy tickets. You will see them when they come next month to a smaller venue.',
				'<label for="A1">Swimming, snorkeling and surfing. You love the ocean.',
				'<label for="A1">A glacier tour of Iceland.',
				'<label for="A1">Leave the exact payment amount, including sales tax, on the counter with a note.',
				'<label for="A1">Call a plumber. With your level of expertise, this could go from bad to worse.',
				'<label for="A1">Make an excuse why you cannot attend and stay home to watch Netflix alone. Being trapped in small talk is not your thing.',
				'<label for="A1">A day hike along the Burke-Gilman Trail. The best part of the PNW.',
				'<label for="A1">A sight-seeing river cruise in Brazil.'];

var a2Text = 	['<label for="A2">You look up their name and address in Google in hopes of contacting them directly.',
				'<label for="A2">You immediately go find another parking spot on the other side of the garage. The security cameras in the garage are broken; no one will know it was you.',
				'<label for="A2">Will not even consider buying tickets. You do not like live shows and will buy the concert dvd.',
				'<label for="A2">Relaxing on the beach and sightseeing. Sun and sand is your vacation m.o.',
				'<label for="A2">White river rafting in the Columbia River.',
				'<label for="A2">Check the back area and out front to make sure the salesperson is not in any trouble. Then you alert the business next door that the clothing store has been left unattended.',
				'<label for="A2">Google a quick solution while you call the landlord. This should be there problem to fix, but you do not want it to get worse +1 resourceful.',
				'<label for="A2">Send a raincheck and head to the nearest sports bar; intimate dinners where you know everyone are boring to you.',
				'<label for="A2">A school of acrobatics and trapeze arts. Teambuilding and hangtime',
				'<label for="A2">Backpacking through indigenous ruins in Mexico.'];

var a3Text = 	['<label for="A3">Immediately give the wallet to the restaurant manager.',
				'<label for="A3">Walk downstairs to alert maintenance of the accident. You will not risk injuring yourself picking this up alone.',
				'<label for="A3">Buy tickets for you and all of your friends!',
				'<label for="A3">Skydiving! You are an adrenaline junkie who loves to fly.',
				'<label for="A3">A camping trip through Yellowstone.',
				'<label for="A3">Tuck the shirt in your bag and ease out of the front door.',
				'<label for="A3">Grab your tools from the basement and start to fix the leak. What is the worst that can happen?',
				'<label for="A3">Confirm your RSVP and let them know what dish you are bringing.',
				'<label for="A2">Kayaking in the Puget Sound. There is nothing better!',
				'<label for="A3">A five-star resort trip to the Swiss Alps.'];


var Answer = function (id, type, attr) {
	this.id = id;
	this.type = type;
	this.attr = attr
}

var a1Attr = [
	new Answer ('A1', 'radio', 'noble'),
	new Answer ('A1', 'radio', 'strong'),
	new Answer ('A1', 'radio', 'smallgroup'),
	new Answer ('A1', 'radio', 'water'),
	new Answer ('A1', 'radio', 'arctic'),
	new Answer ('A1', 'radio', 'noble'),
	new Answer ('A1', 'radio', 'wise'),
	new Answer ('A1', 'radio', 'loner'),
	new Answer ('A1', 'radio', 'land'),
	new Answer ('A1', 'radio', 'river')]

var a2Attr = [
	new Answer ('A2', 'radio', 'resourceful'),
	new Answer ('A2', 'radio', 'cunning'),
	new Answer ('A2', 'radio', 'loner'),
	new Answer ('A2', 'radio', 'land'),
	new Answer ('A2', 'radio', 'river'),
	new Answer ('A2', 'radio', 'loyal'),
	new Answer ('A2', 'radio', 'resourceful'),
	new Answer ('A2', 'radio', 'largegroup'),
	new Answer ('A2', 'radio', 'air'),
	new Answer ('A2', 'radio', 'forest')]

var a3Attr = [
	new Answer ('A3', 'radio', 'loyal'),
	new Answer ('A3', 'radio', 'wise'),
	new Answer ('A3', 'radio', 'largegroup'),
	new Answer ('A3', 'radio', 'air'),
	new Answer ('A3', 'radio', 'forest'),
	new Answer ('A3', 'radio', 'cunning'),
	new Answer ('A3', 'radio', 'strong'),
	new Answer ('A3', 'radio', 'smallgroup'),
	new Answer ('A3', 'radio', 'water'),
	new Answer ('A3', 'radio', 'arctic')]

for(var i=0; i<animalData.length; i+=1){
	var newAnimal = new Animal(animalData[i][0], animalData[i][1], animalData[i][2], animalData[i][3], 
		animalData[i][4], animalData[i][5], animalData[i][6], animalData[i][7], animalData[i][8], 
		animalData[i][9], animalData[i][10], animalData[i][11], animalData[i][12], animalData[i][13],
		animalData[i][14], animalData[i][15], animalData[i][16]);
	animalObjects.push(newAnimal);
};


function setAttribute(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var questionBuilder = function () {
	var form = document.getElementById('form');
	var question = document.createElement('div');
	setAttribute(question, {'id':'question'});
	form.appendChild(question);
	qTextEl = document.createElement('p');
	qTextEl.innerHTML = questions[questionNumber];
	question.appendChild(qTextEl);

	var a1Input = document.createElement('input');
	setAttribute(a1Input, a1Attr[questionNumber]);
	question.appendChild(a1Input)
	var a1 = document.createElement('label');
	a1.innerHTML = a1Text[questionNumber];
	question.appendChild(a1);
	question.appendChild(document.createElement('br'));

	var a2Input = document.createElement('input');
	setAttribute(a2Input, a2Attr[questionNumber]);
	question.appendChild(a2Input)
	var a2 = document.createElement('label');
	a2.innerHTML = a2Text[questionNumber];
	question.appendChild(a2);
	question.appendChild(document.createElement('br'));

	var a3Input = document.createElement('input');
	setAttribute(a3Input, a3Attr[questionNumber]);
	question.appendChild(a3Input)
	var a3 = document.createElement('label');
	a3.innerHTML = a3Text[questionNumber];
	question.appendChild(a3);
	question.appendChild(document.createElement('br'));

	var inputButton = document.createElement('button');
	setAttribute(inputButton, {'type':'click', 'value':'submit', 'id':'inputButton'});
	inputButton.textContent='Submit';
	question.appendChild(inputButton);
	inputButton.addEventListener('click', valueScore);
};


var valueScore = function (event) {
	event.preventDefault();
	for (var i = 0; i < animalObjects.length; i++) {
		if (document.getElementById('A1').checked == true && animalObjects[i][a1Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;
		} else if (document.getElementById('A2').checked == true && animalObjects[i][a2Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;
		} else if (document.getElementById('A3').checked == true && animalObjects[i][a3Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;
		}
		}
	var element = document.getElementById('question');
	element.parentNode.removeChild(element);
	questionNumber += 1;
	// console.log('Question number: ' + questionNumber);
	// console.log('A1 - ' + document.getElementById('A1').checked);
	// console.log('A2 - ' + document.getElementById('A2').checked);
	// console.log('A3 - ' + document.getElementById('A3').checked);
	if (questionNumber < questions.length) {
		questionBuilder();
	} else {
		window.location.href = "output.html";
	}

};

questionBuilder();












	// for (var i = 0; i < animalObjects.length; i+=1) {
	// 	if (Answer.value == 'strong' && animalObjects[i].strong == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'wise' && animalObjects[i].wise == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'resourceful' && animalObjects[i].resourceful == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'cunning' && animalObjects[i].cunning == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'noble' && animalObjects[i].noble == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'loyal' && animalObjects[i].loyal == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'loner' && animalObjects[i].loner == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'smallgroup' && animalObjects[i].smallgroup == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'largegroup' && animalObjects[i].largegroup == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'water' && animalObjects[i].wate == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'land' && animalObjects[i].land == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'arctic' && animalObjects[i].arctic == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'forest' && animalObjects[i].forest == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'river' && animalObjects[i].river == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'mountain' && animalObjects[i].mountain == true) {
	// 		animalObjects[i].score += 1;
	// 	}
	// };
// setAttributes(a1, {"src": "http://example.com/something.jpeg", "height": "100%", ...});

// var question1 = document.createElement('p');
//   photo1.setAttribute('src', picArr[randomIndex1]);
//   pic1.appendChild(photo1);


// var question1 = document.getElementById('pic1');
//   pic1Button.addEventListener('click', function() 













