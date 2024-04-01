function toggleBlur() {
    console.log("clicked!")
    
    var lenses = document.querySelectorAll('.lens-background');
    for (var i = 0; i < lenses.length; i++) {
        lenses[i].classList.toggle('blur-effect');
    }
}