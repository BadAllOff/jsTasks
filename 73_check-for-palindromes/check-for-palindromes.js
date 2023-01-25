export const checkForPalindromes = (text) => {
  const inputStr = text
    .toLowerCase()
    .match(/[a-z0-9]/gi)
    .join('');
  const reversedStr = inputStr.split('').reverse().join('');

  // just to randomize the copypaste approach :)
  return isPalindrom(reversedStr);
};

// My humble opinion below :)
// Confusing name of the task
// for example: "race car" or "0_0 (: /- :) 0-0" could not be considered as a palindromes.
// https://en.wikipedia.org/wiki/Palindrome
// code example below is taken from Javacsript Ninja book (first edition) by Jhon Rezig
// great example of mathematical approach to find true palindromes.

function isPalindrom(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;

  return isPalindrom(text.substr(1, text.length - 2));
}
