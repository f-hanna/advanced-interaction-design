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

document.addEventListener("DOMContentLoaded", function () {
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

// SITE 11

var opacityInterval;
var opacityStep = 0.5;

function ghost() {

    console.log("hold")
    const img = document.getElementById('img-ghost');

    opacityInterval = setInterval(function () {
        console.log("hold")
        var currentOpacity = parseFloat(window.getComputedStyle(img).opacity);

        console.log(currentOpacity)
        if (currentOpacity < 1) {
            img.style.opacity = (currentOpacity + opacityStep).toFixed(2);
        }
    }, 100); // Adjust the interval duration as needed
}

function ghostDown() {
    clearInterval(opacityInterval);
    scareGhost()
}

function scareGhost() {
    const img = document.getElementById('img-ghost');
    opacityInterval = setInterval(function() { // Start a new interval for decreasing opacity
        var currentOpacity = parseFloat(window.getComputedStyle(img).opacity);
        if (currentOpacity > 0) {
            img.style.opacity = (currentOpacity - opacityStep).toFixed(2);
        } else {
            clearInterval(opacityInterval); // Stop the interval when opacity reaches 0
        }
    }, 100); // Adjust the interval duration as needed
}

// SITE 12
function prison() {
    var bars = document.querySelectorAll(".bar");
    var img = document.getElementById("prison-wrapper")
    var btn = document.getElementById("prison-btn")

    bars.forEach((bar) =>
        bar.classList.add("open")
        
    );
    img.style.backgroundImage = "url(https://st.depositphotos.com/1000975/4859/i/450/depositphotos_48594023-stock-photo-prisoner-with-guns.jpg)"
    btn.innerHTML = "Ruh roh..."

}

// SITE 13

let duration = 500

function light() {
    var img = document.getElementById('img-light');
    var counter = 0;

    var interval = setInterval(function() {
        if (counter < 5) {
            img.src = (counter % 2 === 0) ? '../imgs/site-13/on.png' : '../imgs/site-13/off.png';
            
        } else {
            clearInterval(interval);
            img.src = '../imgs/site-13/on.png'; // Ensure it ends on "on.png"
        }
        // duration = duration * 2
        // console.log(duration)
        counter++;

    }, duration);
}

// SITE 14 

function toast() {
    console.log("boo")
    const toast = document.getElementById('toast');
    // Add the fly class
    toast.classList.add('fly');

    // After 3 seconds, remove the fly class
    setTimeout(function() {
        toast.classList.remove('fly');
    }, 1000);
}

// SITE 15

function boo() {
    console.log("boo")
    const ghost = document.getElementById("img-boo")
    ghost.classList.add("click")
    document.getElementById("boo-btn").innerHTML = "Jeepers!"
}

// SITE 16

var evolveCounter = 0
var evolveIndex = 1

function evolve() {
    var img = document.getElementById("img-evolve")
    evolveCounter = evolveCounter + 1
    console.log(evolveCounter)
    if (evolveCounter % 4 == 0) {
        console.log(evolveIndex);
        img.src = "../imgs/site-16/e-" + evolveIndex + ".jpg";
        evolveIndex = evolveIndex + 1;
        // Reset evolveIndex when it reaches 4 (assuming you have images named e-0.jpg to e-3.jpg)
        if (evolveIndex === 5) {
            alert("Can not evolve anymore!")
            img.src = "../imgs/site-16/e-3.jpg";
        }
    }

    

}

// SITE 17

function traffic() {
    var redLight = document.getElementById('red');
    var yellowLight = document.getElementById('yellow');
    var greenLight = document.getElementById('green');
    var trafficLight = document.getElementById('traffic-container');

    redLight.style.opacity = 1;
    setTimeout(function() {
        redLight.style.opacity = 0.3;
        yellowLight.style.opacity = 1;
    }, 1000);

    setTimeout(function() {
        yellowLight.style.opacity = 0.3;
        greenLight.style.opacity = 1;
    }, 2000);

    setTimeout(function() {
        trafficLight.style.display = "none"
        document.getElementById('img-traffic').style.display = "block"
    }, 3000);
}

// SITE 18

function door() {
    var element = document.querySelector(".door");
    element.classList.toggle("doorOpen");
}