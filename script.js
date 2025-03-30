function enteranimation() {
var enteranimation = gsap.timeline();

enteranimation.from(".logo",{
    y:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    ease:"power2.out",
});
enteranimation.from(".nav ul li",{
    y:-50,
    duration:0.7,
    delay:0.2,
    opacity:0,
    ease:"sine.out",
    stagger:0.3,
});

enteranimation.from(".hamburger i",{
    y:-50,
    duration:0.7,
    delay:0.2,
    opacity:0,
    ease:"sine.out",
});

enteranimation.from(".hero span",{

    x:-50,
    duration:1,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
});

enteranimation.from("#leaf3",{

    x:50,
    duration:2,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
}, 'leaf');


enteranimation.from("#leaf2",{

    x:-50,
    duration:2,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
}, 'leaf');


enteranimation.from("#leaf",{

    x:50,
    duration:2,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
}, 'leaf');

enteranimation.from("#orange",{
    x:50,
    duration:2,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
}, 'fantaorg');


enteranimation.from("#orange-cut",{
    x:-50,
    duration:2,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
}, 'fantaorg');


enteranimation.from("#fanta",{
    duration:1.2,
    delay:0.2,
    opacity:0,
    ease:"power2.out",
    stagger:0.3,
}, 'fantaorg');
}


function section1animation() {
var tl= gsap.timeline({scrollTrigger:{
   
    trigger:".section1",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    //markers:true,
  }});


tl.to("#fanta",{
    top:"120%",
    left:"3%",
    duration:1, 
    rotate:360,
}, 'orange');


tl.to("#orange-cut",{
    top:"155%",
    left:"23%",
    duration:1,
}, 'orange');  

tl.to("#orange",{
    scaleX:0.8,
    scaleY:0.8,
    top:"160%",
    left:"70%",
    duration:1,
},'orange');

tl.to("#leaf",{
    top:"108%",
    left:"61%",
    duration:1,
    rotate:125,
},'orange');

tl.to("#leaf2",{
    top:"105%",
    right:"85%",
    duration:1,
    rotate:105,
},'orange');
}


function section2animation() {
var tl2= gsap.timeline({scrollTrigger:{
    trigger:".section2",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    //markers:true,
  }});


tl2.to("#fanta",{
    top:"220%",
    left:"30%",
    duration:1,
}, 'fanta');


tl2.to("#orange-cut",{
    scaleX:1.2,
    scaleY:1.2,
    top:"210%",
    left:"42%",
    duration:1,
}, 'fanta');

}


window.addEventListener("load", function() {
    enteranimation();
});
section1animation();
section2animation();