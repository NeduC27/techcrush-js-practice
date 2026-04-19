// BONUS: Write a function called summarizeStudent that accepts an array of student objects (each with name and
// score). The function should return a new array of strings in this format:
// 'Amara scored 88 — Grade: B'
// Use your gradeScore function from Q8 inside this one.
// Write your solution in your .js file
// Hint: Use map() to loop the array and build each string. Call gradeScore(student.score) for the grade.
// Answer
// Ensure your gradeScore function is defined in the same file
function gradeScore(score) {
    if (score >= 70 && score <= 100) return 'A';
    else if (score >= 60) return 'B';
    else if (score >= 50) return 'C';
    else if (score >= 40) return 'D';
    else return 'F';
}

function summarizeStudent(students) {
    // We use .map() to transform the array of objects into an array of strings
    return students.map(student => {
        const grade = gradeScore(student.score);
        return `${student.name} scored ${student.score} — Grade: ${grade}`;
    });
}

// Test Case
const classList = [
    { name: 'Nedu', score: 88 },
    { name: 'David', score: 62 },
    { name: 'Ebuka', score: 35 }
];

const summaries = summarizeStudent(classList);
console.log(summaries); 