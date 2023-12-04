const startScreen = document.getElementById("starter-page");
const questionsScreen = document.getElementById("questions-screen");
const endScreen = document.getElementById('end-screen');
const timerElement = document.getElementById('time-remaining');
const startButton = document.getElementById('start-button');
const choicesContainer = document.getElementById("options");
const feedbackElement = document.getElementById('feedback');
const initialsInput = document.getElementById('submit');
const finalScoreElement = document.getElementById('final-score');
const submitButton = document.getElementById('submit-button');

const questions = [
    {
       question: "What does the acronym DOM stand for in JavaScript?",
       options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
       correctAnswer: "Document Object Model"
    },

    {
       question: "How do you declare a variable in JavaScript?",
       options: ["var myVar", "varible myVar", "v myVar", "declare myVar"],
       correctAnswer: "var myVar"
    }, 
      
    {
       question: "What is the result of the following expression: '5 + '5'?",
       options: ["55", "10", "5", "'55'"],
       correctAnswer: "'55'"
    },

    {
       question: "How do you comment in JavaScript?",
       options: ["//Comment", "*/Comment*/", "--Comment", "#Comment"],
       correctAnswer: "//Comment"
    },
      
    {
       question: "Which method is used to add a new element at the end of an array?",
       options: ["push()", "pop()", "shift()", "unshift()"],
       correctAnswer: "push()"
    },
      
    {
       question: "What is the purpose of the setTimeout function in JavaScript?",
       options: ["To set the interval between animations", "To delay the execution of a function", "To set the duration of a timer", "To control the speed of a loop"],
       correctAnswer: "To delay the execution of a function"
    },
      
    {
       question: "What does the === operator do in JavaScript?",
       options: ["Checks for equality without type conversion", "Checks for equality with type conversion", "Assigns a value to a variable", "Compares two values and assigns if they are equal"],
       correctAnswer: "Checks for equality without type conversion"
    },
      
    {
       question: "How do you convert a string to a number in JavaScript?",
       options: ["parseInt()", "toNumber()", "stringToNumber()", "parseNumber()"],
       correctAnswer: "parseInt()"
    },
      
    {
       question: "What is the purpose of the return statement in a function?",
       options: ["To exit the function and return a value", "To define the function", "To log output to the console", "To declare a variable"],
       correctAnswer: " To exit the function and return a value"
    },
      
    {
       question: "What is an example of a JavaScript event?",
       options: ["Click", "Loop", "Variable", "Object"],
       correctAnswer: "Click"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 120;

function startQuiz() {
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
    setTimer();
    showQuestion();
}

function setTimer() {
    const timerInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionTitleElement = document.getElementById('questions-title');
    const choices = currentQuestion.options;

    questionTitleElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = '';

    choices.forEach(function (choice, index) {
        const choiceElement = document.createElement('button');
        choiceElement.setAttribute('class', 'choice');
        choiceElement.setAttribute('value', index);
        choiceElement.textContent = index + 1 + '. ' + choice;
        choiceElement.addEventListener('click', handleChoice);
        choicesContainer.appendChild(choiceElement);
    });
}

function handleChoice() {
    const selectedChoiceIndex = parseInt(this.value);
    const choices = questions[currentQuestionIndex].options;

    if (selectedChoiceIndex === choices.indexOf(questions[currentQuestionIndex].correctAnswer)) {
        score += 10;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.remove('hide');
    } else {
        timeLeft -= 15;
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.classList.remove('hide');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

function endQuiz() {
    endScreen.style.display = 'block';
    startScreen.style.display = 'none';
    questionsScreen.style.display = 'none';
    finalScoreElement.textContent = score;
}

startButton.addEventListener('click', startQuiz);