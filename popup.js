let instruction = 'Get Ready';
let count = 3;

const inputContainer = document.getElementById('reps-input-container');
const counterContainer = document.getElementById('counter-container');

const selectInput = document.querySelector('select');

const instructionText = document.getElementById('instruction');

const counter = document.getElementById('breathe-counter');

function sevenEleven(){
    count--
    if(instruction === 'Get Ready' && count === 0){
        count = 7;
        instruction = 'Breathe In';
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe Out' && count === 0){
        instruction = 'Breathe In';
        count = 7;
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe In' && count === 0){
        count = 11;
        instruction = 'Breathe Out';
        instructionText.innerText = instruction;
    }
    // if(repetitions === 0){
    //     counterContainer.style = 'display: none;'
    //     inputContainer.style = 'display: initial;'
    //     clearInterval(interval)
    // }
    counter.innerText = count;
}

function fourSevenEight(){
    count--
    console.log(count)
    if(instruction === 'Get Ready' && count === 0){
        count = 4;
        instruction = 'Breathe In';
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe Out' && count === 0){
        count = 4;
        instruction = 'Breathe In';
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe In' && count === 0){
        count = 7;
        instruction = 'Hold Breath';
        instructionText.innerText = instruction;
    } else if(instruction === 'Hold Breath' && count === 0){
        count = 8
        instruction = 'Breathe Out'
        instructionText.innerText = instruction;
    }
    counter.innerText = count;
}

let interval;

function handleTick(cb){
    inputContainer.style = 'display: none;'
    counterContainer.style = 'display: initial;'
    instructionText.innerText = instruction;
    counter.innerText = count;

    interval = setInterval(() => cb(), 1000)
}

document.getElementById('seven-eleven-button').addEventListener('click', function(){
    handleTick(sevenEleven)
})

document.getElementById('four-seven-eight-button').addEventListener('click', function(){
    handleTick(fourSevenEight)
})

document.getElementById('all-done-button').addEventListener('click', function(){
    instruction = 'Get Ready';
    count = 3;
    counterContainer.style = 'display: none;'
    inputContainer.style = 'display: initial;'
    clearInterval(interval)
})

const infoModalBtn = document.getElementById('information-modal-button');
const infoModal = document.querySelector('.information-modal');

infoModalBtn.addEventListener('click', function(){
    infoModal.classList.toggle('active')
})

document.getElementById('exit-modal').addEventListener('click', function(){
    infoModal.classList.toggle('active');
})