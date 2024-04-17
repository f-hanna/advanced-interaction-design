// GLOBAL VARIABLES
let currentQuestion = "q1"

function JSON() {
    fetch('./json/fra-q.json')
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