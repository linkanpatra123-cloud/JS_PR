const quizData = [
    { question: "Q1. Which of the following is NOT a primitive data type in JavaScript ?",
      options: ["String", "Boolean", "Object", "Symbol"], 
      correct: 2 },

    { question: "Q2. Which method removes the last element from an array and returns that element?", 
      options: ["pop();", "push()", "shift()", "slice()"], 
      correct: 0 },

    { question: "Q3. Which keyword is used to declare a variable that cannot be reassigned ?", 
      options: ["var", "let", "const", "static"], 
      correct: 2 },

    { question: "Q4. What applies to Arrow Functions regarding the this keyword ?", 
        options: ["They have their own this binding.", "They inherit this from the enclosing scope (lexical scoping).", "this refers to the global object always.", "They cannot use this at all."], 
        correct: 1 },

    { question: "Q5. How do you merge two objects obj1 and obj2 into a new object in ES6?", 
        options: ["Object.concat(obj1, obj2)", "{ ...obj1, ...obj2 }", "obj1.merge(obj2)", "[obj1, obj2]"], 
        correct: 1 },

    { question: "Q6. Which of the following is valid syntax for a Template Literal ?", 
        options: ['"Hello ${name}"', "'Hello ${name}'", "`Hello ${name}`", "(Hello ${name})"], 
        correct: 2 },

    { question: "Q7. Which method is used to transform every element in an array and return a new array ?", 
        options: ["forEach()", "filter()", "map()", "reduce()"], 
        correct: 2 },

    { question: "Q8. NaN ka matlab?", 
        options: ["No any Number", "Not a Name", "Not a Number", "New and Null"], 
        correct: 2 },

    { question: "Q9. Event listener method?", 
        options: ["addEventListener()", "onClick()", "eventAdd()", "listen()"], 
        correct: 0 },

    { question: "Q10. JS kisne develop ki?", 
        options: ["Microsoft", "Netscape", "Google", "IBM"], 
        correct: 1 }
];

let currentQuestion = 0;
let answers = new Array(quizData.length).fill(null);
let timeLeft = 120;
let timer;

function startQuiz() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizSection").classList.remove("hidden");
    startTimer();
    loadQuestion();
}

function formatTime(seconds) {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function startTimer() {
    document.getElementById("timer").innerText = formatTime(timeLeft);

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = formatTime(timeLeft);

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}


function loadQuestion() {
    document.getElementById("question").innerText = quizData[currentQuestion].question;
    document.getElementById("counter").innerText = `${currentQuestion + 1}/10`;
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.className = "option-btn";
        if (answers[currentQuestion] === index) btn.classList.add("selected");

        btn.onclick = () => {
            answers[currentQuestion] = index;
            loadQuestion();
        };

        optionsEl.appendChild(btn);
    });

    document.getElementById("prevBtn").disabled = currentQuestion === 0;
    document.getElementById("nextBtn").classList.toggle("hidden", currentQuestion === quizData.length - 1);
    document.getElementById("submitBtn").classList.toggle("hidden", currentQuestion !== quizData.length - 1);
}

document.getElementById("nextBtn").onclick = () => {
    currentQuestion++;
    loadQuestion();
};

document.getElementById("prevBtn").onclick = () => {
    currentQuestion--;
    loadQuestion();
};

document.getElementById("submitBtn").onclick = () => endQuiz();
document.getElementById("restartBtn").onclick = () => location.reload();

function endQuiz() {
    clearInterval(timer);

    let score = 0;
    answers.forEach((ans, index) => {
        if (ans === quizData[index].correct) score++;
    });

    document.getElementById("result").innerText = `Your Score: ${score} / 10`;

    document.getElementById("restartBtn").classList.remove("hidden");

    document.getElementById("prevBtn").classList.add("hidden");
    document.getElementById("nextBtn").classList.add("hidden");
    document.getElementById("submitBtn").classList.add("hidden");

    document.getElementById("question").classList.add("hidden");
    document.getElementById("options").classList.add("hidden");
}
