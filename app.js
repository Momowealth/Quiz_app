const quiz = [
    {  
         id: 1,
        question: "Which of the following is the property that is triggered in response to JS errors?",
        answers: ["Onclick", "Onerror", "Onmessage", "Onexception"],
        right_answer: "Onerror",
    },
    {
        id: 2,
        question: "Which of the following scoping type does JavaScript use?",
        answers: ["Sequential", "Segmental", "Lexical", "Literal"],
        right_answer: "Lexical", 
    },
    {
        id: 3,
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answers: ["Function/Method", "Preprocessor", "Triggering Event", " RMI"],
        right_answer: "Function/Method", 

    },
    {
        id: 4,
        question: "Javascript was developed by which company?",
        answers: ["Netscape", "Guido Van", "Sun", "Brendan Eich"],
        right_answer: "Netscape", 
    },
    {
        id: 5,
        question: "How many looping structures does Javascript have?",
        answers: ["4", "3", "2", "5"],
        right_answer: "3", 
    },
    {
        id: 6,
        question: "Which of this is not a Javascript data type?",
        answers: ["Number", "Defined", "Undefined", "String"],
        right_answer: "Defined", 
    },
    {
        id: 7,
        question: "Inside which HTML element do we put the Javascript?",
        answers: ["Js", "Scripting", "Script", "Javascript"],
        right_answer: "<Script>", 
    },
    {
        id: 8,
        question: "Choose the server-side Javascript object?",
        answers: ["File upload", "Function", "File", "Date"],
        right_answer: "File", 
    },
    {
        id: 9,
        question: "Which of the following is not considered a javascript operator?",
        answers: ["new", "this", "delete", "typeof"],
        right_answer: "this", 
    },
    {
        id: 10,
        question: "Which one of the following also known as Conditional Expression?",
        answers: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        right_answer: "immediate if",
    },
    {
        id: 11,
        question: "Which of the following type of a variable is volatile?",
        answers: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        right_answer: "Mutable variable", 
    },
    {
        id: 12,
        question: " In the JavaScript, which one of the following is not considered as an error?",
        answers: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
        right_answer: "Division by zero", 
    },
    {
        id: 13,
        question: "Which of the following number object function returns the value of the number?",
        answers: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        right_answer: "valueOf()", 
    },
    {
        id: 14,
        question: "The linkage of a set of prototype objects is known as?",
        answers: ["prototype stack", "prototype", "prototype class", "prototype chain"],
        right_answer: "prototype chain", 
    },
    {
        id: 15,
        question: "A collection of elements of the same data type which may either in order or not, is called?",
        answers: ["String", "Array", "Serialized Object", "Object"],
        right_answer: "Array", 
    },
    {
        id: 16,
        question: " A set of unordered properties that, has a name and value is called_?",
        answers: ["String", "Array", "Serialized Object", "Object"],
        right_answer: "Object", 
    },
    { 
        id: 17,
        question: "Which one of the following is not a keyword?",
        answers: ["if", "with", "debugger", "use strict"],
        right_answer: "use strict", 
    },
    {
        id: 18,
        question: "In a case, where the value of the operator is NULL, the typeof returned by the unary operator is?",
        answers: ["undefined", "string", "boolean", "object"],
        right_answer: "object", 
    },
    {
        id: 19,
        question: "Which one of the following operator returns false if both values are equal?",
        answers: ["!", "!==", "!=", "All of the above"],
        right_answer: "!=", 
    },
    {
        id: 20,
        question: "Which one of the following is an ternary operator?",
        answers: ["?", ":", "-", "+"],
        right_answer: "?", 
    },
];

let counter = 0;
// here I initialize my html
let questions;
function ques(){
    questions = quiz.map((elements) => {
        return `
        <div class="ques-con">
            <div class="num">${elements.id}</div>
            <h1>${elements.question}</h1><hr>
            <div class="btn-div">
                <button id="button">${elements.answers[0]}</button>
                <button id="button">${elements.answers[1]}</button>
                <button id="button">${elements.answers[2]}</button>
                <button id="button">${elements.answers[3]}</button>
            </div><hr>
        </div>
        `;
    })
}

