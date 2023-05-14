class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.standardDeck = [];
    }


    buildDeck() {
        const suits = ['Clubs \u2663', 'Diamonds \u2666', 'Hearts \u2665', 'Spades \u2660'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        //use a nested for loop to iterate through each of 4 suits, creating one card of each rank per suit and putting it in the deck array
        for (let suit in suits) {
            for (let rank in ranks) {
                this.standardDeck.push(new Card(suits[suit], ranks[rank], values[rank])); // this creates an array of Card objects, 
                //each with suit, rank,  and value properties
            }
        }
    }
    
    shuffleDeck() {
        return this.standardDeck.sort(()=>Math.random()-0.5);
    }

    dealCards(numberInHand, p1, p2) { // the number of dealt cards can be changed depending on the game

        for (let i = 0; i < numberInHand * 2; i++) {
            let topCard = this.standardDeck.shift(); // remove card from index 0 and return card value to be used later, shifting everything up one spot
            if (i % 2 === 0) {
                p1.hand.push(topCard); // push the returned card object into the hand array for each player
            } else {
                p2.hand.push(topCard);
            }
        }
    }
}

    
class Player {
    constructor(name) {
        this.hand = [];
        this.score = 0;
        this.name = name;
    }

    addPoint() {
        this.score++;
    }
}

class Gameplay {
    constructor() {
        this.p1 = new Player('Hatfields');
        this.p2 = new Player('McCoys');
        this.deck = new Deck();
    }


    
    createGame() {
        console.log(`Setting up new game...`)

        // TO-DO: add player animations
        this.deck.buildDeck();
        // TO-DO: add cards animation and shuffle animation
        console.log(
        `Players created
         Player 1: ${this.p1.name} vs. Player 2: ${this.p2.name} 
         Creating deck...`);

        console.log(this.deck);

        //TO-DO: add cards animation and shuffle animation
 
        if (this.p1 instanceof Player && this.p2 instanceof Player) {
            this.deck.shuffleDeck();
            console.log(`Deck has been shuffled. Now dealing cards to players...`); 
            this.deck.dealCards(26, this.p1, this.p2);
        } else {
            throw new exception (`A player object must be created in order to deal cards.`);
        }
        
        //for testing purposes, to make sure cards are being dealt 26 to a player and no duplicates
        //console.log(`p1 cards: ${this.p1.hand}`);
        //console.log(`p2 cards: ${this.p2.hand}`);

        // TO-DO: add deal animation
        console.log(`Ready to begin game`);
        for (let i = 0; i < 26; i++) {
            let p1Card = this.p1.hand.shift();
            let p2Card = this.p2.hand.shift();
            console.log(`${p1Card.rank} of ${p1Card.suit} vs. ${p2Card.rank} of ${p2Card.suit}`);
            
            if (p1Card.value === p2Card.value) {
                console.log(`WAR--No points given!`);
            } else if (p1Card.value > p2Card.value) {
                this.p1.addPoint();
                console.log(`A point goes to ${this.p1.name}! 
Score: ${this.p1.name}--${this.p1.score} to ${this.p2.name}--${this.p2.score}`);
            } else {
                this.p2.addPoint();
                console.log(`A point goes to ${this.p2.name}! 
Score: ${this.p1.name}--${this.p1.score} to ${this.p2.name}--${this.p2.score}`);
            }
            console.log('\n');
        }

        
        if (this.p1.score > this.p2.score) {
            console.log(`${this.p1.name} win(s)! 
Final score: ${this.p1.name}--${this.p1.score} to ${this.p2.name}--${this.p2.score}`);
        } else if (this.p2.score > this.p1.score) {
            console.log(`${this.p2.name} win(s)! 
Final score: ${this.p1.name}--${this.p1.score} to ${this.p2.name}--${this.p2.score}`);
        } else {
            console.log(`It's a tie--better luck next time!`);
        }
    }
}

let newGame = new Gameplay();
newGame.createGame();