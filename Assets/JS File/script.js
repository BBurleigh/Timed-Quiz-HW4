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