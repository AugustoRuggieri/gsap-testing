setTimeout(() => console.log("Hello"), 0)
console.log("world!")

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

gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: true,
        markers: true
    }
})
.from(".box1", {
    x: -600,
    duration: 5
  })
.to(".box1", {
    backgroundColor: "purple",
  }, 2)
gsap.from(".box2", {
    scrollTrigger: {
        trigger: ".box2",
        start: "top center",
        markers: true
    },
    x: 600,
    duration: 5
  })

gsap.timeline()
.from("#orange", {xPercent: -100})
.from("#red", {xPercent: 100})

  ScrollTrigger.create({
    trigger: "#orange",
    start: "top top",
    end: "+=300px",
    pin: true
  })

// var mySplitText = new SplitText("#quote");