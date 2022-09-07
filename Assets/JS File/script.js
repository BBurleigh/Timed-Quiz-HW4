const quizQuestions = [{
    id: 0,
    q: "When in doubt if something in JS is working, use ___________ and view it in the console.",
    a: [{text: "getElementById", isCorrect: false},
        {text: "displayFunction", isCorrect: false},
        {text: "console.log()", isCorrect: true},
        {text: "document.querySelector()", isCorrect: false}
       ]
}, 
{
    id: 1,
    q: "To keep a parent from changing when we click on the child button, we need to use the command _______________________ to tell JS not to look at the parent, just the target code.",
    a: [{text: "event.stopPropogation()", isCorrect: true},
        {text: "event.ceaseAndDesist", isCorrect: false},
        {text: "event.currentTarget.setAttribute()", isCorrect: false},
        {text: "document.querySelector()", isCorrect: false} 
       ]
},
{
    id: 2,
    q: "If we want to create an event where an event occurs at the click of a button, we use the command ____________________________.",
    a: [{text: "document.body.appendParent()", isCorrect: false},
        {text: "event.button.setAttribute()", isCorrect: false},
        {text: "event.stopParentalInvolvement()", isCorrect: false},
        {text: "button.addEventListener('click', function/event)", isCorrect: true}
       ]
},
{
    id: 3,
    q: "If we wanted to check for when a timer reaches 0 seconds (or something to happen once the timer reaches 0), we would create ____________________________________________.",
    a: [{text: "if(secondsLeft === 0) {code/function}", isCorrect: true},
        {text: "event.timer.callEvent()", isCorrect: false},
        {text: "for(var i = 0; i != secondsLeft) {code/function}", isCorrect: false},
        {text: "button.addEventListener('countdown === 0', event)", isCorrect: false}
       ]
},
{
    id: 4,
    q: "We write ______________________________ if we want to use JS to display text content.",
    a: [{text: "document.body.appendParent()", isCorrect: false},
        {text: "console.log()", isCorrect: false},
        {text: ".textContent", isCorrect: true},
        {text: "button.displayText()", isCorrect: false}
       ]
},
{
    id: 5,
    q: "If we want to prevent something from disappearing or returning to default, we add ________________________________ to our function.",
    a: [{text: "event.setAttribute()", isCorrect: false},
        {text: "event.preventDefault()", isCorrect: true},
        {text: "event.callResetCSS", isCorrect: false},
        {text: "event.querySelector()", isCorrect: false}
       ]
}
]

var start = true;

function iterate(id) {

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    question.innerText = quizQuestions[id].q;

    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');

    option1.innerText = quizQuestions[id].a[0].text;
    option2.innerText = quizQuestions[id].a[1].text;
    option3.innerText = quizQuestions[id].a[2].text;
    option4.innerText = quizQuestions[id].a[3].text;

    option1.value = quizQuestions[id].a[0].isCorrect;
    option2.value = quizQuestions[id].a[1].isCorrect;
    option3.value = quizQuestions[id].a[2].isCorrect;
    option4.value = quizQuestions[id].a[3].isCorrect;

    var selected = "";

    option1.addEventListener("click", () => {
        option1.style.backgroundColor = "lightgoldenrodyellow";
        option2.style.backgroundColor = "lightskyblue";
        option3.style.backgroundColor = "lightskyblue";
        option4.style.backgroundColor = "lightskyblue";
        selected = option1.value;
    })

    option2.addEventListener("click", () => {
        option1.style.backgroundColor = "lightskyblue";
        option2.style.backgroundColor = "lightgoldenrodyellow";
        option3.style.backgroundColor = "lightskyblue";
        option4.style.backgroundColor = "lightskyblue";
        selected = option2.value;
    })

    option3.addEventListener("click", () => {
        option1.style.backgroundColor = "lightskyblue";
        option2.style.backgroundColor = "lightskyblue";
        option3.style.backgroundColor = "lightgoldenrodyellow";
        option4.style.backgroundColor = "lightskyblue";
        selected = option3.value;
    })

    option4.addEventListener("click", () => {
        option1.style.backgroundColor = "lightskyblue";
        option2.style.backgroundColor = "lightskyblue";
        option3.style.backgroundColor = "lightskyblue";
        option4.style.backgroundColor = "lightgoldenrodyellow";
        selected = option4.value;
    })

    const evaluate = document.getElementsByClassName("evaluate");

    evaluate[0].addEventListener("click", () => {

        var totalPoints = 0;

        var playerScore = document.getElementById("current-score");
        
    for(var i = 0; i < quizQuestions.length; i++) {

        if (selected == "true") {

            result[0].innerHTML = "Correct!";

            result[0].style.color = "green";

            totalPoints++;

            playerScore.innerText =totalPoints;

        }   else {

            result[0].innerHTML = "Nope.";
            
            result[0].style.color = "red";

            remainingTime = remainingTime - 5;

        }

    }

    })
}

if (start) {

    iterate("0");

    countdown();

}

    var remainingTime = 60;

    var timer = document.getElementById("timer");

    function countdown() {
       
       var quizClock = setInterval(function() {

        remainingTime--;

        timer.innerText = remainingTime;

        if  (remainingTime === 0) {

            clearInterval(quizClock);
            
            endQuiz();
             
        }
       }, 1000);

    } 

    function endQuiz() {

          var initials = prompt("Please type your initials to record your score!");

          var scores = JSON.parse(localStorage.getItem("scores")) || []

          var score = {

             points: remainingTime,

             initials: initials,

          } 

          scores.push(score);

          localStorage.setItem("score", JSON.stringify(score));

    //    window.location.href = "scores.html";

    }

const next = document.getElementsByClassName('next')[0];

var id = 0;

next.addEventListener("click", () => {

    start = false;
    
    if (id < 5) {

        id++;

        iterate(id);

        console.log(id);

    } else {
        
        endQuiz();
    
    }

})

var startOver = document.getElementById("start-over");

startOver.addEventListener("click", function(e) {

    location.reload();

}, false);