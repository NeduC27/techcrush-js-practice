// Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full
// name in this exact format: 'LASTNAME, Firstname'.
// Test: formatName(' esther ', ' ogbu ') should return 'OGBU, Esther'
// Write your solution in your .js file
// 💡 Hint: Use trim(), toUpperCase(), and charAt(0).toUpperCase() + slice(1) for title case.
// Answer
function formatName(firstName, lastName) {
    // 1. Trim whitespace and convert to uppercase for the last name
    const cleanLast = lastName.trim().toUpperCase();

    // 2. Trim whitespace and convert to lowercase for the first name
    const cleanFirst = firstName.trim().toLowerCase();

    // 3. Capitalize the first letter and join with the rest of the string
    const formattedFirst = cleanFirst.charAt(0).toUpperCase() + cleanFirst.slice(1);

    // 4. Return in the 'LASTNAME, Firstname' format
    return `${cleanLast}, ${formattedFirst}`;
}

// Test case
console.log(formatName('  esther  ', '  ogbu  ')); // Output: 'OGBU, Esther'