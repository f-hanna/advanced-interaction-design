document.getElementById('toggle').addEventListener('click', function () {

    console.log("clicked")

    // Get all elements with classes .circle, .line-2, and .line-3
    var elements = document.querySelectorAll('.circle, .line-2, .line-3');
    var outlines = document.querySelectorAll('.circle-1, .line');
    var binaries = document.querySelectorAll('.binary');
    var letterforms = document.querySelectorAll('.letterform');

    // Loop through each element and add the class .fill
    elements.forEach(function (element) {
        element.classList.add('fill');
    });

    outlines.forEach(function (outline) {
        outline.classList.add('outline');
    });

    binaries.forEach(function (binary) {
        binary.style.display = "none"

    });

    letterforms.forEach(function (letterform) {
        letterform.style.display = "block"
        letterform.style.color = "black"

    });
    
    document.body.style.backgroundColor = "white";
});