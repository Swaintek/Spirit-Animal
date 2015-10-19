var Animal = function (animalName, animalImage, strong, wise, resourceful, cunning, noble, loyal, loner, smallgroup, 
	largegroup, water, land, arctic, forest, river, mountain) {
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
	this.arctic = arctic;
	this.forest = forest;
	this.river = river;
	this.mountain = mountain
	}

var animalData = [
	['wolf', 'img/wolf.jpg', true, false, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['eagle', 'img/eagle.jpg', true, true, true, false, false, false, true, false, false, false, true, false, false, false, false],
	['penguin', 'img/penguin,jpg', false, false, true, false, true, true, false, false, true, true, false, true, false, false, false],
	['bear', 'img/bear.jpg', true, true, false, true, false, false, true, false, false, false, true, false, true, false, false],
	['squirrel', 'img/squirrel.jpg', false, true, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['salmon', 'img/salmon.jpg', true, false, true, false, true, false, false, false, true, true, false, false, false, true, false]
]

animalObjects = [];

for( var i=0; i<animalData.length; i+=1){
	var newAnimal = new Animal(animalData[i][0], animalData[i][1], animalData[i][2], animalData[i][3], 
		animalData[i][4], animalData[i][5], animalData[i][6], animalData[i][7], animalData[i][8], 
		animalData[i][9], animalData[i][10], animalData[i][11], animalData[i][12], animalData[i][13],
		animalData[i][14], animalData[i][15], animalData[i][16]);
	animalObjects.push(newAnimal);
}











