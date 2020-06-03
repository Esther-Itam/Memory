class Game{

    constructor(){
this.cards = document.querySelectorAll(".game-card");
this.cardFace;
this.cardBack;
this.flippedCard = false;
this.lock = false;
this.button = document.querySelector("button");

}

flipCard(){
    if(lock) return;
   this.classList.toggle('flip');
  
   if(!flippedCard){
       this.flippedCard = true;
       this.cardFace = this;
   }
   else{
    this.flippedCard = false;
    this.cardBack = this; 


    if(this.cardFace.dataset.card === this.cardBack.dataset.card){
        this.cardFace.removeEventListener('click', flipCard);
        this.cardBack.removeEventListener('click', flipCard);
    }else{
        this.lock = true;
        setTimeout(function(){
        this.cardFace.classList.remove('flip');
        this.cardBack.classList.remove('flip');
        this.lock = false;
        console.log("cardFace");

    }, 1500);}
   }
  
}



// random cards après victoire

shuffle(){
    
    this.cards.forEach(card => {
        var random = Math.floor(Math.random()*8);
        card.style.order = random;
        console.log("salut");
    })
}



}
 
let game = new Game()
cards.forEach(card => card.addEventListener('click', flipCard));
button.addEventListener('click', shuffle); 




/*// timer
var span = document.getElementsByTagName("span");
var time;
var ms=0,s=0,mn=0,h=0;


function start(){
    time =setInterval(update,100);
    cards.disabled=true;
   console.log("salut");
   }

   cards.forEach(card => card.addEventListener('click', start));

   function update(){
     ms+=1;
        if(ms==10){
         ms=1;
         s+=1;
        }
        if(s==60){
         s=0;
         mn+=1;
        }
        if(mn==60){
         mn=0;
         h+=1;
        }

        span[0].innerHTML=h+" h";
        span[1].innerHTML=mn+" min";
        span[2].innerHTML=s+" s";
        span[3].innerHTML=ms+" ms";

    }
 

      function stop(){
        clearInterval(time);
        button.disabled=false;

        }
        button.addEventListener('click', stop);

        function reset(){
            clearInterval(time);
            cards.disabled=false;
            ms=0,s=0,mn=0,h=0;
            
            span[0].innerHTML=h+" h";
            span[1].innerHTML=mn+" min";
            span[2].innerHTML=s+" s";
            span[3].innerHTML=ms+" ms";
          }
          cards.addEventListener('click', reset); 
*/