var Animal = function (animalName, animalImage, animalSong, strong, wise, resourceful, cunning, noble, loyal, loner, smallgroup,
	largegroup, water, land, air, arctic, forest, river, animalInfo) {
	this.animalName = animalName; //Animal name, direct output to results page
	this.animalImage = animalImage; //Animal image location, direct output to results page
	this.animalSong = animalSong;
	this.strong = strong;
	this.wise = wise;
	this.resourceful = resourceful;
	this.cunning = cunning;
	this.noble = noble;
	this.loyal = loyal;
	this.loner = loner;						//Adds animal data -- if expanded add booleans to animalData subarrays
	this.smallgroup = smallgroup;
	this.largegroup = largegroup;
	this.water = water;
	this.land = land;
	this.air = air;
	this.arctic = arctic;
	this.forest = forest;
	this.river = river;
	this.animalInfo = animalInfo;
	this.score = 0  //Score tracker
};

var animalData = [ //All animal data is expandable, add new lines to the 2 dimensional array -pushed at line 34
	['Wolf', 'img/wolf.jpg','music/wolf.mp3', true, false, true, true, false, false, false, true, false, false, false, true, false, true, false,
	 'Just like the Wolf, you are intuitive, strong, cunning and resourceful. You crave freedom and independence. You have very strong relationships with just a few and are fiercely loyal to them.'],
	['Eagle', 'img/eagle.jpg', 'music/eagle.mp3', true, true, true, false, false, false, true, false, false, false, false, true, true, false, false,
	 'Just like the Eagle. you are strong, wise and resourceful. You have great balance and decision-making skills. You have strong primary relationships and are able to maintain them in times of physical distance, which is good because you like to walk this life alone.'],
	['Penguin', 'img/penguin.jpg', 'music/penguin.mp3', false, false, true, false, true, true, false, false, true, true, false, false, true, false, false,
	 'Just like the Penguin, you are resourceful, loyal and noble. You are a social creature by nature and enjoy people and playtime. You believe in harmony and are committed to teamwork.'],
	['Bear', 'img/bear.jpg', 'music/bear.mp3', true, true, false, true, false, false, true, false, false, false, false, true, false, true, false,
	 'Just like the Bear, you are strong, wise and cunning. You are not afraid to exhibit strength when you need to protect your loved ones or property. You are a confident person and enjoy your alone time. This helps facilitate your natural curiosity of life.'],
	['Squirrel', 'img/squirrel.jpg', 'music/orca.mp3', false, true, true, true, false, false, false, true, false, false, false, true, false, true, false,
	 'Just like the Squirrel, you are wise, resourceful  and cunning. You have a tenacious way of attacking any problems. You are playful, assertive and family-oriented. You enjoy small groups with lots of activity.'],
	['Salmon', 'img/salmon.jpg', 'music/salmon.mp3', true, false, true, false, true, false, false, false, true, true, false, false, false, false, true,
	 'Just like the Salmon, you are strong, resourceful and noble. You are tireless in your pursuit of what you want and great at overcoming obstacles. You enjoy large groups and crowds and feed off the energy and knowledge of others.']
];

var animalObjects = []; //Holds all animal information for scoring

var backgroundImgs = ['img/restaurant.jpg','img/trash.jpg','img/gorge.jpg','img/wedding.jpg','img/ticket.jpg',
						'img/clothing.png','img/sink.jpg','img/dinner.jpg','img/rex.jpg','img/honeymoon.jpg']

//go in {{title}}
var questionTitles = ['The restaurant...', 'Trash crash!', 'Do you believe in Rock and Roll?', 'Aloha!', 'Two tickets to paradise..',
						'Make it work.', 'Drip drop drip', 'The dinner party', 'Drop and give me twenty', 'Honeymooners']

//{{inputButtons}}
var inputButtons = ['$$??', '@#$!!!', 'Rock out?', 'Aloha', 'Come fly with me', 'No shirt ?', 'Fix it!', 'Yum', 'Push it real good', 'To the moon Alice!']

for(var i=0; i<animalData.length; i+=1){ //Pushes all animal data
	var newAnimal = new Animal(animalData[i][0], animalData[i][1], animalData[i][2], animalData[i][3],
		animalData[i][4], animalData[i][5], animalData[i][6], animalData[i][7], animalData[i][8],
		animalData[i][9], animalData[i][10], animalData[i][11], animalData[i][12], animalData[i][13],
		animalData[i][14], animalData[i][15], animalData[i][16], animalData[i][17], animalData[i][18]);
	animalObjects.push(newAnimal);
};

var questionNumber = 0; //Control variable for ENTIRE SCRIPT!!!!

//{{imput}}
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
//Questions are expandable -- Add questions/answers/attributes -- no additional changes are necessary
var a1Text = ['Run after them in hopes of returning their wallet.',
				'Spend the next ten minutes lifting the receptacle upright and cleaning up all of the garbage that has fallen out.',
				'Read more about the venue, but ultimately do not buy tickets. You will see them when they come next month to a smaller venue.',
				'Swimming, snorkeling and surfing. You love the ocean.',
				'A glacier tour of Iceland.',
				'Leave the exact payment amount, including sales tax, on the counter with a note.',
				'Call a plumber. With your level of expertise, this could go from bad to worse.',
				'Make an excuse why you cannot attend and stay home to watch Netflix alone. Being trapped in small talk is not your thing.',
				'A day hike along the Burke-Gilman Trail. The best part of the PNW.',
				'A sight-seeing river cruise in Brazil.'];
