// COUNTER PROGRAM

// Assigning HTML to constants
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// Counter
let count = 0;

// Increase counter functionality
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

// Decrease counter functionality
decreaseBtn.onclick = function() {
    // Do not allow below zero
    if (count <= 0) {
        countLabel.textContent = count;    
    }
    else {
        count--;
        countLabel.textContent = count;
    }
}

// Reset functionality
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}