const quizData = [
    {
      question: "What is the most used programming language in 2019?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "Who is the President of US?",
      a: "Florin Pop",
      b: "Joe Biden",
      c: "Ivan Saldano",
      d: "Mihai Andrei",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
  ];
  let currentQuiz = 0;
  let score = 0;
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  function getSelected() {
    let answer = undefined;
  
    answerEls.forEach(function (answerEl) {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  function deselectAnswers() {
    answerEls.forEach(function (answerEl) {
      answerEl.checked = false;
    });
  }
  
return `<div class="question">
          <h3>${questionObj.question}</h3>
          <ul class="answers">${optionsHTML}</ul>
        </div>`;
});
  submitBtn.addEventListener("click", function () {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
            quiz.innerHTML = `<h2>You scored ${score}/${quizData.length} questions.</h2>`;
            <button onclick="location.reload()">Reload</button>
      }
    }
  });
  loadQuiz();