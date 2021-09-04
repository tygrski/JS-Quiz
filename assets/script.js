var bodyEl = document.body;
// body.setAttribute("class", "body");
var questionNumber = 0;

var startBtn= document.getElementById('start')
var questionArea= document.getElementById('questionArea')
var question = document.getElementById("question")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var correntOrWrong = document.getElementById("validate")
var initialSection  = document.getElementById("initials-section")
var initialInput = document.getElementById("txtinitial")
var submitInit = document.getElementById("initialSubmit") 
var scoreList = document.getElementById("score-list")
var playerScore = document.getElementById("playerScore")
var quizObject = {} 
var quizPlayers = []
var totalSeconds = 0
var secondsElapsed = 0
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

var interval 

var questions = [
    {
        question1: "Which is a JavaScript Data Type ?",
        answers: ["Words", "True/False", "Number", "Element"],
        correct: 3
    },
    {
        question2: "Math.ceil(x)",
        answers: ["Returns x rounded to its nearest integer", "Returns x rounded down to its nearest integer", " returns the integer part of x", "Returns x rounded up to its nearest integer"],
        correct: 3
    },
    {
        question1: " arrays are used to store multiple values in a single _____",
        answers: ["Variable", "Data Type", "Event", "Element"],
        correct: 1
    },
    {
        question1: "HTML events are _____ that happen to HTML elements.",
        answers: ["Clicks", "Things", "Edits", "Saved"],
        correct: 2
    }
];
//  function for formating minutes to sec  total sec- secds elapsed,   divide by 60(math.floor) around the function

//  function formating total seconds - seconds elapsed , %60 var secondsLeft = (totalSeconds - secondsElapsed) % 60;

// set time function set timer 

// start timer funcion

// stop timer funcion

// subtract time for wrong answer function

// function to show time ()||     minutes.textContent = whatever formattting minutes function & same for seconds

// make a start function that does the initial work and then runs questionSelect()
function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("questionArea").style.display = "block";
    questionNumber = 0;
    questionSelect()
}

function questionSelect() {
// if ( answer is true......)
};

// function change to next question

// function to check if ans is correct

// score card function; adds scores together(get score and quesions linked x 100 to get score)


// function to display list of people who have played

// to get score form local storage

// set to local storage

// event lsitner click for initials input

document.getElementById('start').onclick = startQuiz;

// user clicks start button => start button disappears => quiz area appears
// function(click,startQuiz()) {

// };

document.getElementById("")