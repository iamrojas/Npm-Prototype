var swiper = new Swiper('.investment__swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {

    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});


TweenMax.set('.hero', {perspective: 4000});

TweenMax.to(".overlay", 1, {
  rotation: 90,
  scale: 2,
  transformOrigin: "100% 100%",
  ease: Power2.easeOut,
  duration: 2
}); 

TweenMax.from(".hero", 1, {
  z: 150,
  transformOrigin: "0% 100%",
  ease: Power3.easeOut
}); 



//Nav
let el = document.querySelector('.main-header__button');
let body = document.querySelector('body');
let menu = document.querySelector('.main-header__menu');
let menuTl = new TimelineMax();
menu.inert = true;


el.onclick = function() {
  event.preventDefault();
  menu.inert = false;
  body.classList.toggle('show');

}

menu.onclick = function() {
  event.preventDefault();
  menu.inert = true;
  body.classList.toggle('show');
}


function stats(){
  let counter = { var: 0 };
  let tal = document.querySelector('.int--1');
    
  TweenMax.to(counter, 1, {
      var: 8700, 
      onUpdate: function () {
          tal.innerHTML = Math.ceil(counter.var);
      },
      ease:Circ.easeOut
  });


  let counter2 = { var: 0 };
  let tal2 = document.querySelector('.int--2');
    
  TweenMax.to(counter2, 1, {
      var: 3300, 
      onUpdate: function () {
          tal2.innerHTML = Math.ceil(counter2.var);
      },
      ease:Circ.easeOut
  });


  let counter3 = { var: 0.05 };
  let tal3 = document.querySelector('.int--3');
    
  TweenMax.to(counter3, 1, {
      var: 1.00, 
      onUpdate: function () {
          tal3.innerHTML = Math.ceil(counter3.var);
      },
      ease:Circ.easeOut
  });
}


let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  triggerElement: ".home__stats",
  offset: -600
})
.on('start', function () {
  stats();
})
.addTo(controller);




let controller2 = new ScrollMagic.Controller();

function border(){
  TweenMax.to(".bottom-border", 1, {
    width: "100%",
    transformOrigin: "100% 100%",
    ease: Power2.easeOut
  }); 
}


let scene2 = new ScrollMagic.Scene({
  triggerElement: ".case-studies__home",
  offset: -600,
  duration: 15
})
.on('start', function () {
  border();
})
.addTo(controller2);

