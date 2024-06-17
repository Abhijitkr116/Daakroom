menuData = document.querySelector("nav .dropdown-content")
var flag = 0;

document.querySelector("nav .menu").addEventListener("click", function(){
    if(flag == 0){
        menuData.style.opacity = 1,
        menuData.style.left = "-8rem",
        flag++
    }
    else{
        menuData.style.opacity = 0,
        menuData.style.left = "10rem",
        flag--
    }
})




const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    // lerp: 0.05
});


var main = document.querySelector("main");
var cursor = document.querySelector(".cursor");
var video1 = document.querySelector(".daak video");

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
    cursor.innerHTML = "Pause",
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
        cursor.innerHTML = "Pause"
    } else {
        video1.pause();
        cursor.innerHTML = "Play"
    }
    
})




var tl = gsap.timeline();

tl.to(".daak",{
    duration: 1,
    opacity: 1,
    scale: 1
})

