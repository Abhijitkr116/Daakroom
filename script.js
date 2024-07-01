const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    lerp: 0.04
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

function Daakcontent(){
    document.addEventListener("DOMContentLoaded", function () {

        if (window.matchMedia("(max-width: 576px)").matches){
            let previousBox = document.querySelector('.box-1'); // Set the initial box

        gsap.set(previousBox, { height: '50%' }); // Set initial active box to 50%
        gsap.set(previousBox.querySelector('.image'), { opacity: 1 });
        gsap.set(previousBox.querySelector('.content'), { opacity: 1, scale: 1 });
        gsap.set(previousBox.querySelector('.content p'), { scale: 1 });
        gsap.set(previousBox.querySelector('.content button'), { scale: 1 });
        gsap.set(previousBox.querySelector('h2'), { opacity: 0, scale: 1 });

        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box) => {
            box.addEventListener('mouseenter', function () {
                if (previousBox && previousBox !== box) {
                    gsap.to(previousBox, { height: '15%', duration: 0.4, ease: "circ.in" }); // Reset the height of the previously active box
                    gsap.to(previousBox.querySelector('.image'), { opacity: 0, duration: 0.4, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content'), { opacity: 0, scale: 0.9, duration: 0.4, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content p'), { scale: 0.7, duration: 0.5, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content button'), { scale: 0.95, duration: 0.7, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('h2'), { opacity: 1, scale: 1.05, duration: 0.4, ease: "circ.in" });
                }
                gsap.to(box, { height: '50%', duration: 0.4, ease: "circ.in" }); // Set the height of the hovered box to 50%
                gsap.to(box.querySelector('.image'), { opacity: 1, duration: 0.4, ease: "circ.in" });
                gsap.to(box.querySelector('.content'), { opacity: 1, scale: 1, duration: 0.4, ease: "circ.in" });
                gsap.to(box.querySelector('.content p'), { scale: 1, duration: 0.5, ease: "circ.in" });
                gsap.to(box.querySelector('.content button'), { scale: 1.05, duration: 0.7, ease: "circ.in" });
                gsap.to(box.querySelector('h2'), { opacity: 0, scale: 0.95, duration: 0.4, ease: "circ.in" });

                previousBox = box; // Update the previously active box
            });
        });
        }
        else{
            let previousBox = document.querySelector('.box-1'); // Set the initial box

        gsap.set(previousBox, { width: '50%' }); // Set initial active box to 50%
        gsap.set(previousBox.querySelector('.image'), { opacity: 1 });
        gsap.set(previousBox.querySelector('.content'), { opacity: 1, scale: 1 });
        gsap.set(previousBox.querySelector('.content p'), { scale: 1 });
        gsap.set(previousBox.querySelector('.content button'), { scale: 1 });
        gsap.set(previousBox.querySelector('h2'), { opacity: 0, scale: 1 });

        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box) => {
            box.addEventListener('mouseenter', function () {
                if (previousBox && previousBox !== box) {
                    gsap.to(previousBox, { width: '15%', duration: 0.4, ease: "circ.in" }); // Reset the width of the previously active box
                    gsap.to(previousBox.querySelector('.image'), { opacity: 0, duration: 0.4, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content'), { opacity: 0, scale: 0.95, duration: 0.4, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content p'), { scale: 0.7, duration: 0.5, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('.content button'), { scale: 0.95, duration: 0.7, ease: "circ.in" });
                    gsap.to(previousBox.querySelector('h2'), { opacity: 1, scale: 1.05, duration: 0.4, ease: "circ.in" });
                }
                gsap.to(box, { width: '50%', duration: 0.4, ease: "circ.in" }); // Set the width of the hovered box to 50%
                gsap.to(box.querySelector('.image'), { opacity: 1, duration: 0.4, ease: "circ.in" });
                gsap.to(box.querySelector('.content'), { opacity: 1, scale: 1.05, duration: 0.4, ease: "circ.in" });
                gsap.to(box.querySelector('.content p'), { scale: 1.05, duration: 0.5, ease: "circ.in" });
                gsap.to(box.querySelector('.content button'), { scale: 1.05, duration: 0.7, ease: "circ.in" });
                gsap.to(box.querySelector('h2'), { opacity: 0, scale: 0.95, duration: 0.4, ease: "circ.in" });

                previousBox = box; // Update the previously active box
            });
        });
    }
});
        
}
Daakcontent()



var tl = gsap.timeline();

tl.to(".daak",{
    duration: 1,
    opacity: 1,
    scale: 1
})

