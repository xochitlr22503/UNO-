let Game = {
    deck: null,    
    players: {},
    playersTurn: null,
    turnDirectio: 1,
    topCard: null,
    topCardColor: null,
    topCardValue: null, 
}

function makeNewCards(){
    const cards = [
        'red_0',
        'red_1', 'red_2', 'red_3', 'red_4', 'red_5', 'red_6', 'red_7', 'red_8', 'red_9',
        'red_1', 'red_2', 'red_3', 'red_4', 'red_5', 'red_6', 'red_7', 'red_8', 'red_9',
        'red_skip', 'red_reverse', 'red_draw_two',
        'red_skip', 'red_reverse', 'red_draw_two',
        
        'green_0',
        'green_1', 'green_2', 'green_3', 'green_4', 'green_5', 'green_6', 'green_7', 'green_8', 'green_9',
        'green_1', 'green_2', 'green_3', 'green_4', 'green_5', 'green_6', 'green_7', 'green_8', 'green_9',
        'green_skip', 'green_reverse', 'green_draw_two',
        'green_skip', 'green_reverse', 'green_draw_two',
        
        'blue_0',
        'blue_1', 'blue_2', 'blue_3', 'blue_4', 'blue_5', 'blue_6', 'blue_7', 'blue_8', 'blue_9',
        'blue_1', 'blue_2', 'blue_3', 'blue_4', 'blue_5', 'blue_6', 'blue_7', 'blue_8', 'blue_9',
        'blue_skip', 'blue_reverse', 'blue_draw_two',
        'blue_skip', 'blue_reverse', 'blue_draw_two',
        
        'yellow_0',
        'yellow_1', 'yellow_2', 'yellow_3', 'yellow_4', 'yellow_5', 'yellow_6', 'yellow_7', 'yellow_8', 'yellow_9',
        'yellow_1', 'yellow_2', 'yellow_3', 'yellow_4', 'yellow_5', 'yellow_6', 'yellow_7', 'yellow_8', 'yellow_9',
        'yellow_skip', 'yellow_reverse', 'yellow_draw_two',
        'yellow_skip', 'yellow_reverse', 'yellow_draw_two',
        
        'draw_four_wild','draw_four_wild', 'wild', 'wild',
        'draw_four_wild','draw_four_wild', 'wild', 'wild',
    ]    
    
    return cards
}

// create a function that takes an array of cards 
// and returns a new array of shuffled cards
function shuffle( cards ){
    // create an array to hold the shuffled cards
    const deck = [ ]
    // algorithm to shuffle a deck of cards
    // as long as there are cards in the cards array
    while (cards.length > 0) {
        // pick a random number between 0 and the length of the cards array
        let randomNumber = Math.floor(Math.random() * cards.length)
        // then use that number to pick a card
        let card = cards[randomNumber]
        // console.log('card is '+card)
        // push that card onto the new deck
        deck.push(card)
        // remove the card from the original deck
        cards.splice(randomNumber, 1)        
    }
    return deck
}

function dealCard(deck){
    return deck.shift()
}

function startNewGame(){
    // create a new set of cards 
    let cards = makeNewCards()
    // shuffle those cards
    let deck = shuffle(cards)
    // and attach them to the Game object
    Game.deck = deck
    
    // add up to four players to the Game object
    //                        0           1           2           3 
    const playerNames = ["Kimberlina", "Ismael", "Albertito", "Jeremy" ]
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    for (let i = 0; i < playerNames.length; i++) {
        // get the player name 
        let name = playerNames[i]
        let id = ALPHABET[i]
        let player = createNewPlayer(name, id)
        Game.players[id] = player
    }
    
    // flip the top on the deck over to start the game
    let discard = dealCard(Game.deck)
    Game.topCard = discard
    
    let color = getColorOfCard(discard)
    let val = getCardValue(discard)
    Game.topCardColor = color
    Game.topCardValue = val
    
    let topCard = document.querySelector('#deck')
    topCard.setAttribute('src', 'images/'+discard+'.png')
    
    Game.playersTurn = 'A'
    
    showGameObject()
}

function createNewPlayer( playerName, id ){

    let player = {
        id: id,
        name: playerName,
        cards: [ ],
        points: 0
    }
    
    for (let i = 0; i < 7; i++){
        let card = dealCard(Game.deck)
        player.cards.push(card)
    }
    
    return player
}

function showGameObject(){
    var codeSection = document.querySelector('#game-object')
    codeSection.innerHTML = JSON.stringify(Game, null, 2)
}

function getColorOfCard(cardName){
    const splitCard = cardName.split('_')
    const color = splitCard[0]
    return color 
    
}

function getNumberValue(cardName){ 
    const splitCard = cardName.split('_')
    const val = splitCard[1]
    if (splitCard.length === 3 ){
        val += '-'+ splitCard[2]
        val = val + '-' + splitCard[2]
    }
    return val
}

function changePlayersTurn(){
    ALPHABET = ['A','B','C','D','F','G','H','I','J']
    
    const ALPHABET = Object.keys(Game.players)
    
    const currentPlayerId = Game.playesTurn
    
    const currentDirection = Game.turnDirection
    
    const idx = ALPHABET.indexOf(currentPlayerId)
    
    let newIdx = idx + currentDirection
    
    const keys = Object.keys(Game.players)
  
    if (newIdx < 0) {
        newIdx = ALPHABET.length - 1
        
    }
    if (newIdx >= ALPHABET.length){
        newIdx = 0
    }
    
    const newPlayersTurn = ALPHABET[newIdx]
    Game.playersTurn = newPlayersTurn
    
}
function playCard(playerId, cardName){
    let color = getColorOfCard(cardName)
    let val = getValueOfCard(cardName)
    let playCard= cardIsPlayable(color, value)
}
 function playerDrawCard(playerId){
     let player = Game.players[playerId]
 } 
 function playCardTwo(playerId){
     playerDrawCard(playerId)
     
 }
 function skipTurn(playerId){
    if (valueOf("skip") === "skip"){
        
    }
 }
 function playerDrawFour(playerId){
    Game.playerDrawFour = Game.playerDrawFour *4
    
 } 
 function reverseTurn(playerId){
     Game.turnDirection = Game.turnDirection * -1
 }

 function playWildCard(playerId){
     if (valueOf === "WildCard"){
         
     }
 }
 function cardIsPlayable(cardColor, cardValue){
     if (valueOf === 'skip') {
  }
  if (valueOf === "WildCard"){
 }
 function endTurn(){
 }