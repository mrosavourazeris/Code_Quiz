var startBtn = document.querySelector("#startquizbtn")
var questionHeader = document.querySelector("#h1")
var questionBody = document.querySelector("#h5")

function firstQ (){
    questionHeader.innerHTML = "Question 1"
    questionBody.innerHTML = "Commonly used data types DO NOT include:"
    secondQ()
    
}

function secondQ (){
    questionHeader.innerHTML = "Question 2"
    questionBody.innerHTML = "The condition in an if / else statement is enclosed within:"
    thirdQ()
}

function thirdQ (){
    questionHeader.innerHTML = "Question 3"
    questionBody.innerHTML = "Arrays in JavaScript can be used to store:"
    fourthQ()
}

function fourthQ (){
    questionHeader.innerHTML = "Question 4"
    questionBody.innerHTML = "String values must be enclosedd within ____ when being assigned to variables:"
    fifthQ()
}

function fifthQ (){
    questionHeader.innerHTML = "Question 5"
    questionBody.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:"
    
}


function startQuiz (event){
    event.preventDefault()
    if (event.target.matches("button")){
        firstQ()
    }
}

startBtn.addEventListener("click", startQuiz)