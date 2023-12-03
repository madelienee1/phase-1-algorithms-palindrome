function isPalindrome(word) {
  return word === word.split('').reverse().join('')
}

// Pseudo code
// Initialize an empty string to store the reversed version of the input string.
// Iterate through each character of the input string, starting from the end and moving towards the beginning.
// Append each character to the reversed string
// After the iteration, check if the reversed string is the same as the input string.
// If they are the same, return `true` (indicating the string is a palindrome).
// If they are not the same, return `false` (indicating the string is not a palindrome).


/* Description
  This function splits the string into an array of characters using 'split('')',
  reversing the array with 'reverse()', and then joining the array back into a string
  using join(''). It then checks if the reversed string is the same as the original string.
  If they are it returns 'true', indicatign the string is a palindrome. Otherwise it returns 'false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
