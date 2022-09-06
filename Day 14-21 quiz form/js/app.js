const questionNumber = document.querySelector('.question-number');

const questionText = document.querySelector('.question-text');

const optionContainer = document.querySelector('.option-container');

const answerIndicators = document.querySelector('.answers-indicator');

const home = document.querySelector('.home');
const result = document.querySelector('.result-quiz');
const quizBox = document.querySelector('.quiz-box');

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let avaliableOption = [];

let correctAnswers = 0;
let attempts = 0;

function setAvaliableQuestion() {
    const  totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++) {
        availableQuestion.push(quiz[i]);
    }
}

function getNewQuestion() {
    questionNumber.innerHTML = "Question " +(questionCounter + 1) +" of " +quiz.length;

    const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];

    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;

    const index1 = availableQuestion.indexOf(questionIndex);

    availableQuestion.splice(index1, 1);

    const optionSize = currentQuestion.options.length;

        for(let i = 0; i < optionSize; i++) {
    avaliableOption.push(i);
}

optionContainer.innerHTML = '';
let animationDalay = 0.2;

for(let i = 0; i < optionSize; i++) {
    const optionIndex = avaliableOption[Math.floor(Math.random() * avaliableOption.length)];

    const index2 = avaliableOption.indexOf(optionIndex);
    avaliableOption.splice(index2, 1);


    const option = document.createElement('div');
    option.innerHTML = currentQuestion.options[optionIndex];
    option.style.animationDelay = animationDalay + 's';
    animationDalay += 0.2;
    option.id = optionIndex;
    option.className ='option';
    optionContainer.appendChild(option);
    option.setAttribute('onclick', 'getResult(this)');
}


questionCounter++;

}

function getResult(optionElement) {

    const id = parseInt(optionElement.id);
    if(id === currentQuestion.answer) {
       optionElement.classList.add('correct');
       updateAnswerIndicator('correct') 
    } else {
        optionElement.classList.add('wrong');
       
        updateAnswerIndicator('wrong') ;
        for(let i = 0; i <optionContainer.children.length; i++) {
           
           if( parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
            optionContainer.children[i].classList.add('correct');
           };
        }
    }

    attempts++;
    unclickableOption();
}

function start() {
    home.classList.add('hidden');
    quizBox.classList.remove('hidden');
}

function unclickableOption () {
    const optionSize = optionContainer.children.length;
    for(let i = 0; i <optionSize; i++) {
       optionContainer.children[i].classList.add('alreay-answered'); 
    }
}

function next() {
    if(questionCounter === quiz.length) {
        console.log('quiz over')
        quizOver();
    } else {
        getNewQuestion();
    }
}

function answerIndicator() {
    answerIndicators.innerHTML = '';
    const totalQuestion = quiz.length;

    for(let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement('div');
        answerIndicators.appendChild(indicator);
    }
}

function updateAnswerIndicator (status) {
    answerIndicators.children[questionCounter-1].classList.add(status);
}

function quizOver() {
    quizBox.classList.add('hidden');
    result.classList.remove('hidden');
}

function resultQuiz() {
    
}

window.onload = function() {
    setAvaliableQuestion();
    getNewQuestion();
    answerIndicator();
}