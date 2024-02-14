// add event listener to all clicks
document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', function () {

        //get the letter
        let secondChild = this.children[1];
        let secondChildName = secondChild.getAttribute('id');

        // get all the grandchildren
        let grandchildren = document.getElementById(secondChildName).querySelectorAll('*');

        // Filter the grandchildren with the specified classes and reorder them
        let desiredGrandchildren = [];
        grandchildren.forEach(grandchild => {
            let classNames = grandchild.className.split(' ');
            classNames.forEach(className => {
                if (className.startsWith('a-')) {
                    let num = parseInt(className.substring(2));
                    if (num >= 1 && num <= 8) {
                        desiredGrandchildren.push({
                            element: grandchild,
                            number: num
                        });
                    }
                }
            });
        });
        // Sort the desired grandchildren based on their class numbers
        desiredGrandchildren.sort((a, b) => a.number - b.number);
        // Extract only the elements after sorting
        desiredGrandchildren = desiredGrandchildren.map(item => item.element);

        // Function to apply glow effect to an element for a second
        function applyGlowEffect(element) {
            element.classList.add('glow');
            setTimeout(() => {
                element.classList.remove('glow');
            }, 2000);
        }

        // Function to apply grow effect to an element for a second
        function applyGrowEffect(element) {
            element.classList.add('grow');
            setTimeout(() => {
                element.classList.remove('grow');
            }, 2000);
        }

        // Apply glow effect sequentially to each desired grandchild
        desiredGrandchildren.forEach((grandchild, index) => {
            if (grandchild.classList.contains('circle') || grandchild.classList.contains('circle-1')) {
                // console.log(grandchild);
                setTimeout(() => {
                    applyGlowEffect(grandchild);
                }, index * 2000); // Delay each glow effect by 2 seconds
            }
            else {
                // console.log(grandchild);
                setTimeout(() => {
                    applyGrowEffect(grandchild);
                }, index * 2000); // Delay each glow effect by 2 seconds

            }
        });
        

    });
});
