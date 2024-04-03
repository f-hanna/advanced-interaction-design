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

// SITE 4

function pixelateImage() {
    var img = document.getElementById('img-block');
    img.src = "../imgs/site-4/unpixellated.png"; // Apply CSS filter
}

//SITE 5
function openWindow() {
    var windowScreens = document.querySelectorAll(".window-screen");

    windowScreens.forEach((screen) =>
        screen.classList.toggle("open")
    );
}

//SITE 6 
function solve() {
    var input = document.getElementById("guess").value;
    var btn = document.getElementById("math-btn")
    var img = document.getElementById("img-math")

    if (input == 22) {
        btn.innerHTML = "Math GOAT moment"
        img.style.display = "block"
        document.getElementById("math-container").style.display = "none"

    } else {
        alert("git gud.")

    }
}

// SITE 7

function zoom() {
    var img = document.getElementById('img-planet');
    img.style.opacity = "100%";
    img.style.transform = 'scale(10)';
}

// SITE 8

function google() {

    var img = document.getElementById("img-holder")
    img.style.display = "block"

    setTimeout(function () {
        // document.getElementById("image-wrapper").style.height = "40vh"
        img.src = "https://media.licdn.com/dms/image/C5112AQESSXLEM7P8yw/article-inline_image-shrink_400_744/0/1552144216522?e=1716422400&v=beta&t=n6pWs_TvfstHfA0P_OQePB4JccxGaHOtisQexZSXFuU"
    }, 5000); // 5000 milliseconds = 5 seconds

}

// SITE 9

document.addEventListener("DOMContentLoaded", function() {
    shuffle()
});

function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function shuffle() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
        for (var column = 1; column <= 3; column++) { //For each column in this row

            var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        }
    }
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile9") {
        //Checking if white tile on the right
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        //Checking if white tile is above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        //Checking if white tile is below
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}

//SITE 10

function countdown() {
    var audio = document.getElementById("audio");
    audio.currentTime = 12
    audio.play();

    var countdownDuration = 10;

    // Get the countdown element
    var countdownElement = document.getElementById("countdown");

    // Update the countdown every second
    var countdownInterval = setInterval(function () {
        countdownElement.textContent = countdownDuration;
        countdownDuration--;

        // When countdown ends, display the image
        if (countdownDuration < 0) {
            clearInterval(countdownInterval); // Stop the countdown timer
            document.getElementById("img-countdown").style.display = "block";
            document.getElementById("countdown").style.display = "none";
        }
    }, 1000);
}
