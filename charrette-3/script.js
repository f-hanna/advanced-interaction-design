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