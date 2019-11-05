let instruction = 'Get Ready';
let count = 3;

const instructionText = document.getElementById('instruction');
instructionText.innerText = instruction;

const counter = document.getElementById('breathe-counter');
counter.innerText = count;

function handleCount(){
    count--
    if((instruction === 'Get Ready' && count === 0) || (instruction === 'Breathe Out' && count === 0)){
        count = 7;
        instruction = 'Breathe In';
        instructionText.innerText = instruction;
    } else if(instruction === 'Breathe In' && count === 0){
        count = 3;
        instruction = 'Breathe Out';
        instructionText.innerText = instruction;
    }
    counter.innerText = count;
}

function handleTick(){
    setInterval(() => handleCount(), 1000)
}

