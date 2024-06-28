const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    // lerp: 0.05
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
    duration: 0.6
})
nav.from(".dropdown-content a",{
    x: 150,
    duration: 0.7,
    stagger: 0.28,
    opacity: 0
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

var tl = gsap.timeline();

tl.to(".daak",{
    duration: 1,
    opacity: 1,
    scale: 1
})

