'use strict'

// Selecting Elements

const score0= document.querySelector('#score--0');
const score1= document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');

const rollDice = document.querySelector('.btn--roll');
const holdEl = document.querySelector('.btn--hold');
const refresh =  document.querySelector('.btn--new');

const activePlayer0El= document.querySelector('.player--0');
const activePlayer1El= document.querySelector('.player--1');

let scores = [0,0];
let currentScore = 0 ;
let activePlayer = 0;
let isPlaying = true;
  
// intial state
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

function change (){
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0
    activePlayer0El.classList.toggle('player--active')
    activePlayer1El.classList.toggle('player--active')

}

rollDice.addEventListener("click", ()=>{
    if(isPlaying){
        const diceId = Math.trunc(Math.random() * 6) +1;
        diceEl.src = `dice-${diceId}.png`;
        diceEl.classList.remove('hidden');
    
        if(diceId != 1){
            currentScore +=diceId;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }else{
            change();
            
        }
       
        
    }
})


holdEl.addEventListener('click', ()=>{
    if(isPlaying){
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent =  scores[activePlayer];
        if(scores[activePlayer] >= 50){
            diceEl.classList.add('hidden');
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }else{
            change();
        }
    }
})

// refresh.addEventListener('click', ()=>{
//     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
//     currentScore = 0;
//     document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
//     activePlayer= 0;
//     document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
//     score0.textContent = 0;
//     score1.textContent = 0;
//     diceEl.classList.add('hidden')
//     scores[0] = 0
//     scores[1] = 0
//     isPlaying = true;
// })