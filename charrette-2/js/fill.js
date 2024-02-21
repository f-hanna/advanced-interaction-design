const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');

const scrollProgressBar = () => {
    const windowHeight = window.innerHeight; // Height of the viewport
    const sectionHeight = section.offsetHeight; // Height of the section
    const sectionOffset = section.offsetTop; // Offset of the section from the top of the document
    const scrollTop = window.scrollY; // Current scroll position

    // Calculate the distance of the section from the top of the viewport
    const distanceFromTop = scrollTop - sectionOffset;

    // Calculate the percentage of the section that's scrolled into view from the top
    let progressPercentage = (distanceFromTop / sectionHeight) * 1000;

    // Ensure progressPercentage is between 0 and 100
    progressPercentage = Math.max(0, Math.min(progressPercentage, 100));

    // Set the height of the progress bar based on the calculated percentage
    progressBar.style.height = `${progressPercentage}%`;
};

window.addEventListener('scroll', scrollProgressBar);
window.addEventListener('resize', scrollProgressBar); // Update progress on window resize
