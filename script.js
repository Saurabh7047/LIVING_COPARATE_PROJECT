function loco(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
loco();




var flag = 0;
document.querySelector("#nav-menu").addEventListener("click", function () {
  if (flag == 0) {
    document.querySelector("#full-scr").style.opacity = 1;
    document.querySelector("#full-scr").style.top = 0;
    document.querySelector("#line1").style.rotate = "50deg";
    document.querySelector("#line2").style.opacity = 0;
    document.querySelector("#line3").style.rotate = "-50deg";

    flag = 1;
  } else {
    document.querySelector("#full-scr").style.opacity = 0;
    document.querySelector("#full-scr").style.top = "-100%";
    document.querySelector("#line1").style.rotate = "0deg";
    document.querySelector("#line2").style.opacity = 1;
    document.querySelector("#line3").style.rotate = "0deg";
    flag = 0;
  }
});

// changes images js ----


  var image = document.getElementById("image");
  var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
  setInterval(function () {
    var random = Math.floor(Math.random() * 4);
    image.src = `${images[random]}`;
    gsap.to("#image",{
      scale:1
    })
  }, 8300);


// counting js ---
var count = document.querySelector(".counter")
flag = 02;
setInterval(function(){
    if(flag < 05){
        count.innerHTML = `${flag}` 
        flag ++;
      }
      else{
        flag = 1
      }
},8300)

// growth line js ---

var grow = 0;
setInterval(function () {
  if (grow < 100) {
    document.querySelector("#growth").style.width = `${grow}%`;
    grow++;
  } else {
    grow = 0;
  }
}, 80);


// page4-button js ---

var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var img = document.querySelector("#page4-right #img2")
var h1 = document.querySelector("#page4-left h1")
var tl = gsap.timeline()
btn2.addEventListener("click",function(){
    img.style.opacity = 1
    img.style.scale = 1
    btn1.style.backgroundColor = "transparent"
    btn1.style.boxShadow = "0 0 0px transparent"
    btn2.style.backgroundColor = "#FEF9F3"
    btn2.style.boxShadow = "-6px 6px 1px black"
    h1.innerHTML = "THE BREAK ROOM"
    tl.from("#page4-left h1",{
      y:50,
      duration:1,
      stagger:1,
      onStart:function(){
        $('#page4-left h1').textillate({ in: { effect: 'fadeInUp' } });
    }
    })
})

btn1.addEventListener("click",function(){
  img.style.scale = 0
  img.style.opacity = 0
  btn1.style.backgroundColor = "#FEF9F3"
  btn1.style.boxShadow = "-6px 6px 1px black"
    btn2.style.backgroundColor = "transparent"
    btn2.style.boxShadow = "0 0 0px transparent"
    h1.innerHTML = "THE GROUP CHAT"
    tl.from("#page4-left h1",{
      y:50,
      duration:1,
      scrub:1,
      onStart:function(){
        $('#page4-left h1').textillate({ in: { effect: 'fadeInUp' } });
    }
    })
})


document.querySelector("#kuch1").addEventListener("mouseenter",function(){
  document.querySelector("#kuch1 img").style.scale = 1
})

document.querySelector("#kuch1").addEventListener("mouseleave",function(){
  document.querySelector("#kuch1 img").style.scale = 0
})

document.querySelector("#kuch1").addEventListener("mousemove",function(dets){
  document.querySelector("#kuch1 img").style.left = `${dets.x}px`
})

document.querySelector("#kuch2").addEventListener("mouseenter",function(){
  document.querySelector("#kuch2 img").style.scale = 1
})

document.querySelector("#kuch2").addEventListener("mouseleave",function(){
  document.querySelector("#kuch2 img").style.scale = 0
})

document.querySelector("#kuch2").addEventListener("mousemove",function(dets){
  document.querySelector("#kuch2 img").style.left = `${dets.x}px`
})

document.querySelector("#kuch3").addEventListener("mouseenter",function(){
  document.querySelector("#kuch3 img").style.scale = 1
})

document.querySelector("#kuch3").addEventListener("mouseleave",function(){
  document.querySelector("#kuch3 img").style.scale = 0
})

document.querySelector("#kuch3").addEventListener("mousemove",function(dets){
  document.querySelector("#kuch3 img").style.left = `${dets.x}px`
})

document.querySelector("#kuch4").addEventListener("mouseenter",function(){
  document.querySelector("#kuch4 img").style.scale = 1
})

document.querySelector("#kuch4").addEventListener("mouseleave",function(){
  document.querySelector("#kuch4 img").style.scale = 0
})

document.querySelector("#kuch4").addEventListener("mousemove",function(dets){
  document.querySelector("#kuch4 img").style.left = `${dets.x}px`
})

document.querySelector("#kuch5").addEventListener("mouseenter",function(){
  document.querySelector("#kuch5 img").style.scale = 1
})

document.querySelector("#kuch5").addEventListener("mouseleave",function(){
  document.querySelector("#kuch5 img").style.scale = 0
})

document.querySelector("#kuch5").addEventListener("mousemove",function(dets){
  document.querySelector("#kuch5 img").style.left = `${dets.x}px`
})

document.querySelector("#kuch6").addEventListener("mouseenter",function(){
  document.querySelector("#kuch6 img").style.scale = 1
})

document.querySelector("#kuch6").addEventListener("mouseleave",function(){
  document.querySelector("#kuch6 img").style.scale = 0
})

document.querySelector("#kuch6").addEventListener("mousemove",function(dets){
  document.querySelector("#kuch1 img").style.left = `${dets.x}px`
})



// gsap.from("#page1",{
//   y:800,
//   delay: 0.5,
//   duration:0.5
// })









//(js)
// $(document).mousemove(function(e){
//   $("body #image99").css({left:e.pageX, top:e.pageY});
// });