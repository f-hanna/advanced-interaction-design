// Create a function to generate a random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a star element
function createStar(containerWidth, containerHeight) {
    const star = document.createElement('div');
    star.className = 'bg-star';
    const size = randomInRange(1, 4);
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = randomInRange(0, containerWidth - size) + 'px'; // Adjust left position
    star.style.top = randomInRange(0, containerHeight - size) + 'px'; // Adjust top position
    return star;
}


// Function to add stars to the background
function fillBackgroundWithStars() {
    const numStars = 300; // Number of stars
    const container = document.querySelector('.star-container');

    const containerWidth = container.clientWidth; // Get container width
    const containerHeight = container.clientHeight; // Get container height

    // Create stars and append them to the container
    for (let i = 0; i < numStars; i++) {
        const star = createStar(containerWidth, containerHeight); // Pass container dimensions
        container.appendChild(star);
    }
    // Blinking effect
    setInterval(function () {
        const stars = document.querySelectorAll('.bg-star');
        stars.forEach(function (star) {
            star.style.opacity = Math.random(); // Random opacity to simulate blinking
        });
    }, 500); // Blinking interval in milliseconds
}

// Call the function to fill background with stars when the DOM is loaded
document.addEventListener('DOMContentLoaded', fillBackgroundWithStars);
