Image9 = new Image(600,400)
Image9.src = "img/tech-titans.jpeg"
Image10 = new Image(600,400)
Image10.src = "img/the_sandlot.jpg"

function SwapOutTeam() {
	document.imageflip9.src = Image10.src;
	return true;
}

function SwapBackTeam() {
	document.imageflip9.src = Image9.src;
	return true;
}

Image1 = new Image(200,222)
Image1.src = "img/swaintek.jpg"
Image2 = new Image(200,222)
Image2.src = "img/benny.jpeg"

function SwapOutDave() {
	document.imageflip1.src = Image2.src;
	return true;
}

function SwapBackDave() {
	document.imageflip1.src = Image1.src;
	return true;
}

Image3 = new Image(200,222)
Image3.src = "img/gribbins.jpg"
Image4 = new Image(200,222)
Image4.src = "img/smalls.jpeg"

function SwapOutNoah() {
	document.imageflip2.src = Image4.src;
	return true;
}

function SwapBackNoah() {
	document.imageflip2.src = Image3.src;
	return true;
}

Image5 = new Image(200,222)
Image5.src = "img/nemmar.jpg"
Image6 = new Image(200,222)
Image6.src = "img/hamiliton.jpg"

function SwapOutCody() {
	document.imageflip3.src = Image6.src;
	return true;
}

function SwapBackCody() {
	document.imageflip3.src = Image5.src;
	return true;
}

Image7 = new Image(200,222)
Image7.src = "img/koch.jpg"
Image8 = new Image(200,222)
Image8.src = "img/squints.jpg"

function SwapOutTiff() {
	document.imageflip4.src = Image8.src;
	return true;
}

function SwapBackTiff() {
	document.imageflip4.src = Image7.src;
	return true;
}