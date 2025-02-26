const question = document.getElementById("question");
const answer = document.getElementById(".choices");
const correct = document.querySelectorAll("correct");


//Id Selector
function saveQuestion() {
    let question = document.getElementById("question").value;
    let answer = document.querySelectorAll(".choice");
    let correct = document.getElementById("correct").value;
    let quizArray = [];
    for (let i = 0; i < answer.length; i++) {
        const choice = answer[i].value;
        quizArray.push(choice);
    }
    console.log(question, choices, correct);
    saveToLocalStorage(quizArray);
};

function saveToLocalStorage (renderQuizPreview) {
};



//identifying Quiz Preview in HTML
const quizPreview = document.querySelector('#quiz-preview');

function renderQuizPreview() {
    for(let i = 0; i < quizArray.length; i++){
        console.log("Hello")
   
    const question = quizArray[i].question //index at 0 looks at for loop says ok its 0 and adds
    const answerOne = quizArray[i].answerOne //gets added if 
    const answerTwo = quizArray[i].answerTwo
    const answerThree = quizArray[i].answerThree    //Console log AnswerThree
    const answerFour = quizArray[i].answerFour
   
    const createDiv = document.createElement('div')
    
   
    const generateAnswer =

    `<label>${question}</label>
     <input type="radio" id="choices" name="question-1"><label>${answerOne}</label>
     <input type="radio" id="choices" name="question-2"><label>${answerTwo}</label>
     <input type="radio" id="choices" name="question-3"><label>${answerThree}</label>
     <input type="radio" id="choices" name="question-4"><label>${answerFour}</label>
     `
    createDiv.innerHTML = generateAnswer
  
    quizPreview.append(createDiv)
    }
};

//Array is like a box=[] that holds objects={} which are filled with data that you can manipulate/pull from to use
let quizArray = [
    {
        question: "#question",
        answerOne:"Seoul",
        answerTwo:"Alabama",
        answerThree:"New York",
        answerFour:"Boston"
    }
];

/*function addQuestion(radio) {
    document.getELementById("question").innerHTML = radio.value;
}*/

//watch phil video make question and answer inputs more dynamic

const addQuestion = document.querySelector("#addQuestion")
console.log(addQuestion)

addQuestion.addEventListener("click", renderQuizPreview);


// GRAVEYARD
// quizPreview.append(quizArray)
/*`
    <li class="preview-input">${question}
    <li  class="answer-input">${answerOne}</li>
    <li class="answer-input">${answerTwo}</li>
    <li class="answer-input">${answerThree}</li>
     <li class="answer-input">${answerFour}</li>
    </li>
    `*/