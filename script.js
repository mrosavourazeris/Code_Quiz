var startBtn = document.getElementById("startquizbtn")
var buttonSection = document.querySelector("#parent")
var questionHeader = document.querySelector("#h1")
var questionBody = document.querySelector("#h5")

function allQ (){

    function firstQ (){

        buttonSection.className = "container-sm d-flex justify-content-center flex-column"

        questionHeader.innerHTML = "Question 1"
        questionBody.innerHTML = "Commonly used data types DO NOT include:"
        startBtn.innerHTML = "1. Strings"
        startBtn.className = "btn btn-primary m-3"
        startBtn.id = "newID"
        
        var buttonTwo = document.createElement("button")
        buttonTwo.innerHTML = "2. Booleans"
        buttonTwo.className = "btn btn-primary m-3"

        var buttonThree = document.createElement("button")
        buttonThree.innerHTML = "3. Alerts"
        buttonThree.className = "btn btn-primary m-3"

        var buttonFour = document.createElement("button")
        buttonFour.innerHTML = "4. Numbers"
        buttonFour.className = "btn btn-primary m-3"

        buttonSection.appendChild(buttonTwo)
        buttonSection.appendChild(buttonThree)
        buttonSection.appendChild(buttonFour)


        // buttonSection.addEventListener("click", secondQ)
        
        
    }

    firstQ()
    
    function secondQ (){
        questionHeader.innerHTML = "Question 2"
        questionBody.innerHTML = "The condition in an if / else statement is enclosed within:"
        // thirdQ()
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
}



function startQuiz (event){
    event.preventDefault()
    if (event.target.matches("button")){
        allQ()
    }
}

startBtn.addEventListener("click", startQuiz)