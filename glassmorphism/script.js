const card = document.querySelector(".card");
let flipCard = false;

card.addEventListener('click',function() {
  if(flipCard) {
    return; 
  }
  
  flipCard = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       flipCard = false;
    }
  });
});