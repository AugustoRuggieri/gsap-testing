setTimeout(() => console.log("Hello"), 0)
console.log("world!")

var tl = gsap.timeline({
    repeat: 2,
    repeatDelay: 1
})

gsap.timeline()
.to(".left-box", {
    duration: 4,
    x: 200,
    })
.to(".right-box", {
    duration: 3,
        x: -200,        
    }, "-=3")
.to(".center-box", {
    duration: 2,
    scale: 2,
    }, 2)
.from(".circle", {
    duration: 2.5,
    y: -100,
    stagger: 0.2,
    ease: "elastic"
}, "-=2")

gsap.from(".box1", {
    scrollTrigger: {
        trigger: ".section1",
        start: "top center"
    },
    x: -600,
  })
gsap.from(".box2", {
    scrollTrigger: {
        trigger: ".section1",
        start: "top center"
    },
    x: 600
  })

var mySplitText = new SplitText("#quote");