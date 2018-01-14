// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);
// 
//     if (Object.keys(charMapA).length != Object.keys(charMapB).length) {
//         return false;
//     }
// 
//     for (const char of charMapA) {
//         if (charMapA[char] !== charMapB[char]) return false;
//     }
// 
//     return true;
// }

// function buildCharMap(str) {
//     let charMap = [];
//     for (const char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
// 
//     return charMap;
// }

// Solution #2
function anagrams(stringA, stringB) {
    return clearStr(stringA) === clearStr(stringB);
}

function clearStr(str) {
    return str.toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
