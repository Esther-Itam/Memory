class Game{

    constructor(){
    this.cards = document.querySelectorAll(".game-card");
    this.cardFace;
    this.cardBack;
    this.card;
    this.flippedCard = false;
    this.lock = false;
    this.button = document.querySelector("button");

    /*this.span = document.getElementsByTagName("span");
    this.time;
    this.ms=0,
    this.s=0;
    this.mn=0;
    this.h=0;*/

    }

    flipCard(event){
        if(this.lock) return;
        //event.target.classList.toggle('flip');

        if(!this.flippedCard){
            this.flippedCard = true;
            this.cardFace = this.card;
            this.cardFace.classList.toggle('flip')
        //console.log(this.cardFace.getAttribute('data-card'))
        }
        else{
            this.flippedCard = false;
            this.cardBack = this.card; 
            this.cardBack.classList.toggle('flip')

        
        //console.log(this.cardBack.getAttribute('data-card'))

            if(this.cardFace.dataset.card === this.cardBack.dataset.card){
               
                
                this.cardFace.removeEventListener('click', () => {this.flipCard()});
                this.cardBack.removeEventListener('click', () => {this.flipCard()});
            }else{
                this.lock = true;
                setTimeout(() => {
                this.cardFace.classList.remove('flip');
                this.cardBack.classList.remove('flip');
                this.lock = false;

            }, 1500);}
        }
    
    }

    // random cards après victoire

    shuffle(){
        if(this.cardFace.classList.contains('flip') && this.cardBack.classList.contains('flip')){
         
        this.cards.forEach(card => {
            card.classList.remove('flip');
            var random = Math.floor(Math.random()*8);
            card.style.order = random;

        })}
    }

    start(){
        this.cards.forEach(card =>  {card.addEventListener('click', (event) => {
            this.card = card; 
            this.flipCard(event)
            
        })});

    }

    random(){
        this.button.addEventListener('click', () => {this.shuffle()});
        
    }


   /* startTimer(){
        this.time =setInterval(this.update,100);
        this.cards.disabled=true;
       this.cards.forEach(card => card.addEventListener('click', () => {this.startTimer()}));

       }


    update(){
     this.ms+=1;
        if(this.ms==10){
            this.ms=1;
            this.s+=1;
        }
        if(this.s==60){
            this.s=0;
            this.mn+=1;
        }
        if(this.mn==60){
            this.mn=0;
            this.h+=1;
        }

        console.log(this.span[0]);
        
        this.span[0].innerHTML=this.h+" h";
        this.span[1].innerHTML=this.mn+" min";
        this.span[2].innerHTML=this.s+" s";
        this.span[3].innerHTML=this.ms+" ms";
        

    }*/
    
}
 
let game = new Game();
game.start();
game.random();



 




// timer
/*var span = document.getElementsByTagName("span");
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