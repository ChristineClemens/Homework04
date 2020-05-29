var question = document.getElementById("question");
var btn1 = document.getElementById("btn1").addEventListener("click", nextOption);
var btn2 = document.getElementById("btn2").addEventListener("click", nextOption);
var btn3 = document.getElementById("btn3").addEventListener("click", nextOption);
var btn4 = document.getElementById("btn4").addEventListener("click", nextOption);


//Questions--------------------------------------------------
function Question (text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}




//Quiz Controller--------------------------------------------
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer) {
    this.questionIndex++
    if (this.getQuestionIndex.prototype().correctAnswer(answer))
    this.score++;
}



//App---------------------------------------------------------
var questions = [
    new Question("What inclination does JavaScript exacerbate?", ["Wailing", "Slamming your head on your desk", "Eating your feelings", "Homicide"], "Slamming your head on your desk"),
    new Question("Were coding made into a sorority analogy, what role would JavaScript play?" ["Karen: A basic ***** who lays the ground rules.", "Bethany: The one who's still slamming her head on her desk.", "Tiffany: The one who only shops designer because Karen needs help stylizing literally everything.", "Veronica: The fickle one who makes every day a party. And a headache."], "Veronica: The fickle one who makes every day a party. And a headache."),
    new Question("What degree of pain can using JavaScript be realistically compared to?"["Childbirth", "Taking a foot to the groin", "A pressure migraine", "Waking up to a residual stranger in your bed from the previous night"], "Taking a foot to the groin"),
    new Question("What method is most successful in wooing JavaScript?"["Bellowing a seductive animal mating call", "Speaking in soft sultry tones", "Bludgeoning your monitor with unspeakable obscenities", "Reaching a level of intoxication in which code APPEARS to work"], "Bludgeoning your monitor with unspeakable obscenities"),
    new Question();
];