// Reverse a String
function reverseString(str) {
    // Step 1: Split the string into an array of characters
    const charArray = str.split("");

    // Step 2: Reverse the array of characters
    const reversedArray = charArray.reverse();

    // Step 3: Join the reversed array back into a string
    return reversedArray.join("");
}

// Count Characters
function countCharacters(str) {
    // Directly return the length of the string using the .length property
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    // Step 1: Split the sentence into an array of words
    const words = sentence.split(" ");

    // Step 2: Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        // Capitalize the first letter and add the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Step 3: Join the array of capitalized words back into a single string
    return capitalizedWords.join(" ");
}


// Find Maximum
function findMaximum(arr) {
    // Use the spread operator to expand the array and Math.max to find the maximum value
    return Math.max(...arr);
}

// Find Minimum
function findMinimum(arr) {
    // Use the spread operator to expand the array and Math.min to find the minimum value
    return Math.min(...arr);
}

// Sum of Array
function sumOfArray(arr) {
    // Use the reduce function to iterate over the array and calculate the sum
    // Accumulator starts at 0 and each element is added to it
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
    // Use the filter function to return elements that satisfy the condition
    return arr.filter(condition);
}

// Factorial
function factorial(n) {
    // Base case: If n is 0 or 1, return 1
    if (n === 0 || n === 1) return 1;

    // Recursive case: Multiply n by the factorial of n - 1
    return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
    // Step 1: Handle edge cases (numbers less than or equal to 1 are not prime)
    if (num <= 1) return false;

    // Step 2: Loop through potential divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the number is divisible by any of these, it's not prime
        if (num % i === 0) return false;
    }

    // Step 3: If no divisors were found, the number is prime
    return true;
}

// Fibonacci Sequence
function fibonacciSequence(n) {
    // Step 1: Handle edge cases for non-positive input
    if (n <= 0) return [];

    // Step 2: Initialize the Fibonacci sequence with the first two numbers
    const sequence = [0, 1];

    // Step 3: Generate the sequence until it contains n terms
    while (sequence.length < n) {
        // Add the last two numbers in the sequence to generate the next number
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }

    // Step 4: Return the sequence, truncated to n terms
    return sequence.slice(0, n);
}

// -----------------------------------------------
// EXAMPLES AND TESTS
// -----------------------------------------------

// // String Manipulation
// console.log("Reverse String:", reverseString("hello")); // Output: "olleh"
// console.log("Count Characters:", countCharacters("hello")); // Output: 5
// console.log("Capitalize Words:", capitalizeWords("hello world")); // Output: "Hello World"

// // Array Functions
// const numbers = [1, 2, 3, 4, 5];
// console.log("Maximum:", findMaximum(numbers)); // Output: 5
// console.log("Minimum:", findMinimum(numbers)); // Output: 1
// console.log("Sum of Array:", sumOfArray(numbers)); // Output: 15
// console.log("Filter Array (even numbers):", filterArray(numbers, num => num % 2 === 0)); // Output: [2, 4]

// // Mathematical Functions
// console.log("Factorial (5):", factorial(5)); // Output: 120
// console.log("Is Prime (7):", isPrime(7)); // Output: true
// console.log("Is Prime (10):", isPrime(10)); // Output: false
// console.log("Fibonacci Sequence (10 terms):", fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

