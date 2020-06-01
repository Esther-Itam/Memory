var button = document.querySelector("button");
button.addEventListener('click', function(){
    console.log("salut");
    var unicode = document.querySelectorAll(".game-card");
    unicode.sort(function(){
        return .5-Math.random();
        });
    
   
})
  

var cards = document.querySelectorAll(".game-card");
var cardFace;
var cardBack;
var flippedCard = false;
var lock = false;

function flipCard(){
   this.classList.toggle('flip');
  
   if(!flippedCard){
       flippedCard = true;
       cardFace = this;
   }
   else{
    flippedCard = false;
    cardBack = this; 

    if(cardFace.dataset.class === cardBack.dataset.class){
        cardFace.removeEventListener('click', flipCard);
        cardBack.removeEventListener('click', flipCard);
    }else{
        setTimeout(function(){
        cardFace.classList.remove('flip');
        cardBack.classList.remove('flip');

    }, 1500);}
   }
  
}

cards.forEach(card => card.addEventListener('click', flipCard));



/*var unicode = ['🎈', '🎄', '🎺', '🐫','🎈', '🎄', '🎺', '🐫'];
    unicode.sort(function(){
    return .5-Math.random();
    });
    document.write(unicode);
    console.log(unicode);*/
    