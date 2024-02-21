const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top top",
    end: "+=8000",
    scrub: 1,
    pin: true,
    markers: true
  }
});
tl.to(".box", {
  yPercent: 280,
  xPercent: 30,
  duration: 3
})
tl.to(".box", {
  yPercent: 100,
  xPercent: 80,
  duration: 4
})
tl.to(".box", {
  yPercent: 280,
  xPercent: 160,
  duration: 5
})
tl.to(".box", {
  yPercent: 160,
  xPercent: 200,
  duration: 5
})

tl.to(".box", {
  yPercent: 280,
  xPercent: 240,
  duration: 3
})

tl.to(".box", {
  yPercent: 240,
  xPercent: 280,
  duration: 7
})
tl.to(".box", {
  yPercent: 280,
  xPercent: 320,
  duration: 7
})

tl.to(".box", {
  xPercent: 400,
  duration: 7
})

tl.to(".box", {
  xPercent: 600,
  duration: 7
})
tl.to(".box", {
  xPercent: 700,
  duration: 7
})
tl.to(".box", {
  xPercent: 800,
  duration: 7
})
