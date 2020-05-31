// var question = document.getElementById("question");
// var btn1 = document.getElementById("btn1").addEventListener("click", nextOption);
// var btn2 = document.getElementById("btn2").addEventListener("click", nextOption);
// var btn3 = document.getElementById("btn3").addEventListener("click", nextOption);
// var btn4 = document.getElementById("btn4").addEventListener("click", nextOption);


//App---------------------------------------------------------

function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        //start timer
        updateTimer();

        // show question
        var question = document.getElementById("question");
        question.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function welcome() {
    var welcome = "<h1>Start Quiz?</h1>";
    welcome += "<button id='start'>Let's go!</button>";
    document.getElementById("start").addEventListener("click", populate);
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var progressBar = document.getElementById("progress");
    progressBar.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var questionBox = document.getElementById("quiz");
    questionBox.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What inclination does JavaScript exacerbate?", ["Wailing", "Slamming your head on your desk", "Eating your feelings", "Homicide"], "Slamming your head on your desk"),
    new Question("Were coding made into a sorority analogy, what role would JavaScript play?", ["Karen: A basic ***** who lays the ground rules.", "Bethany: The one who's still slamming her head on her desk.", "Tiffany: The one who only shops designer because Karen needs help stylizing literally everything.", "Veronica: The fickle one who makes every day a party. And a headache."], "Veronica: The fickle one who makes every day a party. And a headache."),
    new Question("What degree of pain can using JavaScript be realistically compared to?", ["Childbirth", "Taking a foot to the groin", "A pressure migraine", "Waking up to a residual stranger in your bed from the previous night"], "Taking a foot to the groin"),
    new Question("What method is most successful in wooing JavaScript?", ["Bellowing a seductive animal mating call", "Speaking in soft sultry tones", "Bludgeoning your monitor with unspeakable obscenities", "Reaching a level of intoxication in which code APPEARS to work"], "Bludgeoning your monitor with unspeakable obscenities"),
    new Question("How best can the feeling of success using JavaScript be described?", ["I am God", "There is no God", "OH MY GAWD", "*faint*"], "*faint*")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
