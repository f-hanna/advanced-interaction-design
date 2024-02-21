const parallaxContainer = document.querySelector('.parallax-container');

parallaxContainer.addEventListener('scroll', function() {
    let scrollPosition = parallaxContainer.scrollTop;

    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    parallaxLayers.forEach(function(layer) {
        const depth = layer.getAttribute('data-depth');
        const movement = -scrollPosition * depth;
        layer.style.transform = 'translateY(' + movement + 'px)';
    });
});
