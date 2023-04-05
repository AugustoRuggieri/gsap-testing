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

let mySplitText = new SplitText("#quote", {type: "chars"});
let chars = mySplitText.chars;

gsap.from(chars, {
  yPercent: 130,
  stagger: 0.05,
  ease: "back-out",
  duration: .6,
  scrollTrigger: {
    trigger: "#quote",
    start: "top 80%",
    toggleActions: "restart pause reverse pause"
  }
})

gsap.set(".card", {position: "absolute"})

gsap.to(".card", {
  y: -50,
  stagger: .5,
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top top",
    end: "+=2000px"
  }
})

