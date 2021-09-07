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
var playerScore = 0;
var questions = [
    {
        question: "Which is a JavaScript Data Type ?",
        answers: ["Words", "True/False", "Number", "Element"],
        correct: 2
    },
    {
        question: "Math.ceil(x)",
        answers: ["Returns x rounded to its nearest integer", "Returns x rounded down to its nearest integer", " Returns the integer part of x", "Returns x rounded up to its nearest integer"],
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

// event listener to start QuizGame
start.addEventListener("click", startQuiz);

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
//    console.log("TEST")
   answer1.addEventListener("click", checkAnswer)
   answer2.addEventListener("click", checkAnswer)
   answer3.addEventListener("click", checkAnswer)
   answer4.addEventListener("click", checkAnswer)
   console.log("TEST@")
};

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

function stopTimer() {
    if (timeRemaining === 0) 
    clearInterval(quizInterval);
    // show high score div 
    document.getElementById("score-list").style.display = "block";
    // hide quiz div
    document.getElementById("questionArea").style.display = "none";
        }

// load questions . Stop timer
function loadQuestion() {
 if (questionIndex <= questions.length - 1) {
    question.textContent = `${(questionIndex)}. ${questions[questionIndex].question}`;
    answer1.textContent = questions[questionIndex].answers[0];
    answer2.textContent = questions[questionIndex].answers[1];
    answer3.textContent = questions[questionIndex].answers[2];
    answer4.textContent = questions[questionIndex].answers[3];
    document.getElementById("link-score-list").style.display = "none"; 
    
}else {
    // // stop timer funcion
    //  stopTimer() 
    // if (timeRemaining === o) 
    // clearInterval(quizInterval);
    // // show high score div 
    // document.getElementById("score-list").style.display = "block";
    // // hide quiz div
    // document.getElementById("questionArea").style.display = "none";
    //     }
    //     stopTimer();
    // };
}
};
 
function checkAnswer(event) {
    var currentQuestion = questions[questionIndex];
    var currentAnswer = currentQuestion.answers[currentQuestion.correct];

    console.log("currentQuestion: ", currentQuestion);
    console.log("currentAnswer: ", currentAnswer);
    console.log("event.target.innerText: ", event.target.innerText);

    if (event.target.innerText === currentAnswer) {
        nextQuestion();
        console.log("Correct Answer");
        playerScore++;
    } else {
        console.log("Incorrect Answer");
        timeRemaining -= 5;
        nextQuestion();
    }
}; nextQuestion();

function nextQuestion ()  {
    questionIndex++;
    loadQuestion();
};


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