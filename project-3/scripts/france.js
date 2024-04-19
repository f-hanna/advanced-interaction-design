// GLOBAL VARIABLES
let currentQuestion = "q1"

// FRA OBJECT
let questionObj = {
    "q1": {
        "question": "Testing Question 1 (replace)",
        "movement": "Rococo",
        "questionOptions":  {
            "a": "option 1 (replace)",
            "b": "option 2 (replace)",
            "c": "option 3 (replace)",
            "d": "option 4 (replace)"
        },
        "answer": "d"
    }
}

function JSON() {
    fetch('https://f-hanna.github.io/advanced-interaction-design/project-3/json/fra-q.json')
        .then((response) => response.json())
        .then((json) => console.log(json));
    // return json
}

$("#btn-france-quiz").click(function () {
    $('#fra-quiz-container').show();
    $('#fra-quiz-container').css("display", "flex");
    if ($('#fra-quiz-container').is(":visible")) {
        $(".overlay").show()
    }

    // ADD IN THE OPTIONS
    JSON()
    // console.log(questions)

});