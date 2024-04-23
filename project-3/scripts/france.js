let paintings = [
    "rococo",
    "neo"
]

let userAnswer = [paintings.length]

// immediately loads to rococo
window.onload = function () {
    openQuestion("rococo-content")
};


function openQuiz() {
    let pamphlet = document.querySelector(".quiz-container")
    pamphlet.style.opacity = "1"
    pamphlet.style.top = "70%"
    $(".overlay").show()

    document.getElementById("page-trigger").style.display = "none"
    let blockers = document.querySelectorAll('.blocker');
    blockers.forEach(blocker => {
        blocker.style.display = "none"
    });

    // let pages = document.querySelectorAll()

}

function openQuestion(movement) {

    console.log(movement)
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    let currentTab = document.getElementById(movement)
    currentTab.style.display = "block";
}

function checkAnswer() {
    console.log("hi!")

    for (let i = 0; i < paintings.length; i++) {
        var movement = paintings[i]
        userAnswer[i] = $(`input[type='radio'][name='${movement}']:checked`).val();

    }
    console.log(userAnswer);

    for (let i = 0; i < paintings.length; i++) {
        if (userAnswer[i] == "true") {
            document.getElementById(paintings[i]).src = "./img/" + paintings[i] + "-clear.jpg"
        }

    }

    closeQuiz()

    // $(".overlay").hide()

}

// document.getElementById('closeButton').addEventListener('click', function () {
//     console.log("Close button clicked");
//     closeQuiz();
// });

// $("#closeButton").on("click", function() {

//     closeQuiz()
// }


//)

function closeQuiz() {
    console.log("close")
    // let pamphlet = document.querySelector(".quiz-container")
    // let quiz = document.getElementById("fra-quiz-container")

    document.getElementById("page-trigger").style.display = "block"
    let blockers = document.querySelectorAll('.blocker');
    blockers.forEach(blocker => {
        blocker.style.display = "block"
    });

    let pamphlet = document.getElementById("fra-quiz-container")
    pamphlet.style.opacity = ".3"
    pamphlet.style.top = "120%"

    document.querySelector(".overlay").style.backgroundColor = "white"

    $(".overlay").hide()
    console.log(pamphlet)



}


