

gsap.registerPlugin(ScrollTrigger);

// Get the viewport dimensions
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


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


const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#inner-1",
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

// Create atoms dynamically and animate them
for (let i = 0; i < 30; i++) {

    const star = document.createElement('div');
    star.className = 'nebula-star';
    const size = randomInRange(1, 4);
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = randomInRange(0, nebulaW - size) + 'px'; // Adjust left position
    star.style.top = randomInRange(0, nebulaH - size) + 'px'; // Adjust top position
    nebulaDiv.appendChild(star);
}

// GSAP ScrollTrigger effect
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: "#two",
        start: "top 10",
        end: "bottom top",
        pin: true,
        pinSpacing: false,

        onEnter: (self) => {
            animateStars(self);
        },

        onUpdate: (self) => {
            animateStars(self);
        },
    },
});

const stars = gsap.utils.toArray(".nebula-star");

function animateStars(self) {
    const progress = self.progress;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;


    stars.forEach((star) => {

        const currentX = parseFloat(star.style.left) + parseFloat(star.style.width) / 2;
        const currentY = parseFloat(star.style.top) + parseFloat(star.style.height) / 2;
        // console.log(progress)
        gsap.to(star, {
            duration: randomInRange(0.1, 0.5),
            x: (centerX - currentX) * progress,
            y: (centerY - currentY) * progress,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    });
}
// // Iterate over each .nebula-star element
// gsap.utils.toArray('.nebula-star').forEach((star) => {
//     // Add a tween to the timeline for each star
//     timeline.to(star, {
//         scrollTrigger: {
//             trigger: "#two",
//             start: 'top top',
//             end: "+=5000",
//             scrub: true,
//             onUpdate: (self) => {
//                 const progress = self.progress;
//                 const centerX = window.innerWidth / 2;
//                 const centerY = window.innerHeight / 2;
//                 const currentX = parseFloat(star.style.left) + parseFloat(star.style.width) / 2;
//                 const currentY = parseFloat(star.style.top) + parseFloat(star.style.height) / 2;
//                 // Adjusted x and y based on progress
//                 const adjustedX = centerX - currentX + (progress - 0.5) * 100;
//                 const adjustedY = centerY - currentY + (progress - 0.5) * 100;
//                 // Add tween to the timeline
//                 return gsap.to(star, {
//                     duration: .5,
//                     x: adjustedX,
//                     y: adjustedY,
//                     ease: "power1.inOut"
//                 });
//             }
//         }
//     });
// });