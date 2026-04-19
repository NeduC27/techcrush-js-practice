// Write a function gradeScore(score) that returns a letter grade:
// • 70 to 100 → 'A'
// • 60 to 69 → 'B'
// • 50 to 59 → 'C'
// • 40 to 49 → 'D'
// • Below 40 → 'F'
// Test it with: 85, 62, 45, and 30.
// Write your solution in your js file
// Hint: Use if / else if / else. Make sure your conditions don't overlap.
// Answer
function gradeScore(score) {
    if (score >= 70 && score <= 100) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

// Testing the function
console.log(gradeScore(85)); // Output: 'A'
console.log(gradeScore(62)); // Output: 'B'
console.log(gradeScore(45)); // Output: 'D'
console.log(gradeScore(30)); // Output: 'F'