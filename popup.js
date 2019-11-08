let repetitions = 0;
let instruction = 'Get Ready';
let count = 3;

const inputContainer = document.getElementById('reps-input-container');
const counterContainer = document.getElementById('counter-container');

const repetitionCount = document.getElementById('repetition-count');
const selectInput = document.querySelector('select');

const instructionText = document.getElementById('instruction');
instructionText.innerText = instruction;

const counter = document.getElementById('breathe-counter');
counter.innerText = count;

function handleCount(interval){
    count--
    if(instruction === 'Get Ready' && count === 0){
        count = 7;
        instruction = 'Breathe In';
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe Out' && count === 0){
        repetitions = repetitions - 1;
        instruction = 'Breathe In';
        count = 7;
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe In' && count === 0){
        count = 3;
        instruction = 'Breathe Out';
        instructionText.innerText = instruction;
    }
    if(repetitions === 0){
        counterContainer.style = 'display: none;'
        inputContainer.style = 'display: initial;'
        clearInterval(interval)
    }
    counter.innerText = count;
}


function handleTick(){
    repetitions = +selectInput.value;
    inputContainer.style = 'display: none;'
    counterContainer.style = 'display: initial;'

    let interval;
    interval = setInterval(() => handleCount(interval), 1000)
}

document.getElementById('submit-button').addEventListener('click', function(){
    handleTick()
})