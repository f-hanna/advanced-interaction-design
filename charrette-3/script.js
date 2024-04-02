// SITE 1
function toggleBlur() {
    var lenses = document.querySelectorAll('.lens-background');
    for (var i = 0; i < lenses.length; i++) {
        lenses[i].classList.toggle('blur-effect');
    }
}

//SITE 2
let grayscale = 100
let round = 5

function decreaseGrayscale() {
    round = round - 1
    var img = document.getElementById('img-rainbow');
    var rainbowBtn = document.getElementById('rainbow-btn');
    grayscale = grayscale - 20;
    rainbowBtn.innerHTML = "Load " + round + " more times"
    if (round < 1) {
        rainbowBtn.innerHTML = "Done Loading"
        grayscale = 0; // Ensure grayscale value doesn't go below 0
    }
    img.style.filter = `grayscale(${grayscale}%)`; // Apply new grayscale value
}

//SITE 3
var site3Imgs = [
    "../imgs/site-3/movie-1.jpg",
    "../imgs/site-3/movie-2.jpg",
    "../imgs/site-3/movie-3.jpg",
    "../imgs/site-3/movie-4.jpg",
    "../imgs/site-3/movie-5.jpg",
    "../imgs/site-3/movie-6.jpg",
    "../imgs/site-3/movie-7.jpg",
    "../imgs/site-3/movie-8.jpg",
    "../imgs/site-3/movie-9.jpg",
    "../imgs/site-3/movie-10.jpg"
]
var site3Index = 0
var wall = document.getElementById("wall-wrapper")

function addPoster() {

    if (site3Index < 10) {

        let poster = document.createElement("img");
        poster.setAttribute("class", "img")
        poster.setAttribute("src", site3Imgs[site3Index])

        // Get the width and height of the wall-wrapper
        let wallWidth = wall.offsetWidth;
        let wallHeight = wall.offsetHeight;

        // Generate random top and left positions
        let randomTop = Math.floor(Math.random() * (wallHeight - 220)); // Adjust 100 to fit the size of your poster
        let randomLeft = Math.floor(Math.random() * (wallWidth - 150)); // Adjust 100 to fit the size of your poster

        // Apply random positions to the poster
        poster.style.position = "absolute";
        poster.style.top = randomTop + "px";
        poster.style.left = randomLeft + "px";

        wall.appendChild(poster)
        site3Index = site3Index + 1

    } 
    else {
        document.getElementById("movie-btn").innerHTML = "Loaded All Posters"
    }


}