var a2Text = ['You look up their name and address in Google in hopes of contacting them directly.',
				'You immediately go find another parking spot on the other side of the garage. The security cameras in the garage are broken; no one will know it was you.',
				'Will not even consider buying tickets. You do not like live shows and will buy the concert dvd.',
				'Relaxing on the beach and sightseeing. Sun and sand is your vacation m.o.',
				'White river rafting in the Columbia River.',
				'Check the back area and out front to make sure the salesperson is not in any trouble. Then you alert the business next door that the clothing store has been left unattended.',
				'Google a quick solution while you call the landlord. This should be their problem to fix, but you do not want it to get worse +1 resourceful.',
				'Send a raincheck and head to the nearest sports bar; intimate dinners where you know everyone are boring to you.',
				'A school of acrobatics and trapeze arts. Teambuilding and hangtime',
				'Backpacking through indigenous ruins in Mexico.'];
var a3Text = ['Immediately give the wallet to the restaurant manager.',
				'Walk downstairs to alert maintenance of the accident. You will not risk injuring yourself picking this up alone.',
				'Buy tickets for you and all of your friends!',
				'Skydiving! You are an adrenaline junkie who loves to fly.',
				'A camping trip through Yellowstone.',
				'Tuck the shirt in your bag and ease out of the front door.',
				'Grab your tools from the basement and start to fix the leak. What is the worst that can happen?',
				'Confirm your RSVP and let them know what dish you are bringing.',
				'Kayaking in the Puget Sound. There is nothing better!',
				'A five-star resort trip to the Swiss Alps.'];

var Answer = function (id, name, type, attr) { //Adds attributes to answer elements
	this.id = id;
	this.name = name;
	this.type = type;
	this.attr = attr
}
//ATTRIBUTES_________________________________________________________________
var a1Attr = [ //Answer 1 attributes
	new Answer ('A1', 'button', 'radio', 'noble'),
	new Answer ('A1', 'button', 'radio', 'strong'),
	new Answer ('A1', 'button', 'radio', 'smallgroup'),
	new Answer ('A1', 'button', 'radio', 'water'),
	new Answer ('A1', 'button', 'radio', 'arctic'),
	new Answer ('A1', 'button', 'radio', 'noble'),
	new Answer ('A1', 'button', 'radio', 'wise'),
	new Answer ('A1', 'button', 'radio', 'loner'),
	new Answer ('A1', 'button', 'radio', 'land'),
	new Answer ('A1', 'button', 'radio', 'river')]

var a2Attr = [ //Answer 2 attributes
	new Answer ('A2', 'button', 'radio', 'resourceful'),
	new Answer ('A2', 'button', 'radio', 'cunning'),
	new Answer ('A2', 'button', 'radio', 'loner'),
	new Answer ('A2', 'button', 'radio', 'land'),
	new Answer ('A2', 'button', 'radio', 'river'),
	new Answer ('A2', 'button', 'radio', 'loyal'),
	new Answer ('A2', 'button', 'radio', 'resourceful'),
	new Answer ('A2', 'button', 'radio', 'largegroup'),
	new Answer ('A2', 'button', 'radio', 'air'),
	new Answer ('A2', 'button', 'radio', 'forest')]

var a3Attr = [ //Answer 3 attributes
	new Answer ('A3', 'button', 'radio', 'loyal'),
	new Answer ('A3', 'button', 'radio', 'wise'),
	new Answer ('A3', 'button', 'radio', 'largegroup'),
	new Answer ('A3', 'button', 'radio', 'air'),
	new Answer ('A3', 'button', 'radio', 'forest'),
	new Answer ('A3', 'button', 'radio', 'cunning'),
	new Answer ('A3', 'button', 'radio', 'strong'),
	new Answer ('A3', 'button', 'radio', 'smallgroup'),
	new Answer ('A3', 'button', 'radio', 'water'),
	new Answer ('A3', 'button', 'radio', 'arctic')]
//___________________________________________________________________________

function setAttribute(el, attrs) { //Function to push attributes into HTML elements
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var questionBuilder = function () { //builds HTML framework for question block

	var runForm = {
		title: questionTitles[questionNumber],
		questions: questions[questionNumber],
		a1Text: a1Text[questionNumber],
		a2Text: a2Text[questionNumber],
		a3Text: a3Text[questionNumber],
		button: inputButtons[questionNumber]
		}

		var compileTemplate = Handlebars.compile($('#templateID').html());
		var html = compileTemplate(runForm);
		$('#questionImg').empty();
		$('#questionImg').append(html);

		$('#questionImg').attr('background', backgroundImgs[questionNumber]);
		$('#questionSubmitButton').on('click', valueScore);

};


var valueScore = function (event) {  //Scores answers and loads next question or results page
	event.preventDefault();
	for (var i = 0; i < animalObjects.length; i++) {  //2D loop controlled by questionNumber and animalObjects.length
		if ($('#A1:checked') && animalObjects[i][a1Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;   //Score for answer 1
		} else if ($('#A2:checked') && animalObjects[i][a2Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;   //Score for answer 2
		} else if ($('#A4:checked') && animalObjects[i][a3Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;   //Score for answer 3
		}
		}
		console.log(questionNumber);

	questionNumber += 1; //Moves to next question... Control variable for ENTIRE SCRIPT!!!!
	if (questionNumber < questions.length) {
		questionBuilder(); //Loads next question
	} else {
		localStorage.setItem('animals', JSON.stringify(animalObjects)); //Sends answers to local storage
		window.location.href = "output.html"; //Routes user to output page
	}

};

questionBuilder(); //Initial build of question
