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
    $(".c10-dot").addClass("expand");
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

/******* ROW 4 ******/
// var notClick = true;
$("#c-16").click(function () {
    $(".c16-dot").addClass("expand-2");
});

// c-18
var c18hover = false;

$("#c-18").click(function () {
    if (!c18hover) {
        $(this).addClass("c18-expand");
        c18hover = true;
    } else {
        $(this).removeClass("c18-expand");
        c18hover = false;
    }
});

// c-20
var c20click = false;

$("#c-20").click(function () {
    if (!c20click) {
        $(".container").addClass("c20-up");
        c20click = true;
    } else {
        $(".container").removeClass("c20-up");
        c20click = false;
    }
});

// c-21
var c21 = document.getElementById("c-21");

for (var i = 0; i < 24; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("c21-child");
    var starIcon = document.createElement("i");
    starIcon.className = "fa-solid fa-star";
    newDiv.appendChild(starIcon);
    c21.appendChild(newDiv);
}

// c-22
var c22click = false;
$("#c-22").click(function () {
    if (!c20click) {
        $(".grid-container").addClass("inverted-colors");
        c20click = true;
    } else {
        $(".grid-container").removeClass("inverted-colors");
        c20click = false;
    }
});

// c-23
var c23Container = document.getElementById("c-23");
var c23Circle = document.getElementById("c23-circle");

c23Container.addEventListener("click", function () {
    c23Circle.classList.add("animate-circle");
});

// c-25 

$("#c25-square").click(function () {

    $("#c25-square").css("height", "100px");
    $("#c25-square").css("width", "80%");
    $("#c25-square").css("border-radius", "0");
});

/*********** ROW 6 **************/
// c-26
var c26click = false;
$("#c-26").click(function () {
    if (!c26click) {

        $(".grid-container").addClass("black-white");
        alert("We are always watching.")
        c26click = true;
    } else {
        $(".grid-container").removeClass("black-white");
        c26click = false;
    }
});

//c-27
var c27 = document.getElementById("c-27");
// Create div elements dynamically
for (var i = 0; i < 60; i++) {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Set some content or styles for the new div
    newDiv.classList.add("c27-child"); // Optional: Add a class for styling

    // Append the new div to the container
    c27.appendChild(newDiv);
}

// c-28 
var c28click = false;
$("#c-28").click(function () {
    if (!c28click) {
        $(".container").addClass("c28-rotate");
        c28click = true;
    } else {
        $(".container").removeClass("c28-rotate");
        c28click = false;
    }
});

// c-29
var c29click = false;
$("#c-29").click(function () {
    if (!c29click) {
        $(".c29-square").css("width", "400px");
        c29click = true;
    } else {
        $(".c29-square").css("width", "20px");
        c29click = false;
    }
});

/*********** ROW 7 **********/

// c-32
var c32Container = document.getElementById("c-32");
var c32Spinner = document.getElementById("c32-spinner");
c32Container.addEventListener("click", function () {
    c32Spinner.classList.add("spin-animation");
});

// c-33
var c33 = document.getElementById("c-33");
var c33icon = document.querySelector(".c33-icon"); // Use class selector
c33.addEventListener("click", function () {
    c33.style.position = "sticky"
    c33.style.top = "400px";
    c33.style.backgroundColor = "transparent"
    c33.style.border = "none";

});

// c-34
var c34click = false;
$("#c-34").click(function () {
    if (!c34click) {
        $(".container").addClass("c34-blur");
        c34click = true;
    } else {
        $(".container").removeClass("c34-blur");
        c34click = false;
    }
});

// c-35
document.addEventListener("DOMContentLoaded", function () {
    var c35Container = document.getElementById("c-35");
    var c35Ball = document.createElement("div");
    c35Ball.id = "c35-ball";
    c35Container.appendChild(c35Ball);

    c35Container.addEventListener("click", function () {
        c35Ball.style.animation = "none";
        c35Ball.offsetHeight;
        c35Ball.style.animation = "bounce 1s";
    });
});

//***************ROW 8 */
// c-36
$("#c-36").hover(function () {
    $(".grid-container").css("cursor", "wait")


    // if (!c34click) {
    //     $(".container").addClass("c34-blur");
    //     c34click = true;
    // } else {
    //     $(".container").removeClass("c34-blur");
    //     c34click = false;
    // }
});

// c-37 
$("#c-37").click(function () {
    $("#c37-square").css("height", "100%");
    $("#c37-square").css("width", "100%");
    $("#c37-square").css("border-radius", "0");
});

// c-38
var c38click = false;
$("#c-38").click(function () {
    if (!c38click) {
        $(this).css("width", "500px");
        c38click = true;
    } else {
        $(this).css("width", "auto");
        c38click = false;
    }
});

// c-39
$("#c-39").click(function () {
    location.reload();
    $('html').animate({ scrollTop: 0 }, 'slow');
    $('body').animate({ scrollTop: 0 }, 'slow');
});

// ********* ROW 9 ******************
// c-41
$("#c-41").click(function () {
    $("#c41-circle").addClass("animating");

});

// c-42
var c42 = document.getElementById("c-42");

c42.addEventListener("click", function () {
    var poofElements = document.querySelectorAll('.poof');

    poofElements.forEach(function (poof) {
        poof.style.display = 'none';
    });
});





