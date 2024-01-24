//c-1
var c1 = document.getElementById("c-1");
c1.addEventListener("click", function () {
    alert("Welcome to Charette Clicks!")
    // c1.style.width = "300px";
});

//c-2
var c2 = document.getElementById("c-2");
var circleDiv = c2.querySelector(".circle");
c2.addEventListener("click", function () {
    c2.classList.add("bg-fill-animation");
    c2.style.backgroundColor = "rgb(255, 149, 0)";

    setTimeout(function () {
        circleDiv.classList.add("bg-fill-animation");
        circleDiv.style.backgroundColor = "rgb(255, 204, 0)"; 
    }, 300); // Adjust the delay as needed   
});

//c-3
var c3 = document.getElementById("c-3");
// Create div elements dynamically
for (var i = 0; i < 18; i++) {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Set some content or styles for the new div
    newDiv.classList.add("c3-child"); // Optional: Add a class for styling

    // Append the new div to the container
    c3.appendChild(newDiv);
}

// c-4
document.addEventListener("DOMContentLoaded", function () {
    var divToShake = document.getElementById("c-4");

    if (divToShake) {
        // Add the shake-animation class to trigger the animation on click
        divToShake.addEventListener("click", function () {
            divToShake.classList.add("shake-animation");

            // Remove the shake-animation class after the animation ends
            divToShake.addEventListener("animationend", function () {
                divToShake.classList.remove("shake-animation");
            }, { once: true });
        });
    }
});

// c-5
var c5 = document.getElementById("c-5")
c5.addEventListener("click", function () {
    document.getElementById("c5-text").textContent +="H"
});

/************* ROW 2 ********************/

