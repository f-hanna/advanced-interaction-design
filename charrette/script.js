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
for (var i = 0; i < 24; i++) {
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
    document.getElementById("c5-text").textContent += "H"
});

/************* ROW 2 ********************/

// c-6
var c6 = document.getElementById("c-6");
c6.addEventListener("click", function () {
    setInterval(function () {
        var childDivs = c6.querySelectorAll(".c6-child");

        childDivs.forEach((child) => {
            var randomOpacity = Math.random();
            child.style.opacity = randomOpacity;
        });
    }, 500); // Adjust the interval (in milliseconds) as needed

});

// c-7
document.addEventListener("DOMContentLoaded", function () {
    var c7Container = document.getElementById("c-7");
    var div1 = document.getElementById("div1");

    if (c7Container && div1) {
        c7Container.addEventListener("mousemove", function (event) {
            // Get the mouse coordinates relative to the c-7 container
            var rect = c7Container.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;

            // Ensure the cursor divs stay within the bounds of the c-7 container
            mouseX = Math.max(0, Math.min(mouseX, c7Container.clientWidth - div1.clientWidth));
            mouseY = Math.max(0, Math.min(mouseY, c7Container.clientHeight - div1.clientHeight));

            // Set the positions of div1 and div2
            div1.style.left = mouseX + "px";
            div1.style.top = mouseY + "px";

        });
    }
});


// c-8
var c8 = document.getElementById("c-8");
c8.addEventListener("click", function () {
    var heart = c8.querySelector("i.fa-heart");
    heart.classList.add("pulse");

    // Remove the pulse class after a short delay
    setTimeout(function () {
        heart.classList.remove("pulse");
    }, 300);
});

// c-10
var notClick = true;
$("#c-10").click(function () {
    $(".dot").addClass("expand");
});

/********** ROW 3 ************/
// c-11
var c11 = document.getElementById("c-11");
var c11Bool = false;

c11.addEventListener("click", function () {
    if (!c11Bool) {
        c11.classList.add("expand-h");
        c11Bool = true;
    }
    else {
        c11.classList.remove("expand-h");
        c11Bool = false;

    }
});

// c-12
var c12 = document.getElementById("c-12");
c12.addEventListener("click", function () {
    var c12text = document.getElementById("c12-text");
    var c12content = c12text.textContent;

    c12text.textContent = parseInt(c12content) + 1;
});

// c-13 
var c13 = document.getElementById("c-13");

c13.addEventListener("click", function () {
    var c13text = document.getElementById("c13-text");
    c13text.classList.add("animateLoop");
});

//c-14
var c14 = document.getElementById("c-14");

c14.addEventListener("click", function () {
    var c14Child = document.getElementsByClassName("c14-s")

    Array.from(c14Child).forEach((child) => {
        child.style.borderRadius = "50%";
    })
});

