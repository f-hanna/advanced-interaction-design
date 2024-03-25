/***
 
 * GLOBAL

 */

// Register plugins
gsap.registerPlugin(ScrollTrigger); // Register MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin)

// Get the viewport dimensions
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

//Set all intial sections to 0
gsap.set(".section:not(#two):not(#five)", { autoAlpha: 0 });

// https://gsap.com/community/forums/topic/30744-how-use-scrolltrigger-to-move-between-sections/
document.querySelectorAll(".section").forEach((section, index, sections) => {
    if (index > 0) {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                toggleActions: "play play play reverse",
                markers: true
            },
            duration: 0.001,
            autoAlpha: 1,
        });
    }
});


/***
 
 * TITLE
 */


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#title",
        start: "top top",
        end: "+=10000",
        scrub: 2,
        pin: true,
        onEnter: function () {
            document.getElementById("title-text").style.display = "block";
        },
        onLeaveBack: function () {
            document.getElementById("title-text").style.display = "block";
        },
        onEnterBack: function () {
            document.getElementById("title-text").style.display = "block";
        },
        onLeave: function () {
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



/******************************* 
 * NEBULA
**************************************/

// Function to create a random number within the range of the screen
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const nebulaDiv = document.getElementById("nebula")
var nebulaW = nebulaDiv.clientWidth; // Get container width
var nebulaH = nebulaDiv.clientHeight; // Get container height

for (let i = 0; i < 30; i++) {

    const star = document.createElement('div');
    star.className = 'nebula-star';
    const size = randomInRange(.5, 2);
    star.style.width = size + 'em';
    star.style.height = size + 'em';
    star.style.left = randomInRange(0, nebulaW - size) + 'px'; // Adjust left position
    star.style.top = randomInRange(0, nebulaH - size) + 'px'; // Adjust top position
    nebulaDiv.appendChild(star);
}



const nebulaT1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-1",
        start: "top top",
        end: "+=7000",
        scrub: 2,
        markers: true,
        pin: true,
        pinSpacing: false,

        onEnter: (self) => {
            animateStars(self);
        },

        onUpdate: (self) => {
            animateStars(self);
        }
    },
});

nebulaT1.set("#stage-nebula", {
    yPercent: -100,
    opacity: 0
}); // Set initial opacity to 0

nebulaT1.to("#stage-nebula", {  //tween
    yPercent: 120,
    opacity: 1,
    // fontSize: "1em", 
    duration: 5
})

const stars = gsap.utils.toArray(".nebula-star");

function animateStars(self) {
    const progress = self.progress;

    stars.forEach((star) => {

        const currentX = parseFloat(star.style.left) + parseFloat(star.style.width) / 2;
        const currentY = parseFloat(star.style.top) + parseFloat(star.style.height) / 2;
        // console.log(progress)
        gsap.to(star, {
            duration: randomInRange(.5, 1),
            x: (centerX - currentX) * progress,
            y: (centerY - currentY) * progress,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    });
}

/******
 *      PROTOSTAR
 *****/

const protoStars = document.querySelectorAll(".proto-start")



protoStars.forEach((protoStar) => {
    const size = randomInRange(.5, 2);
    protoStar.style.width = size + 'em';
    protoStar.style.height = size + 'em';
    protoStar.style.left = randomInRange(centerX - 200, centerX + 200) + 'px'; // Adjust left position
    protoStar.style.top = randomInRange(centerY - 200, centerY + 200) + 'px'; // Adjust top position
});


const protoTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-2",
        start: "top top",
        end: "+=9000",
        scrub: 1,
        markers: true,
        pin: true,
        pinSpacing: false,
        overwrite: "auto",
        toggleClass: "color"

    },
});
protoTl.set("#stage-proto", {
    yPercent: 120,
    opacity: 0
});
protoTl.to("#stage-proto", {  //tween
    yPercent: 360,
    opacity: 1,
    duration: 5
})

protoTl.to(".proto-start", {  //tween

    boxShadow:
        "30px 10px 30px 80px #ffffffa0",
    duration: 6,
})

protoTl.to(".proto-start", {  //tween
    width: "10em",
    height: "10em",
    transformOrigin: "center center",
    xPercent: -60,
    backgroundColor: "rgba(255, 255, 159, 0.8)",
    boxShadow:
        "30px 10px 100px 70px rgba(200, 255, 255, 0.164)",

    duration: 4
})

protoTl.to(".proto-start", {  //tween
    width: "100vh",
    height: "100vh",
    borderRadius: 100,
    xPercent: -50,
    yPercent: -50,
    duration: 8,
})


/**********
 *  HIGH MASS STAR * 
 */


const massTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-3",
        start: "top top",
        end: "+=15000",
        scrub: 2,
        markers: true,
        pin: true,
        pinSpacing: false,
        overwrite: "auto",
        onUpdate: (self) => {
            spiralStars(self);
        }
    },
});

function spiralStars(self) {
    const progress = self.progress;

    const container = document.getElementById('mass');
    const numStars = Math.floor(10 * progress) / 2; // Adjust this number as needed
    console.log(numStars)
    const spacing = 3;
    const angleChange = 0.1;
    let angle = 0;
    let radius = 0;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('mass-star');
        container.appendChild(star);
    }

    const stars = document.querySelectorAll('.mass-star');
    stars.forEach((star, index) => {
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        angle += angleChange;
        radius += spacing;
    });
}

