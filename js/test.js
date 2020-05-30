/*"use strict";
let question1 = document.getElementById('question-1');
let question2 = document.getElementById('question-2');
let question3 = document.getElementById('question-3');
let result = document.getElementById('bot-submit');
let nextButtons = document.querySelectorAll('.question__btn');

for (let i = 0; i < nextButtons.length; i++) {
  let nextQuestion = nextButtons[i];
  nextQuestion.onclick = function() {
    switchToNextQuestion(this);
  }
}


function switchToNextQuestion(nextQuestion) {
  let parentId = nextQuestion.parentNode.id;
  if (parentId === 'question-1') {
    question1.style.display = 'none';
    question2.style.display = 'block';
  } else if (parentId === 'question-2') {
    question2.style.display = 'none';
    question3.style.display = 'block';
  } else if (parentId === 'question-3') {
    question3.style.display = 'none';
    question4.style.display = 'block';
  } 
}

result.onclick = function() {
  alert('I am submitting the quiz!');
}

*/

"use strict";
let question1 = document.getElementById('question-1');
let question2 = document.getElementById('question-2');
let question3 = document.getElementById('question-3');
let progress2 = document.getElementById('progress__item-2');
let progress3 = document.getElementById('progress__item-3');
let nextButton1 = document.getElementById('btn1');
let nextButton2 = document.getElementById('btn2');
let nextButton3 = document.getElementById('btn3');
let num = document.getElementById('question__title-num');
let result = document.getElementById('bot-submit');


nextButton1.onclick = function() {
  question1.style.display = 'none';
  question2.style.display = 'block';
  progress2.classList.add("active");
  num.innerHTML = 2;
}

nextButton2.onclick = function() {
  question2.style.display = 'none';
  question3.style.display = 'block';
  progress3.classList.add("active");
  num.innerHTML = 3;
}

nextButton3.onclick = function() {
  question3.style.display = 'none';
  question4.style.display = 'block';
  progress4.classList.add("active");
  num.innerHTML = 4;
}


/*

function switchToNextQuestion(nextQuestion) {
  let parentId = nextQuestion.parentNode.id;
  if (parentId === 'question-1') {
    question1.style.display = 'none';
    question2.style.display = 'block';
    progress2.classList.add(" active");
  } else if (parentId === 'question-2') {
    question2.style.display = 'none';
    question3.style.display = 'block';
    progress2.classList.add(" active")
  } else if (parentId === 'question-3') {
    question3.style.display = 'none';
    question4.style.display = 'block';
  } 
}

result.onclick = function() {
  alert('I am submitting the quiz!');
}*/