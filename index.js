let dealerCards = [];
let dealerTotal = 0;
let playerCards = [];
let playerTotal = 0;


let isAlive = true;
let message = "";





let messageEl = document.querySelector('#message-el');
let playerCardsEl = document.querySelector('#player-cards');
let playerTotalEl = document.querySelector('#player-total');
let dealerCardsEl = document.querySelector('#dealer-cards');
let dealerTotalEl = document.querySelector('#dealer-total');
let startButton = document.querySelector('#start-btn');
let takecardButton = document.querySelector('#takecard-btn');
let stopcardButton = document.querySelector('#stopcard-btn');
let restartButton = document.querySelector('#restart-btn');


var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deck = getDeck();



function getDeck() {
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < values.length; x++) {
            var card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }

    return deck;
}

function shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

function renderDeck(deck) {
    document.getElementById("deck").innerHTML = "";

    for (let i = 0; i < deck.length; i++) {
        let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].Suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);
    }
}

function getCardValue(card) {
    var returnValue;
    switch (card.Value) {
        case "A":
            returnValue = 1;
            break;
        case "J":
        case "Q":
        case "K":
            returnValue = 10;
            break;
        default:
            returnValue = parseInt(card.Value);
            break;
    }

    return returnValue;
}



let randomCard = function() {
    var randomNum = Math.floor(Math.random() * deck.length);
    var randomCard = deck[randomNum];
    deck.splice(randomNum, 1);
    console.log(randomCard);
    return randomCard;
}


function gameLost() {
    messageEl.style.display = "";
    message = "Busted.";
    console.log("This is weird");
    messageEl.style.fontSize = '2rem';
    messageEl.style.color = 'red';
    startButton.style.display = "none";
    takecardButton.style.display = "none";
    stopcardButton.style.display = "none";
    restartButton.style.display = "";
    dealerCardsEl.style.display = "";
    playerCardsEl.style.display = "";
}

function blackjack() {
    message = "Sheesh...Blackjack!";
    startButton.style.display = "none";
    takecardButton.style.display = "none";
    stopcardButton.style.display = "none";
    restartButton.style.display = "";
    dealerCardsEl.style.display = "";
    playerCardsEl.style.display = "";
}

// Game Functions
function startGame() {
    deck = getDeck();
    dealerCardsEl.textContent = "Dealer's Cards:"
    playerCardsEl.textContent = "Player's Cards:"

    dealerTakeCard();
    playerTakeCard();
    playerTakeCard();

    UpdateUI();
    StartUIUpdate();
}

function quitGame() {

    quitUIUpdate();
}

function stopCard() {
    while (dealerTotal < 17) {
        dealerTakeCard();
    }

    if (dealerTotal > 21) {
        message = "You Win!"
    } else if (dealerTotal > playerTotal) {
        message = "You Lose..."
    } else if (dealerTotal === playerTotal) {
        message = "Draw! Nice try."
    } else if (dealerTotal < playerTotal)[
        message = "You Win!"
    ]

    stopcardButton.style.display = "none";
    takecardButton.style.display = "none";
    messageEl.style.display = "";

    UpdateUI();

}

function dealerTakeCard() {
    dealerCards.push(randomCard());
    console.log(dealerCards);
    dealerCardsEl.textContent += " " + dealerCards[dealerCards.length - 1].Value
    dealerTotal += getCardValue(dealerCards[dealerCards.length - 1])
    console.log("Dealer total:" + dealerTotal);
}

function playerTakeCard() {
    playerCards.push(randomCard());
    console.log(playerCards);
    playerTotal += getCardValue(playerCards[playerCards.length - 1])
    console.log("Player total:" + playerTotal);
    playerCardsEl.textContent += " " + playerCards[playerCards.length - 1].Value
    playerTotalEl.textContent = playerTotal;

    if (playerTotal > 21) {
        messageEl.style.display = ""
        message = "Busted."
        messageEl.textContent = message;
        messageEl.style.fontSize = '2rem'
        messageEl.style.color = 'red';
        takecardButton.style.display = "none";
        stopcardButton.style.display = "none";

    }


}


//UI Functions
function UpdateUI() {
    dealerTotalEl.textContent = dealerTotal;
    playerTotalEl.textContent = playerTotal;
    messageEl.textContent = message;
}

function StartUIUpdate() {
    startButton.style.display = 'none';
    takecardButton.style.display = "";
    stopcardButton.style.display = "";
    restartButton.style.display = "";
    dealerCardsEl.style.display = "";
    dealerTotalEl.style.display = "";
    playerCardsEl.style.display = "";
    playerTotalEl.style.display = "";
    messageEl.style.display = "none";


}

function quitUIUpdate() {
    playerTotal = 0;
    dealerTotal = 0;

    startButton.style.display = '';
    takecardButton.style.display = "none";
    stopcardButton.style.display = "none";
    restartButton.style.display = "none";
    dealerCardsEl.style.display = "none";
    dealerTotalEl.style.display = "none";
    playerCardsEl.style.display = "none";
    playerTotalEl.style.display = "none";
    messageEl.style.display = "";
    messageEl.textContent = "press to play."
    messageEl.style.fontSize = '1.25rem';
    messageEl.style.color = 'white';

}