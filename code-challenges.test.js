// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it, expect } = require("@jest/globals")
// const { describe } = require("yargs")

// const { it, expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciGen", () => {
    it("returns a fibonacci sequence of a given length based on input", () => {
      expect(fibonacciGen(6)).toEqual([1, 1, 2, 3, 5, 8]) 
      expect(fibonacciGen(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// ---Initial Jest Test Result---

// FAIL  ./code-challenges.test.js
// fibonacciGen
//   ✕ returns a fibonacci sequence of a given length based on input

// ● fibonacciGen › returns a fibonacci sequence of a given length based on input

//   ReferenceError: fibonacciGen is not defined

//     18 | describe("fibonacciGen", () => {
//     19 |     it("returns a fibonacci sequence of a given length based on input", () => {
//   > 20 |       expect(fibonacciGen(6)).toEqual([1, 1, 2, 3, 5, 8]) 
//        |       ^
//     21 |       expect(fibonacciGen(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     22 |     })
//     23 | })

//     at Object.<anonymous> (code-challenges.test.js:20:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.143 s

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

// Create a function called fibonacciGen with a parameter called num
// Declare an empty array, set first two indexes of array to one
// Write for loop that starts at the second index and runs as long as the index is less than the argument passed into the function
// Push numbers into the array which are a result of the previous two indexes being added together
// Return array and call function
const fibonacciGen = (num) => {
  let arr = []
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i < num; i++){
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr
}

fibonacciGen(6)
fibonacciGen(10)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("onlyOddSort", () => {
    it("returns a sorted array of only odd numbers based on input array", () => {
        expect(onlyOddSort(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddSort(fullArr2)).toEqual([-823, 7, 23])
    })
})

// ---Initial Jest Test Result---

// FAIL  ./code-challenges.test.js
// onlyOddSort
//   ✕ returns a sorted array of only odd numbers based on input array

// ● onlyOddSort › returns a sorted array of only odd numbers based on input array

//   ReferenceError: onlyOddSort is not defined

//     85 | describe("onlyOddSort", () => {
//     86 |     it("returns a sorted array of only odd numbers based on input array", () => {
//   > 87 |         expect(onlyOddSort(fullArr1)).toEqual([-9, 7, 9, 199])
//        |         ^
//     88 |         expect(onlyOddSort(fullArr2)).toEqual([-823, 7, 23])
//     89 |     })
//     90 | })

//     at Object.<anonymous> (code-challenges.test.js:87:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.143 s, estimated 1 s

// b) Create the function that makes the test pass.

// Create a function called onlyOddSort with a parameter called array
// Create variable which is equal to the argument array filtered for typeof
// Create another variable equal to that filtered array which filters the array further into only odd numbers
// Return that array sorted so that the numbers will appear low to high
// Call the function
const onlyOddSort = (array) => {
    arr1 = array.filter(value => typeof value === 'number')
    arr2 = arr1.filter(value => value % 2 !== 0)
    return arr2.sort((a, b) => a - b)
}

onlyOddSort(fullArr1)
onlyOddSort(fullArr2)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumSum", () => {
    it("returns accumulating sum array based on input array", () => {
        expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumSum(numbersToAdd3)).toEqual([])
    })
})

// ---Initial Jest Test Result---

// FAIL  ./code-challenges.test.js
// accumSum
//   ✕ returns accumulating sum array based on input array (1 ms)

// ● accumSum › returns accumulating sum array based on input array

//   ReferenceError: accumSum is not defined

//     135 | describe("accumSum", () => {
//     136 |     it("returns accumulating sum array based on input array", () => {
//   > 137 |         expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
//         |         ^
//     138 |         expect(accumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
//     139 |         expect(accumSum(numbersToAdd3)).toEqual([])
//     140 |     })

//     at Object.<anonymous> (code-challenges.test.js:137:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.126 s

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

// Create a function called accumSum with an a parameter called array
// Declare an empty array
// Loop through the argument array with forEach function 
// Use conditional statement to say that the first index should be left alone and all other indexes should be value at the current index plus the value at the previous index in the new array
// Return the new array
// Call the function
const accumSum = (array) => {
    let arr = []
    array.forEach((num, index) => {
        if (index === 0){
            arr[index] = num
        } else {
            arr[index] = num + arr[index - 1]
        }
    })
    return arr
}

accumSum(numbersToAdd1)
accumSum(numbersToAdd2)
accumSum(numbersToAdd3)