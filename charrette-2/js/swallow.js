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
tl.to(".circle", { scale: 15, duration: 3 })