// the array of question is merged
function getQues() {
    const mergedQues = questions.join("");

    const container = document.querySelector(".container");
    container.innerHTML = mergedQues;

    const quesContainers = Array.from(
        document.querySelectorAll(".ques-con")
    );
    const previousButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");
    const scoresButton = document.querySelector(".scores");

    quesContainers.forEach(function (quesContainer, index) {
        quesContainer.style.left = `${index * 100}%`;
    });
    
    function carousel(){
        nextButton.classList.remove("hidden-btn");
        previousButton.classList.remove("hidden-btn");
        scoresButton.classList.add("hidden-btn");
        if (counter === quesContainers.length - 1){
            nextButton.classList.add("hidden-btn");
            previousButton.classList.remove("hidden-btn");
            scoresButton.classList.remove("hidden-btn");
        }
        if (counter === 0){
            previousButton.classList.add("hidden-btn");
            scoresButton.classList.add("hidden-btn");
        }
        quesContainers.forEach(function (quesContainer){
            quesContainer.style.transform = `translateX(-${counter * 100}%)`;
        });
    }

    // functionality is added to the answer
    nextButton.addEventListener("click", () => {
        counter++;
        carousel();
    });
    previousButton.addEventListener("click", () =>{
        counter--;
        carousel();
    })


    quesContainers.forEach( function (quesContainer){
        quesContainer.addEventListener("click", function (e){
            const Button = quesContainer.querySelectorAll("button");
            if (e.target.id){
                Button.forEach(function (button){
                    button.classList.remove("active");
                    e.target.classList.add("active");
                    e.target.parentElement.classList.add("chosen");
                });
            }
        });
    });

    let score;
    scoresButton.addEventListener("click", function (){
        score = quesContainers.every(function (quesContainer){
            const btnDiv = quesContainer.querySelector(".btn-div");
            if (btnDiv.classList.contains("chosen")) {
                return true;
            }
            else{
                return false;
            }
        });
 
        // this is for correct and wrong answers
        let correctAnswers = [];
        if (score === false){
            alert("Please answer all the questions");
        }
        else{
            quiz.forEach(function (quesAndAnswer){
                quesContainers.forEach(function (quesContainer){
                    const chosenBtn = quesContainer.querySelector(".active");
                    const buttons = quesContainer.querySelectorAll("button");
                    buttons.forEach(function (button){
                        button.setAttribute("disabled", true);
                        button.classList.add("disabled");

                        if(
                            button.classList.contains("active") &&
                            button.innerText === quesAndAnswer.right_answer
                        ){
                            button.classList.add("correct");
                            correctAnswers.push(button);
                        }
                        else if(
                            !button.classList.contains("active") &&
                            button.innerText === quesAndAnswer.right_answer
                        ){
                            button.classList.add("correct");
                            chosenBtn.classList.add("wrong");
                        }
                    });
                });
            });

            // this done to display result from the questions
            const parag = document.querySelector(".parag");
            const paragSpan = document.querySelector("span");
            const parag1 = document.querySelector(".parag1");
            const retryBtn = document.querySelector(".retry");

            function Scoring(){
                scoresButton.setAttribute("disabled", true);
                scoresButton.classList.add("disabled");
                parag1.classList.add("parag1-margin");
            }

            const percentageScore = (
                (correctAnswers.length / quiz.length) * 
                100
            ).toFixed(0);

            // final conditions
            if (percentageScore < 70){
                Scoring();
                retryBtn.classList.remove("hidden-btn");
                retryBtn.addEventListener("click", function () {
                    document.location.reload();
                });
                paragSpan.classList.add("retry");
                parag1.innerText = "You can try again";
            }
            else{
                Scoring();
                paragSpan.classList.add("passed");
                parag1.innerText = "Congratulations you've passed the quiz.";
            }
            parag.innerText = `Your Score is: ${correctAnswers.length}/${quiz.length} - `;
            paragSpan.innerText = `${percentageScore}%`;
      
        }
    }); 
}

document.addEventListener("DOMContentLoaded", ques);
document.addEventListener("DOMContentLoaded", getQues);
    
