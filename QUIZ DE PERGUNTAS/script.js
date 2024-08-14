// Perguntas e respostas para o quiz
const questions = [
    {
        question: 'Qual é a capital da França?',
        answers: [
            { text: 'Berlim', correct: false },
            { text: 'Madri', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Lisboa', correct: false }
        ]
    },
    {
        question: 'Qual é a fórmula da água?',
        answers: [
            { text: 'CO2', correct: false },
            { text: 'H2O', correct: true },
            { text: 'O2', correct: false },
            { text: 'NaCl', correct: false }
        ]
    },
    {
        question: 'Quem escreveu "Dom Casmurro"?',
        answers: [
            { text: 'Machado de Assis', correct: true },
            { text: 'José de Alencar', correct: false },
            { text: 'Monteiro Lobato', correct: false },
            { text: 'Clarice Lispector', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Seletores dos elementos
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

// Função para iniciar o jogo
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

// Função para exibir uma pergunta
function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;
    
    // Limpa respostas anteriores
    answerButtons.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

// Função para verificar a resposta selecionada
function selectAnswer(answer) {
    const correct = answer.correct;
    
    if (correct) {
        score++;
    }
    
    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

// Função para finalizar o jogo e exibir a pontuação
function endGame() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreDisplay.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Evento para reiniciar o jogo
restartButton.addEventListener('click', startGame);

// Iniciar o jogo ao carregar a página
startGame();