massTl.set("#mass-init", {
    // yPercent: 50,
    opacity: 1
}).set("#mass", {
    // yPercent: 50,
    opacity: 0
});

massTl.from(".line", 1.8, {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    delay: 1,
    skewY: 20,
    stagger: {
        amount: 1
    }
})

massTl.to("#mass", {
    // yPercent: 120,
    // yPercent: 100,
    // xPercent: 50,
    width: "1em",
    height: "1em",
    rotation: 360 * 5,
    transformOrigin: "center top",
    opacity: 1,
    duration: 20
}, 0
)
    .to("#mass-init", {
        width: "1em",
        height: "1em",
        opacity: 0,
        duration: 3
    }, 0
    );


/******************************* 
 * RED SUPER GIANT
**************************************/

const redTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-4",
        start: "top top",
        end: "+=15000",
        scrub: .5,
        markers: true,
        pin: true,
        pinSpacing: false,
        overwrite: "auto",

    },
});

// redTl.from("#red", 1, {
//     yPercent: -100,
//     width: "10em",
//     height: "10em",
//     ease: "power4.out",
//     opacity: 0,
//     // skewY: 20,
//     stagger: {
//         amount: 1
//     }
// }, 0)
//     .from("#red-heading", 1, {
//         y: -100,
//         ease: "power4.out",
//         opacity: 0,
//         skewZ: 20,
//         // delay: 2,
//         // stagger: {
//         //     amount: 1
//         // }

//     }, 0)//start the duration of beating heart


redTl.to("#red", {
    // yPercent: 120,
    yPercent: 10,
    // xPercent: 50,
    width: "20em",
    height: "20em",
    transformOrigin: "center top",
    // delay: .5,
    opacity: 1,
    duration: .1
}, 0
).to("#red-heading", {
    opacity: 0,
    yPercent: 10,
    // delay: 1,
    ease: "power1.out",
    duration: .1
}, 0
);

redTl.to("#red", {
    transformOrigin: "center center",
    // delay: 5,
    opacity: .5,
    duration: .1,
    width: "17em",
    height: "17em"
}
)

redTl.to("#red", {

    transformOrigin: "center center",
    // delay: 5,
    opacity: 1,
    duration: .1,
    width: "19em",
    height: "19em"
}
)


redTl.to("#red", {

    transformOrigin: "center center",
    // delay: 5,
    opacity: .5,
    width: "15em",
    height: "15em",
    duration: .1
}
)

redTl.to("#red", {

    transformOrigin: "center cemter",
    // delay: 5,
    opacity: 1,
    width: "17em",
    height: "17em",
    duration: .05
}
)

redTl.to("#red", {

    transformOrigin: "center center",
    // delay: 5,
    opacity: .5,
    yPercent: 10,
    width: "13em",
    height: "13em",
    duration: .05
}
)

redTl.to("#red", {

    transformOrigin: "center center",
    // delay: 5,
    opacity: 1,
    width: "15em",
    yPercent: 50,
    height: "15em",
    duration: .05
}
)

redTl.to("#red", {
    // delay: 5,
    opacity: 1,
    width: "100vw",
    yPercent: -50,
    height: "100vw",
    backgroundColor: "white",
    duration: .1,
    scale: 2,
    boxShadow: "10px 30px 20px 5px rgba(255, 255, 255, .8)"
}
)

/******************************* 
 * RED SUPER GIANT
**************************************/

const supernovaTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-5",
        start: "top top",
        end: "+=10000",
        scrub: .5,
        markers: true,
        delay: 1,
        pin: true,
        pinSpacing: false,
        overwrite: "auto",

    },
});

supernovaTl.set('#heading-super', {
    opacity: 0,
    yPercent: -100
})
    .set('#heading-nova', {
        opacity: 0,
        yPercent: 100
    })
    .set('#nova-blackHole', {
        opacity: 0,
        yPercent: 100
    })

supernovaTl.to('#heading-super', {
    yPercent: 0,
    opacity: 1,
    // skewY: 0,
    duration: .1
})
    .to('#heading-nova', {
        yPercent: 0,
        opacity: 1,
        duration: .1
    }, 0)

supernovaTl.to('#nova-blackHole', {
    yPercent: 20,
    width: "5em",
    height: "5em",
    delay: .01,
    opacity: 1,
    duration: .1
})
    .to('#heading-super', {
        skewY: -60,
        delay: .1,
        duration: .1,
        yPercent: -40,
        xPercent: 40,
        scale: .5
    }, 0)

    .to('#heading-nova', {
        skewY: 60,
        delay: .1,
        duration: .1,
        yPercent: 40,
        xPercent: -40,
        scale: .5
    }, 0)


supernovaTl.to('#nova-blackHole', {
    yPercent: -20,
    width: "50em",
    height: "50em",
    delay: .11,
    opacity: 1,
    duration: 1
}, 0)
    .to('#heading-super', {
        delay: .15,
        opacity: 0,
        duration: .5,
        yPercent: -60,
        xPercent: 60,

    }, 0)

    .to('#heading-nova', {
        delay: .15,
        opacity: 0,
        duration: .5,
        yPercent: 40,
        xPercent: -40,

    }, 0)

    supernovaTl.to('#nova-blackHole', {
        yPercent: -20,
        width: "200em",
        height: "200em",
        delay: .21,
        // opacity: 1,
        duration: 2
    })












