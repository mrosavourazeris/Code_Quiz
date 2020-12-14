//global variables
var startBtn = document.getElementById("startquizbtn")
var buttonSection = document.getElementById("parent")
var questionHeader = document.querySelector("#h1")
var questionBody = document.querySelector("#h5")
var questionZ = document.getElementById("questionZone")

var userScore = 0




//JavaScript related to the timer on the quiz START
var timeID = document.getElementById("timer")

var startTime = 5
var endTime = 0
var penalty = 10

//JavaScript related to the timer on the quiz END
function myTimer (){
    thisTimer = setInterval(function(){
            startTime--
            timeID.innerHTML = "Time: " + startTime + " seconds left"
            if (startTime <= 0) {
                clearInterval(thisTimer)
                // timeID.innerHTML = "Time: 0 seconds left"
                alert("Your final score was: " + userScore)
                gameOver()
            }
        }, 1000 )
    }

//will end game if the timer hits 0 or last question is answered 
function gameOver (){
    questionHeader.textContent = ("Enter your initials")
    questionBody.textContent = ""
    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userInput.setAttribute("id", "initials");
    userInput.textContent = "";
    questionBody.appendChild(userInput)


    
    var submitBtn = document.createElement("button");
    submitBtn.className = "btn btn-success m-3"
    // submitBtn.setAttribute("style", "width: 35%")
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "Submit");
    submitBtn.textContent = "Submit";

    buttonSection.className = "container-sm d-flex justify-content-center"
    buttonSection.innerHTML = ""
    buttonSection.appendChild(submitBtn);

    submitBtn.addEventListener("click", function (){
        var userInitials = userInput.value
        if (userInitials === null)
            console.log("No initials were entered, please enter your initials!")
    })
    

}


function firstQ (){
    
    myTimer()

    buttonSection.className = "container-sm d-flex justify-content-center "

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
    

    questionHeader.innerHTML = "Question 1"
    questionBody.innerHTML = "Commonly used data types DO NOT include:"

    //this removes the start button 
    startBtn.remove()
    
    buttonOne.innerHTML = "1. Strings"

    buttonTwo.innerHTML = "2. Booleans"

    buttonThree.innerHTML = "3. Alerts"
    
    buttonFour.innerHTML = "4. Numbers"

    //answer is 3
}

    
function secondQ (){

    var buttonOne = document.createElement("button")
    buttonOne.className = "btn btn-primary m-3"
    var buttonTwo = document.createElement("button")
    buttonTwo.className = "btn btn-primary m-3"
    var buttonThree = document.createElement("button")
    buttonThree.className = "btn btn-primary m-3"
    var buttonFour = document.createElement("button")
    buttonFour.className = "btn btn-primary m-3"

    buttonSection.innerHTML = ""
    
    buttonSection.appendChild(buttonOne)
    buttonSection.appendChild(buttonTwo)
    buttonSection.appendChild(buttonThree)
    buttonSection.appendChild(buttonFour)
    

    questionHeader.innerHTML = "Question 2"
    questionBody.innerHTML = "The condition in an if / else statement is enclosed within:"

    buttonOne.innerHTML = "1. Quotes"

    buttonTwo.innerHTML = "2. Curly Brackets"

    buttonThree.innerHTML = "3. Parentheses"
    
    buttonFour.innerHTML = "4. Square Brackets"

    //answer is 3
}

function thirdQ (){

    var buttonOne = document.createElement("button")
    buttonOne.className = "btn btn-primary m-3"
    var buttonTwo = document.createElement("button")
    buttonTwo.className = "btn btn-primary m-3"
    var buttonThree = document.createElement("button")
    buttonThree.className = "btn btn-primary m-3"
    var buttonFour = document.createElement("button")
    buttonFour.className = "btn btn-primary m-3"

    buttonSection.innerHTML = ""

    buttonSection.appendChild(buttonOne)
    buttonSection.appendChild(buttonTwo)
    buttonSection.appendChild(buttonThree)
    buttonSection.appendChild(buttonFour)

    questionHeader.innerHTML = "Question 3"
    questionBody.innerHTML = "Arrays in JavaScript can be used to store:"

    buttonOne.innerHTML = "1. Numbers and Strings"

    buttonTwo.innerHTML = "2. Other Arrays"

    buttonThree.innerHTML = "3. Booleans"
    
    buttonFour.innerHTML = "4. All of the Above"

    //answer is 4
}

