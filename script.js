const questions = [
    {
        question: "What is the capital of Germany?",
        answers: [
            { text: "Vienna", correct: false },
            { text: "Berlin", correct: true },
            { text: "Amsterdam", correct: false },
            { text: "Zurich", correct: false }
        ]
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "HO", correct: false },
            { text: "H2", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Leo Tolstoy", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Nile River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false }
        ]
    },
    {
        question: "What is the freezing point of water in Celsius?",
        answers: [
            { text: "0°C", correct: true },
            { text: "32°C", correct: false },
            { text: "-32°C", correct: false },
            { text: "100°C", correct: false }
        ]
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsElement.innerText = questions.length;
    questionContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, button));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
            btn.classList.add('correct');
        }
    });
    nextButton.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = score;
}

function restartQuiz() {
    startQuiz();
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartQuiz);

startQuiz();
