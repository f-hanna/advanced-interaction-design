// SITE 1
function toggleBlur() {
    var lenses = document.querySelectorAll('.lens-background');
    for (var i = 0; i < lenses.length; i++) {
        lenses[i].classList.toggle('blur-effect');
    }
}