var cards =  [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "Images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "Images/queen-of-diamonds.png"
},
{

	rank: "king",
	suit: "hearts",
	cardImage: "Images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "Images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!")
		}
		else {
			alert("Sorry, try again.");
		}
	}
}


var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();

	console.log(cards[cardId].cardImage);

}


flipCard(0);
flipCard(2);








