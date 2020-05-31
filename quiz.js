//Quiz Controller--------------------------------------------
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
        addTime();
        window.alert("You're correct!");
    } else {
        window.alert("Hmmm...better luck next time.");
        removeTime();
    }
    this.questionIndex++;       
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

//Timer------------------------------------------------------
let countdown = 200;
let timer;

function updateTimer(){
    countdown -= 1;
    
    if( countdown<0 ){
        document.querySelector('#timer').innerHTML = 
            "<h2>Time's up!</h2>";
        clearInterval( timer );
    } else {
        document.querySelector('#timer').innerHTML = 
            `${countdown}s left!`;
    }
}

function startTimer(){
    timer = setInterval( updateTimer, 1000 );
}

function addTime(){
    countdown += 30;
}

function removeTime(){
    countdown -= 30;            
}

startTimer();