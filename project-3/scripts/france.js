let paintings = [
    "classic",
    "rococo",
    "neo",
    "roman", 
    "imp", 
    "post"
]

let userAnswer = [paintings.length]

// window.onload = function () {
//     openQuestion("rococo-content")
// };

function closeQuiz() {
    console.log("close")
    $('#fra-quiz-container').hide();
    $(".overlay").hide()
    
}

function openQuiz(movement) {
    $('#fra-quiz-container').show();
    $('#fra-quiz-container').css("display", "flex");
    if ($('#fra-quiz-container').is(":visible")) {
        $(".overlay").show()
        openQuestion(movement)
    }
}

$("#btn-france-quiz").click(function() {
    openQuiz("classic-content")
});



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
    
    let tabStringContent = "tab-"+ movement
    let tabString = tabStringContent.replace('-content', '')
    let tabName = document.getElementById(tabString)
    // console.log(tabString)
    tabName.className += " active";
    
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
            document.getElementById(paintings[i]).src = "./img/" +  paintings[i] + "-clear.jpg"
            document.getElementById(paintings[i]).style.cursor = "zoom-in"         
        }         
        
    }

    closeQuiz()
}

