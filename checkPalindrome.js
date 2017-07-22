// Given the string, check if it is a palindrome.


// problem solved with Javascript built in methods 

function checkPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join(''); // return statement that will return a boolean if the string value passed 
                                  // in our parameter is the same as the word when reversed. 
                           
}

checkPalindrome("abac")
