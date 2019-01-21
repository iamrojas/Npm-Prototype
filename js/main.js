{
    // Test Animation Class
    class Animation {
        constructor(el){
            el = document.querySelector(el);
            this.DOM = {el: el};
        }
        
        fadeDown(target, context){
            let introAnime = new Waypoint({
                element: this.DOM.el,
                handler: function(direction) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [-50, 0],
                        duration: 2000,
                        easing: 'easeInOutQuad',
                        delay: function(el, index) {
                            return index * 800;
                        },
                    })
                },
                context: context,
                offset: 1500
            });
        }

        fadeLeft(target, context){
            let introAnime = new Waypoint({
                element: this.DOM.el,
                handler: function(direction) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        duration: 1000,
                        easing: 'easeOutQuad',
                        delay: function(el, index) {
                            return index * 300;
                        },
                    })
                },
                context: context,
                offset: 1500
            });
        }
    }

    //Initialize the animations

    // const heroAnimation= new Animation('.hero');
    // heroAnimation.fadeLeft([".hero__headline" , ".hero__button"]);

    
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
}
