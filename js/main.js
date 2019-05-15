var swiper = new Swiper('.featured .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: 'fade',
  speed:2000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true
  },
   autoplay: {
    delay: 5000,
  },
});





//Nav
let el = document.querySelector('.main-header__button');
let body = document.querySelector('body');
let menu = document.querySelector('.main-header__menu');

menu.inert = true;

el.onclick = function() {
  event.preventDefault();
  menu.inert = false;
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
      var: 100, 
      onUpdate: function () {
          tal3.innerHTML = Math.ceil(counter3.var);
      },
      ease:Circ.easeOut
  });
}


let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  triggerElement: ".case-studies--home",
  offset: -600
})
.on('start', function () {
  stats();
})
.addTo(controller);