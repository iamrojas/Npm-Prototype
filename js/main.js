{

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    // let arrow =  anime({
    //     targets: '.arrow path',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInOutCubic',
    //     duration: 2000,
    //     delay: 2000,
    //     fill: ['rgba(0,0,0,0)', '#ffffff']
    // }).finished;


    let introCaption = new Waypoint({
        element: document.getElementById('main-content'),
        handler: function(direction) {
            anime({
                targets: '.intro',
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 2000,
                easing: 'easeInOutQuad'
            })
        },
        offset: 1080
    });

    let aboutAnime = new Waypoint({
        element: document.getElementById('about__container'),
        handler: function(direction) {
            anime({
                targets: ['.about__col', '.about__desc'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 800
    });

    let callAnime = new Waypoint({
        element: document.getElementById('main-hero'),
        handler: function(direction) {
            anime({
                targets: ['.hero-call__subtitle', '.hero-call__title', '.hero__desc' , '.hero__link'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        }
    });


    let amenitiesAnime = new Waypoint({
        element: document.getElementById('amenities'),
        handler: function(direction) {
            anime({
                targets: ['.amenities__content', '.amenities__photo',  '.features__wrapper'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 800
    });

    let fpAnime = new Waypoint({
        element: document.getElementById('floorplans'),
        handler: function(direction) {
            anime({
                targets: ['.floorplans', '.fp-tab', '.fp-tab__container'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 1000
    });

    let galleryAnime = new Waypoint({
        element: document.getElementById('gallery'),
        handler: function(direction) {
            anime({
                targets: ['.gallery__title', '.gallery__desc'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 1000
    });
    

    let nAnime = new Waypoint({
        element: document.getElementById('neighborhood'),
        handler: function(direction) {
            anime({
                targets: ['.neighborhood__title', '.neighborhood__desc'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 1000
    });

    let rAnime = new Waypoint({
        element: document.getElementById('residents'),
        handler: function(direction) {
            anime({
                targets: ['.resident__title', '.resident__desc', '.resident__btn'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 1000
    });


    let cAnime = new Waypoint({
        element: document.getElementById('contact'),
        handler: function(direction) {
            anime({
                targets: ['.contact__title', '.contact__desc'],
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1400,
                easing: 'easeInOutQuad',
                delay: function(el, index) {
                    return index * 400;
                },
            })
        },
        offset: 1000
    });



    //Owl Carousel Options
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1
    });

    // Bulma Toggle Nav
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
        
            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
        
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
        
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
        
            });
            });
        }
    });


    //Tabs
    function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
        // first of all we get all tab content blocks (I think the best way to get them by class names)
        var x = document.getElementsByClassName("tabcontent");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none'; // hide all tab content
        }
        document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need
     
        // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
        var x = document.getElementsByClassName("tabmenu");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].className = 'tabmenu'; 
        }
        document.getElementById(rudr_tab_id).className = 'tabmenu active';
    }

}
