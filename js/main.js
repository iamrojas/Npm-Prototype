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




$('a.to-content').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });


$(".header__menu-toggle").click(function(e){
  $('body').toggleClass('show');
 
});

$('.menu-overlay').click(function(){
  $('body').toggleClass('show');
});


$('.nav-main').click(function(){
  $('body').toggleClass('show');
});

$('.nav-menu li a').hover(
    function(){
        //we get our current filename and use it for the src
        var linkIndex = $(this).attr("data-filename");
        $(this).addClass('hover');
        $('.nav__img img').attr('src', 'images/'+linkIndex+'.jpg');
    },
    function(){
        $(this).removeClass('hover');
        $('.nav__img img').attr('src', 'images/image1.jpg');
    }
);


var controller = new ScrollMagic.Controller();

//Hero
var headline1 =  $('.headline'),
  heroShape =  $('.hero__shape.shape--left'),
  heroDown =  $('.hero__down'),
  heroTl = new TimelineMax();

  heroTl
    .from(headline1, 2, { autoAlpha:0, y:-50, opacity:0, ease:Back.easeOut})
    .from(heroShape, 3, { autoAlpha:0, x:-50, opacity:0, ease:Power3.easeOut} , '-=1')
    .from(heroDown, 1, { autoAlpha:0, y:-150, opacity:0, ease:Sine.easeOut}  , '-=2');
    
  var scene = new ScrollMagic.Scene({triggerElement: '.hero'})
    .setTween(heroTl)
    .addTo(controller);

  heroDown.hover(
     function() {
        TweenLite.to($(this), 0.04, {ease: Elastic.easeOut.config(1, 0.3),y:-5});
     },
     function() {
        TweenLite.to($(this), 0.04, {ease: Elastic.easeOut.config(1, 0.3), y:0});  
     }
  );

//Services
var serviceImg =  $('.services__img-c'),
    heroShapeRight =  $('.hero__shape.shape--right'),
    serviceCol =  $('.services__col'),
  serviceTl = new TimelineMax();

  serviceTl
    .from(serviceCol, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut} )
    .from(serviceImg, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut} , '-=1.8')
     .from(heroShapeRight, 2, { autoAlpha:0, x:200, opacity:0, ease:Power3.easeOut} , '-=2');
    
  var scene = new ScrollMagic.Scene({triggerElement: '.services', offset: -200})
    .setTween(serviceTl)
    .addTo(controller);

//Services
var featuredTitle =  $('.featured__title'),
    featured =  $('.featured'),
  featuredTl = new TimelineMax();

  featuredTl
    .from(featuredTitle, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut} )
    .from(featured, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut} , '-=2');
    
  var scene = new ScrollMagic.Scene({triggerElement: '.featured__col' , offset: -600})
    .setTween(featuredTl)
    .addTo(controller);


//About
var aboutTitle =  $('.about__title'),
    aboutImg =  $('.about__img-c'),
    aboutContent =  $('.about__content'),
  aboutTl = new TimelineMax();

  aboutTl
    .from(aboutTitle, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut} )
    .from(aboutImg, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut}, '-=2' )
    .from(aboutContent, 2, { autoAlpha:0, y:-150, opacity:0, ease:Back.easeOut}, '-=2' );
    
  var scene = new ScrollMagic.Scene({triggerElement: '.about' , offset: -600})
    .setTween(aboutTl)
    .addTo(controller);




