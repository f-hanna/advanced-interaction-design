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
gsap.set(".section:not(#two)", { autoAlpha: 0 });

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

// protoStars.forEach((protoStar, index) => {
//     gsap.set(
//         protoStar,
//       {
//         x: centerX / 2,
//         y: centerY / 2,
//       },
//       0
//     );
//   });



// console.log(protoStars)


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
        // onUpdate: (self) => {
        //     rotateStars(self);
        // }
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

// const pStars = gsap.utils.toArray(".proto-start");

// console.log(pStars)

// pStars.forEach((star) => {

//     protoTl.to(star,
//         {

//             rotation: 360 * 5,
//             transformOrigin: "40px -100px",
//             duration: 10, ease: 'none',


//         })


// }, 0)

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




// protoTl.play();

/**********
 *  HIGH MASS STAR * 
 */

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.getElementById('mass');
//     const numStars = 100; // Adjust this number as needed
//     const spacing = 3;
//     const angleChange = 0.1;
//     let angle = 0;
//     let radius = 0;

//     for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.classList.add('mass-star');
//         container.appendChild(star);
//     }

//     const stars = document.querySelectorAll('.mass-star');
//     stars.forEach((star, index) => {
//         const x = radius * Math.cos(angle);
//         const y = radius * Math.sin(angle);
//         star.style.left = `${x}px`;
//         star.style.top = `${y}px`;
//         angle += angleChange;
//         radius += spacing;
//     });
// });

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

    // stars.forEach((star) => {

    //     const currentX = parseFloat(star.style.left) + parseFloat(star.style.width) / 2;
    //     const currentY = parseFloat(star.style.top) + parseFloat(star.style.height) / 2;
    //     // console.log(progress)
    //     gsap.to(star, {
    //         duration: randomInRange(.5, 1),
    //         x: (centerX - currentX) * progress,
    //         y: (centerY - currentY) * progress,
    //         yoyo: true,
    //         repeat: -1,
    //         ease: "power1.inOut",
    //     });
    // });
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
        // yPercent: 120,
        // yPercent: 80,
        // xPercent: 100,
        width: "1em",
        height: "1em",
        opacity: 0,
        duration: 3
    }, 0
    );


/******************************* 
 * RED SUPER GIANT
**************************************/











