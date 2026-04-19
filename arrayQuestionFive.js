// Use the map() method on the numbers array below to create a NEW array where every number is doubled. Log
// the new array. Do NOT change the original.

// const numbers = [3, 6, 9, 12, 15];
// Answer
const numbers = [3, 6, 9, 12, 15];
const newArray = numbers.map((num) => {
    return num * 2;
})
    console.log(newArray) // [ 6, 12, 18, 24, 30 ]
