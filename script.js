const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    lerp: 0.04
});
new ResizeObserver(() => scroll.update()).observe(document.querySelector('main'));


document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.ri-menu-3-line');
    const dropdownContent = document.querySelector('.dropdown-content');

    menu.addEventListener('click', () => {
        dropdownContent.classList.toggle('active');
    });
});



function video(){
var main = document.querySelector("main");
var cursor = document.querySelector(".cursor");
var video1 = document.querySelector(".daak video");
var value = "Pause";

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.clientX + "px",
        y: dets.clientY + "px",
        duration: 1,
        ease: "back.out",    
    })
})
scroll.on('scroll', function() {
    cursor.style.top = `${window.scrollY + scroll.scroll.instance.delta.y}px`;
    cursor.style.left = `${window.scrollX + scroll.scroll.instance.delta.x}px`;
});

video1.addEventListener("mouseenter",function(){
    cursor.innerHTML = value,
    gsap.to(cursor,{
        height: "90px",
        width:"90px"
    })
})
video1.addEventListener("mouseleave",function(){
    cursor.innerHTML = "",
    gsap.to(cursor,{
        height: "30px",
        width:"30px"
    })
})
video1.addEventListener("click",function(){
    if (video1.paused) {
        video1.play();
        value = "Pause"
        cursor.innerHTML = "Pause"
    } else {
        video1.pause();
        value = "Play"
        cursor.innerHTML = "Play"
    }
    
})
}
video()

function navbar(){
    var hero = document.querySelector(".heroSection");
var menu = document.querySelector(".dropdown .menu")

var nav = gsap.timeline()
nav.to(".dropdown-content",{
    right: 0,
    duration: 0.5
})
nav.from(".dropdown-content a",{
    x: 150,
    duration: 0.7,
    stagger: 0.26,
    opacity: 0,
    color: "orange",
})

nav.pause()

menu.addEventListener("click",function(){
    nav.play()
})
hero.addEventListener("click",function(){
    nav.reverse()
})
}
navbar()

function Daakcontent() {
    const initBoxes = () => {
        let previousBox = document.querySelector('.box-1'); // Set the initial box
        const boxes = document.querySelectorAll('.box');
        const isSmallScreen = window.matchMedia("(max-width: 1200px)").matches;

        // Reset all boxes
        boxes.forEach(box => {
            gsap.set(box, { height: isSmallScreen ? '15%' : '100%', width: isSmallScreen ? '100%' : '15%' });
            gsap.set(box.querySelector('.image'), { opacity: 0 });
            gsap.set(box.querySelector('.content'), { opacity: 0, scale: 0.9 });
            gsap.set(box.querySelector('.content p'), { scale: 0.7 });
            gsap.set(box.querySelector('.content button'), { scale: 0.95 });
            gsap.set(box.querySelector('h2'), { opacity: 1, scale: 1.05 });
        });

        // Set initial active box
        if (isSmallScreen) {
            gsap.set(previousBox, { height: '50%' });
        } else {
            gsap.set(previousBox, { width: '50%' });
        }
        gsap.set(previousBox.querySelector('.image'), { opacity: 1 });
        gsap.set(previousBox.querySelector('.content'), { opacity: 1, scale: 1 });
        gsap.set(previousBox.querySelector('.content p'), { scale: 1 });
        gsap.set(previousBox.querySelector('.content button'), { scale: 1 });
        gsap.set(previousBox.querySelector('h2'), { opacity: 0, scale: 1 });

        // Add event listeners
        boxes.forEach((box) => {
            box.addEventListener('mouseenter', function () {
                if (previousBox && previousBox !== box) {
                    if (isSmallScreen) {
                        gsap.to(previousBox, { height: '15%', duration: 0.4, ease: "circ.in" });
                    } else {
                        gsap.to(previousBox, { width: '15%', duration: 0.4, ease: "circ.in" });
                    }
                    gsap.to(previousBox.querySelector('.image'), { opacity: 0, duration: 0.4, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content'), { opacity: 0, scale: 0.9, duration: 0.4, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content p'), { scale: 0.7, duration: 0.5, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content button'), { scale: 0.95, duration: 0.7, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('h2'), { opacity: 1, scale: 1.05, duration: 0.4, ease: "circ.in" });
                }

                if (isSmallScreen) {
                    gsap.to(box, { height: '50%', duration: 0.4, ease: "circ.in" });
                } else {
                    gsap.to(box, { width: '50%', duration: 0.4, ease: "circ.in" });
                }
                gsap.to(box.querySelector('.image'), { opacity: 1, duration: 0.4, ease: "circ.in" });
                gsap.to(box.querySelector('.content'), { opacity: 1, scale: 1, duration: 0.4, ease: "circ.in" });
                gsap.to(box.querySelector('.content p'), { scale: 1, duration: 0.5, ease: "circ.in" });
                gsap.to(box.querySelector('.content button'), { scale: 1.05, duration: 0.7, ease: "circ.in" });
                gsap.to(box.querySelector('h2'), { opacity: 0, scale: 0.95, duration: 0.4, ease: "circ.in" });

                previousBox = box; // Update the previously active box
            });
        });
    };

    document.addEventListener("DOMContentLoaded", initBoxes);
    window.addEventListener('resize', initBoxes); // Add resize event listener
}

Daakcontent();


function Partner(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        speed: 3000,  // Increase speed for a smooth transition
        autoplay: {
            delay: 0,  // Set delay to 0 to have a continuous transition
            disableOnInteraction: false,
            },
        });
}
Partner()


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:true
        },
        1300:{
            items:3,
            nav:false,
            loop:true
        }
    }
    })


var tl = gsap.timeline();

tl.to(".daak",{
    duration: 1,
    opacity: 1,
    scale: 1
})


