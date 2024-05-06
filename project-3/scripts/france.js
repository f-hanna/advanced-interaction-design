
gsap.registerPlugin(ScrollToPlugin)

let paintings = [
    "classic",
    "rococo",
    "neo",
    "roman", 
    "imp"
]

let movementNames = [
    "Classicism",
    "Rococo",
    "Neoclassicism",
    "Romanticism", 
    "Impressionism"
]

let userAnswer = [paintings.length]

window.onload = function () {
    calculateAnswer(0)
};


function scrollPainting(painting) {
    // console.log(painting)
    closeQuiz()
    gsap.to(window, {duration: 1, scrollTo:{x:"#" + painting, offsetX:500}});
}

function closeQuiz() {
    console.log("close")
    // $('#fra-quiz-container').hide();
    $('#fra-quiz-container').css("top", "240%");
    $(".overlay").hide()
    
}

function openQuiz(movement) {
    $('#fra-quiz-container').show();
    $('#fra-quiz-container').css("top", "50%");
    $(".overlay").show()
    openQuestion(movement)
}

$("#btn-france-quiz").click(function() {
    openQuiz("classic-content")
});



function openQuestion(movement) {

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
    
    let tabStringContent = "tab-"+ movement
    let tabString = tabStringContent.replace('-content', '')
    let tabName = document.getElementById(tabString)
    // console.log(tabString)
    tabName.className += " active";
    
  }

function checkAnswer() {

    correctNum = 0
    for (let i = 0; i < paintings.length; i++) {
        var movement = paintings[i]
        userAnswer[i] = $(`input[type='radio'][name='${movement}']:checked`).val();     
        
    }

    for (let i = 0; i < paintings.length; i++) {

        if (userAnswer[i] == "true") {
            document.getElementById(paintings[i]).src = "./img/" +  paintings[i] + "-clear.jpg"
            document.getElementById(paintings[i]).style.cursor = "zoom-in"   

            document.getElementById(paintings[i] + "-status").className = "fa-solid fa-lock-open"

            document.getElementById(paintings[i] + "-reveal").style.display = "none"
            correctNum++;

            document.getElementById("caption-" + paintings[i]).innerHTML = movementNames[i] + " - UNLOCKED"
            
            

        }
        // else if (userAnswer[i] == "false") {
        //     alert("Wrong answer!")
        // }         
        
    }

    calculateAnswer(correctNum)
}

function calculateAnswer(correct) {
    document.getElementById("quiz-header").innerHTML = correct
}



