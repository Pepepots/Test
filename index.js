// Reverse the words in a string

const reversedWords = (words) => {
    const wordsArray = words.split(' ')
    const wordArray = wordsArray.map((word) => word.split(''))
    const wordReverseArray = wordArray.map( word => word.reverse().join(''))
    const reverseWord = wordReverseArray.join(' ')
    return reverseWord
}

// Test 1 
console.log(reversedWords("Swift Coding Challenges"));
// Result: tfiwS gnidoC segnellahC

// Test 2
console.log(reversedWords("The quick brown fox"));
// Result: ehT kciuq nworb xof


// Count the numbers

Array.prototype.numbersCount = function(count) {
    const countNumber = this.reduce( (i, number) => {
        const strNumberArray = String(number).split('')
        const findNumber = strNumberArray.filter( number => number === String(count))
        return i + findNumber.length
    },0)
    return countNumber
}

// Array 1 
const test1 = [5,15,55,515]

console.log(test1.numbersCount("5")); // 6
console.log(test1.numbersCount(1)); // 2

const test2 = [55555]
console.log(test2.numbersCount("5")); // 6
console.log(test2.numbersCount("1")); // 2