function fourthQ (){

    var buttonOne = document.createElement("button")
    buttonOne.className = "btn btn-primary m-3"
    var buttonTwo = document.createElement("button")
    buttonTwo.className = "btn btn-primary m-3"
    var buttonThree = document.createElement("button")
    buttonThree.className = "btn btn-primary m-3"
    var buttonFour = document.createElement("button")
    buttonFour.className = "btn btn-primary m-3"

    buttonSection.innerHTML = ""

    buttonSection.appendChild(buttonOne)
    buttonSection.appendChild(buttonTwo)
    buttonSection.appendChild(buttonThree)
    buttonSection.appendChild(buttonFour)

    questionHeader.innerHTML = "Question 4"
    questionBody.innerHTML = "String values must be enclosed within ____ when being assigned to variables:"

    buttonOne.innerHTML = "1. Commas"

    buttonTwo.innerHTML = "2. Curly Brackets"

    buttonThree.innerHTML = "3. Quotes"
    
    buttonFour.innerHTML = "4. Parenthesis"

    //answer is 3
}

function fifthQ (){

    var buttonOne = document.createElement("button")
    buttonOne.className = "btn btn-primary m-3"
    var buttonTwo = document.createElement("button")
    buttonTwo.className = "btn btn-primary m-3"
    var buttonThree = document.createElement("button")
    buttonThree.className = "btn btn-primary m-3"
    var buttonFour = document.createElement("button")
    buttonFour.className = "btn btn-primary m-3"

    buttonSection.innerHTML = ""

    buttonSection.appendChild(buttonOne)
    buttonSection.appendChild(buttonTwo)
    buttonSection.appendChild(buttonThree)
    buttonSection.appendChild(buttonFour)

    questionHeader.innerHTML = "Question 5"
    questionBody.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:"

    buttonOne.innerHTML = "1. Javascript"

    buttonTwo.innerHTML = "2. Terminal / Bash"

    buttonThree.innerHTML = "3. For Loops"
    
    buttonFour.innerHTML = "4. Console Log"

    //answer is 4

    
}

document.addEventListener("click", e=>{

    console.log(e.target.innerHTML)

    if(e.target.id === "startquizbtn"){
        firstQ()
    }

    else if(e.target.innerHTML === "3. Alerts" ||e.target.innerHTML === "3. Parentheses" || e.target.innerHTML === "4. All of the Above" || e.target.innerHTML === "3. Quotes" || e.target.innerHTML === "4. Console Log" ){

        console.log("Got The right answer")

        if(e.target.innerHTML === "3. Alerts"){
            alert("Got the right answer!")
            secondQ()
            userScore++
        }
        else if(e.target.innerHTML === "3. Parentheses"){
            alert("Got the right answer!")
            thirdQ()
            userScore++
        }
        else if(e.target.innerHTML === "4. All of the Above"){
            alert("Got the right answer!")
            fourthQ()
            userScore++
        }
        else if(e.target.innerHTML === "3. Quotes"){
            alert("Got the right answer!")
            fifthQ()
            userScore++
        }else if(e.target.innerHTML === "4. Console Log"){
            alert("Got the right answer!")
            userScore++
            gameOver()
            clearInterval(thisTimer)
        }
        
    }

    else if (e.target.innerHTML === "1. Strings" || e.target.innerHTML === "2. Booleans" || e.target.innerHTML === "4. Numbers" || 
             e.target.innerHTML === "1. Quotes" || e.target.innerHTML === "2. Curly Brackets" || e.target.innerHTML === "4. Square Brackets" || 
             e.target.innerHTML === "1. Numbers and Strings" || e.target.innerHTML === "2. Other Arrays" || e.target.innerHTML === "3. Booleans" ||
             e.target.innerHTML === "1. Commas" || e.target.innerHTML === "2. Curly Brackets" || e.target.innerHTML === "4. Parenthesis" ||
             e.target.innerHTML === "1. Javascript" || e.target.innerHTML === "2. Terminal / Bash" || e.target.innerHTML === "3. For Loops") {
        alert("Got the right Wrong! Minus 10 seconds!")
        userScore--
        startTime = startTime - penalty    
    }
})
