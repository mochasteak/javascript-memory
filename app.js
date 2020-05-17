document.addEventListener('DOMContentLoaded', () => {

	
//card options
const cardArray = [
	{
		name: 'mario',
		img: 'img/mario.png'
	},
	{
		name: 'mario',
		img: 'img/mario.png'
	},
	{
		name: 'star',
		img: 'img/star.png'
	},
	{
		name: 'star',
		img: 'img/star.png'
	},
	{
		name: 'mushroom',
		img: 'img/mushroom.png'
	},
	{
		name: 'mushroom',
		img: 'img/mushroom.png'
	},
	{
		name: 'peach',
		img: 'img/peach.png'
	},
	{
		name: 'peach',
		img: 'img/peach.png'
	},
	{
		name: 'luigi',
		img: 'img/luigi.png'
	},
	{
		name: 'luigi',
		img: 'img/luigi.png'
	},
	{
		name: 'thwomp',
		img: 'img/thwomp.png'
	},
	{
		name: 'thwomp',
		img: 'img/thwomp.png'
	},
];
	
// randomize card array
cardArray.sort(() => 0.5 - Math.random());

// set variables
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

document.getElementById("resetBtn").addEventListener("click", resetGame);


//Create board
function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		var card = document.createElement('img');
		card.setAttribute('data-id', i);
		card.setAttribute('src', 'img/question.gif');
		card.setAttribute('width', '200');
		card.addEventListener('click', flipCard);
		grid.appendChild(card);
	}
}
	
// check for matches
function checkForMatch() {
	var cards = document.querySelectorAll('img');
	const firstChoiceId = cardsChosenId[0];
	const secondChoiceId = cardsChosenId[1];

	// If it's the EXACT same card, don't count as a win
	if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] === cardsChosenId[1]) {
		cards[firstChoiceId].setAttribute('src', 'img/question.gif');
		cards[secondChoiceId].setAttribute('src', 'img/question.gif');
		alert('You picked the same card. :(');
		
	// If it's a valid match, set background, log winners
	} else if (cardsChosen[0] === cardsChosen[1]) {
		alert('You found a match!');
		cards[firstChoiceId].setAttribute('src', 'img/coin.png');
		cards[secondChoiceId].setAttribute('src', 'img/coin.png');
		cardsWon.push(firstChoiceId, secondChoiceId);
		console.log('Cards won: ' + cardsWon);
		
	//Otherwise, reset
	} else {
		cards[firstChoiceId].setAttribute('src', 'img/question.gif');
		cards[secondChoiceId].setAttribute('src', 'img/question.gif');
		alert('Sorry, not a match. Try again.');
	}
	cardsChosen = [];
	cardsChosenId = [];
	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === cardArray.length/2) {
		resultDisplay.textContent = 'Congratulations! You found them all';
	}
}

// flip your card
function flipCard() {
	
	if (this.getAttribute('src') === 'img/coin.png') {
		alert('Clicked on something that was already clicked');
	} else {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		console.log('Card chosen: ' + cardArray[cardId].name + ' Card chosen ID: ' + cardId );
		console.log('Cards chosen: ' + cardsChosen);
		console.log('Cards chosen ID: ' + cardsChosenId);
		console.log(this.getAttribute('src'));
		this.setAttribute('src', cardArray[cardId].img);
	}
	
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}
	
function resetGame() {
	cardsChosen = [];
	cardsChosenId = [];
	cardsWon = [];
	createBoard();
}

createBoard();
	
});