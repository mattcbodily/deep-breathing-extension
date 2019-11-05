let count = 100;

const counter = document.getElementById('breathe-counter');
counter.innerText = count;

function handleCount(){
    count--
    counter.innerText = count;
}

function handleTick(){
    setInterval(() => handleCount(), 1000)
}

