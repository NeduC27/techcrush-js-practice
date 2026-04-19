// Write a program using a for loop that prints the multiplication table of 5, from 5×1 up to 5×10.
// Expected output format: 5 x 1 = 5 / 5 x 2 = 10 ... 5 x 10 = 50
// Write your solution in your .js file
// Hint: Use template literals inside the loop to format each line neatly.
// Answer
function printTableOfFive() {
    const number = 5;

    for (let i = 1; i <= 10; i++) {
        // Use template literals (backticks) for clean formatting
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Execute the function
printTableOfFive();