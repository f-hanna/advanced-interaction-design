const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#title",
      start: "top top",
      end: "+=4000",
      scrub: 1,
      pin: true,
      // markers: true
    }
  });
  tl.to("#title-text", { yPercent: -50, duration: 3 })
  tl.to("#title-text", { yPercent: 30, opacity: 1, duration: 15 })
  tl.to("#title-text", { rotation: -90, duration: 5 })
  tl.to("#title-text", { rotation: -180, duration: 5 })
  tl.to("#title-text", { rotation: -270, duration: 5 })
  tl.to("#title-text", { rotation: -360, duration: 5 })
  tl.to("#title-text", {
    yPercent: 200,
    opacity: 0,
    duration: 20
  })
  