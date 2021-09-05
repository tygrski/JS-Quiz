var bodyEl = document.body;
var questionNumber = 0;
var startBtn= document.getElementById('start');
var questionArea= document.getElementById('questionArea');
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var correctOrWrong = document.getElementById("validate");
var initialSection  = document.getElementById("initials-section");
var initialInput = document.getElementById("txtinitial");
var submitInit = document.getElementById("initialSubmit") ;
var scoreList = document.getElementById("score-list");
var playerScore = document.getElementById("playerScore");
var quizObject = {};
var quizPlayers = [];
var totalSeconds = document.getElementById("seconds");
var remainingSeconds = "Time: " + 30;
var secondsElapsed = 0;
totalSeconds.textContent = remainingSeconds;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var interval 
var questionIndex = 0;

var questions = [
    {
        question: "Which is a JavaScript Data Type ?",
        answers: ["Words", "True/False", "Number", "Element"],
        correct1: 2
    },
    {
        question: "Math.ceil(x)",
        answers: ["Returns x rounded to its nearest integer", "Returns x rounded down to its nearest integer", " returns the integer part of x", "Returns x rounded up to its nearest integer"],
        correct: 3
    },
    {
        question: "Arrays are used to store multiple values in a single _____",
        answers: ["Variable", "Data Type", "Event", "Element"],
        correct: 0
    },
    {
        question: "HTML events are _____ that happen to HTML elements.",
        answers: ["Clicks", "Things", "Edits", "Changes"],
        correct: 1
    }
];
// load questions from array. Stop timer
function loadQuestion() {
 if (questionIndex <= questions.length - 1) {
    question.textContent = `${(questionIndex + 1)}. ${questions[questionIndex].question}`;
    answer1.textContent = questions[questionIndex].answers[2];
    answer2.textContent = questions[questionIndex].answers[3];
    answer3.textContent = questions[questionIndex].answers[0];
    answer4.textContent = questions[questionIndex].answers[1];
    document.getElementById("validate").style.display = "none"; 
}else {
    // stop timer funcion
function stopTimer() {
    if (timeRemaining === o) 
    clearInterval(quizInterval);
    // show high score div 
    document.getElementById("score-list").style.display = "block";
    // hide quiz div
    document.getElementById("questionArea").style.display = "none";
        }
    }
};
 
function checkAnswer(ele)  {
    var id = ele.id.split('')

    if(id[id.length] == questions.questionIndex.answers) {
        playerScore++;
    // display score card
    // display "Correct"  
} else {
    // subtract time
    // display "incrret"
}
};

// function button(ele)
// put checkAnswer(ele) function here
// call nextQuestion()

// function nextQuestion ()  {
//     questionIndex++;
//     loadQuestion();
// };

// Start game 
function startQuiz() {
    // console.log("test enter start qiuiz");
    document.getElementById("start").style.display = "none"; 
    document.getElementById("score-list").style.display = "none"; 
    // console.log("test break after none");
    document.getElementById("questionArea").style.display = "block";
    questionNumber = 0;
    // console.log("test exit start quiz");
    timerStart();
    // console.log("test calling question select");
   loadQuestion();
   window.onload = loadQuestion();
};

// event listener to start QuizGame
document.getElementById('start').onclick = startQuiz;

// set time function set timer 
var timeRemaining = 30;
var quizInterval;
    // console.log("test initate time remianing");
function timerStart(){
    quizInterval = setInterval(displayTime,1000); 
        function displayTime() {
            timeRemaining--;
            totalSeconds.textContent = "Time: " + timeRemaining;
            
            if( timeRemaining <= 0 ){
                console.log("totalSeconds", timeRemaining);
                clearInterval(quizInterval);
        }
    }
};



// function questionSelect() {
//     var i = 0;
// //  check if answer is correct and dsiplays "Correct" or "Wrong" in p tag
//     var score = 0;
//     // console.log("test entering question select");
// if ( questions.correct === questions[i+1].answers) {
//    // Increase score
//     score++;
//         // console.log("test exit score value increase added")
//     // Alert the user
//     document.getElementById('validate').innerhtml = "Correct";
//   } else {
//      // Alert the user
//     document.getElementById('validate').innerhtml = "Wrong";
//   } timeRemaining -= 5;
//         // console.log("test exit question select");
// };



// subtract time for wrong answer function
// if(answer is not correct) {
//     deduct from score
// };

// score card function; adds scores together()
 
// function to display list of people who have played

// to get score form local storage

// set to local storage
document.getElementById("intials-section").style.display = "none"; 
document.getElementById("playerScore").style.display = "none"; 
// var showScores = localStorage.getItem("scores-list").length;
// JSON.parse(showScores);
// localStorage.setItem("score-list", ), JSON.stringify(score-list);
// localStorage.setItem("txtinitial", initials),JSON.stringify();
// localStorage.setItem("playerScore", playerScore),JSON.stringify();
// renderLastregistered();

// event lsitner click for initials input

document.getElementById("");