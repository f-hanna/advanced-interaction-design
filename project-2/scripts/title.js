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

//Set ScrollTrigger between sections: https://gsap.com/community/forums/topic/30744-how-use-scrolltrigger-to-move-between-sections/
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
        end: "+=5000",
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

// console.log(protoStars)

protoStars.forEach((protoStar) => {
    const size = randomInRange(.5, 2);
    protoStar.style.width = size + 'em';
    protoStar.style.height = size + 'em';
    protoStar.style.left = randomInRange(centerX - 100, centerX + 100) + 'px'; // Adjust left position
    protoStar.style.top = randomInRange(centerY - 100, centerY + 100) + 'px'; // Adjust top position

});

const protoTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-2",
        start: "top top",
        end: "+=7000",
        scrub: 2,
        markers: true,
        pin: true,
        pinSpacing: false,
        overwrite: "auto"
    },
});


protoTl.to("#stage-proto", {  //tween
    yPercent: 320,
    opacity: 1,
    duration: 5
})








