const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#title",
        start: "top top",
        end: "+=5000",
        scrub: 2,
        pin: true,
        onEnter: function() {
            document.getElementById("title-text").style.display = "block";
        },
        onLeaveBack: function() {
            document.getElementById("title-text").style.display = "block";
        },
        onEnterBack: function() {
            document.getElementById("title-text").style.display = "block";
        },
        onLeave: function() {
            document.getElementById("title-text").style.display = "none";
        }
        // markers: true
    }
});
tl.to("#title-text", { yPercent: -50, duration: 3 })
tl.to("#title-text", { yPercent: 30, opacity: 1, duration: 15 })
tl.to("#title-text", { rotation: -90, duration: 10 })
tl.to("#title-text", { rotation: -180, duration: 10 })
tl.to("#title-text", { rotation: -270, duration: 10 })
tl.to("#title-text", { rotation: -360, duration: 10 })
tl.to("#title-text", {
    yPercent: 200,
    opacity: 0,
    duration: 20,
    
})


const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-1",
        start: "top top",
        end: "+=5000",
        scrub: 2,
        pin: true,
        onEnter: function() {
            document.getElementById("title-text").style.display = "block";
        },
        onLeaveBack: function() {
            document.getElementById("title-text").style.display = "block";
        },
        onEnterBack: function() {
            document.getElementById("title-text").style.display = "block";
        },
        onLeave: function() {
            document.getElementById("title-text").style.display = "none";
        }
        // markers: true
    }
});
tl1.to("#title-text", { yPercent: -50, duration: 3 })
tl1.to("#title-text", { yPercent: 30, opacity: 1, duration: 15 })
tl1.to("#title-text", { rotation: -90, duration: 10 })
tl1.to("#title-text", { rotation: -180, duration: 10 })
tl1.to("#title-text", { rotation: -270, duration: 10 })
tl1.to("#title-text", { rotation: -360, duration: 10 })
tl1.to("#title-text", {
    yPercent: 200,
    opacity: 0,
    duration: 20,
    
})
