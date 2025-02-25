const question = document.getElementById("question");
const answer = document.getElementById(".choices")
const correct = document.querySelectorAll("correct");

function saveQuestion() {
    let question = document.getElementById("question").Value;
    let answer = document.querySelectorAll(".choice");
    let correct = document.getElementById("correct").value;
    let choices = [];
    for (let i =0; i < answer.length; i++) {
        const choice = answer[i].value;
        choicesArray.push(choice);
    }
    console.log(question, choices, correct);
    saveToLocalStorage(choicesArray);
}

function saveToLocalStorage (choicesArray) {
    
}

console.log('hello');