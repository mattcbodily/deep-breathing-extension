let repetitions = 3;
let instruction = 'Get Ready';
let count = 3;

const repetitionCount = document.getElementById('repetition-count');

const instructionText = document.getElementById('instruction');
instructionText.innerText = instruction;

const counter = document.getElementById('breathe-counter');
counter.innerText = count;

function handleCount(){
    count--
    if(instruction === 'Get Ready' && count === 0){
        count = 7;
        instruction = 'Breathe In';
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe Out' && count === 0){
        repetitions = repetitions - 1;
        instruction = 'Breathe In';
        count = 7;
        repetitionCount.innerText = repetitions;
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe In' && count === 0){
        count = 3;
        instruction = 'Breathe Out';
        instructionText.innerText = instruction;
    }
    if(repetitions === 0){
        alert('All Done')
    }
    counter.innerText = count;
}

function handleTick(){
    setInterval(() => handleCount(), 1000)
}