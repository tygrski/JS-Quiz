var bodyEl = document.body;
// body.setAttribute("class", "body");
var questionNumber = 0;

var questions = [
    {
        question1: "Which is a JavaScript Data Type ?",
        answers: ["Words", "True/False", "Number", "Element"],
        correct: "Number"
    },
    {
        question2: "Math.ceil(x)",
        answers: ["Returns x rounded to its nearest integer", "Returns x rounded down to its nearest integer", " returns the integer part of x", "Returns x rounded up to its nearest integer"],
        correct: "elephant"
    },
    {
        question1: " arrays are used to store multiple values in a single _____",
        answers: ["Variable", "Data Type", "Event", "Element"],
        correct: "Variable"
    },
    {
        question1: "HTML events are _____ that happen to HTML elements.",
        answers: ["Clicks", "Things", "Edits", "Saved"],
        correct: "Things"
    }
];

// make a start function that does the initial work and then runs questionSelect()
function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("questionArea").style.display = "block";
    questionNumber = 0;
    questionSelect()
}

function questionSelect() {
// for ()
};

document.getElementById('start').onclick = startQuiz;

// user clicks start button => start button disappears => quiz area appears
function(click,startQuiz()) {

};