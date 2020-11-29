var startBtn = document.getElementById("startquizbtn")
var buttonSection = document.getElementById("parent")
var questionHeader = document.querySelector("#h1")
var questionBody = document.querySelector("#h5")

function allQ (){

    var buttonOne = document.createElement("button")
    buttonOne.className = "btn btn-primary m-3"
    var buttonTwo = document.createElement("button")
    buttonTwo.className = "btn btn-primary m-3"
    var buttonThree = document.createElement("button")
    buttonThree.className = "btn btn-primary m-3"
    var buttonFour = document.createElement("button")
    buttonFour.className = "btn btn-primary m-3"

    buttonSection.appendChild(buttonOne)
    buttonSection.appendChild(buttonTwo)
    buttonSection.appendChild(buttonThree)
    buttonSection.appendChild(buttonFour)

    function firstQ (event){

        buttonSection.className = "container-sm d-flex justify-content-center flex-column"

        questionHeader.innerHTML = "Question 1"
        questionBody.innerHTML = "Commonly used data types DO NOT include:"

        //this removes the start button 
        startBtn.remove()

        // startBtn.innerHTML = "1. Strings"
        // startBtn.className = "btn btn-primary m-3"
        // startBtn.id = "newID"
        
        buttonOne.innerHTML = "1. Strings"

        buttonTwo.innerHTML = "2. Booleans"

        buttonThree.innerHTML = "3. Alerts"
        
        buttonFour.innerHTML = "4. Numbers"

        //answer is 3
        
        // if (event.target.Matches("button")){
        //     secondQ()
        // }
        


        parent.addEventListener("click", secondQ)
        
        
    }

    firstQ()
    
    function secondQ (){
        questionHeader.innerHTML = "Question 2"
        questionBody.innerHTML = "The condition in an if / else statement is enclosed within:"

        buttonOne.innerHTML = "1. Quotes"

        buttonTwo.innerHTML = "2. Curly Brackets"

        buttonThree.innerHTML = "3. Parentheses"
        
        buttonFour.innerHTML = "4. Square Brackets"

        //answer is 3

        // thirdQ()
    }
    
    function thirdQ (){
        questionHeader.innerHTML = "Question 3"
        questionBody.innerHTML = "Arrays in JavaScript can be used to store:"

        buttonOne.innerHTML = "1. Numbers and Strings"

        buttonTwo.innerHTML = "2. Other Arrays"

        buttonThree.innerHTML = "3. Booleans"
        
        buttonFour.innerHTML = "4. All of the Above"

        //answer is 4

        // fourthQ()
    }
    
    function fourthQ (){
        questionHeader.innerHTML = "Question 4"
        questionBody.innerHTML = "String values must be enclosed within ____ when being assigned to variables:"

        buttonOne.innerHTML = "1. Commas"

        buttonTwo.innerHTML = "2. Curly Brackets"

        buttonThree.innerHTML = "3. Quotes"
        
        buttonFour.innerHTML = "4. Parenthesis"

        //answer is 3

        // fifthQ()
    }
    
    function fifthQ (){
        questionHeader.innerHTML = "Question 5"
        questionBody.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:"

        buttonOne.innerHTML = "1. Javascript"

        buttonTwo.innerHTML = "2. Terminal / Bash"

        buttonThree.innerHTML = "3. For Loops"
        
        buttonFour.innerHTML = "4. Console Log"

        //answer is 4
        
    }
} // end of allQ function


//this function starts the function allQ
function startQuiz (event){
    event.preventDefault()
    if (event.target.matches("button")){
        allQ()
    }
}

//this event listener allows the function startQuiz to run once the start quiz button is clicked
startBtn.addEventListener("click", startQuiz)