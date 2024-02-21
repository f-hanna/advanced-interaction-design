const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: true,
    // markers: true
  }
});
tl.to(".box", { yPercent: 10, duration: 3 })
tl.to(".box", { rotation: 360, duration: 5 })
tl.to(".box", { xPercent: 350, duration: 3 })
tl.to(".box", { rotation: 180, duration: 2 })
tl.to(".box", { yPercent: 100, duration: 6 })
tl.to(".box", { rotation: 180, duration: 2 })
tl.to(".box", { xPercent: -90, duration: 3 })
tl.to(".box", { yPercent: -30, duration: 6 })
tl.to(".box", { rotation: 180, duration: 2 })
tl.to(".box", {
  yPercent: 50,
  xPercent: 30,
  duration: 6
})
tl.to(".box", { rotation: 360, duration: 5 })
