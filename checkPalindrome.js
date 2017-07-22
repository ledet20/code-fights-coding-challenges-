// Given the string, check if it is a palindrome.


// problem solved with Javascript built in methods 

function checkPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join(''); // return statement that will return a boolean if the string value
                                          // passed in our parameter is the same as the word when reversed.                  
}

checkPalindrome("abac")


// METHOD 2 

function checkPalindrome(str) {
 var rtnStr = ''; // create a variable that will store an empty string
  for(var i = str.length-1; i>=0;i--){ // for loop that will iterate the length of the string starting from the last index value 
    rtnStr +=str[i];  // with each iteration the string index value will be added in reverse order to the empty array 
  }
  if(str === rtnStr) { // if statement that will determine if our original string parameter is equal to our new reversed string 
    return true; // if the statement is true the value of true will be returned 
  }
  return false; // otherwise the values were not equivalent and therefore false 
}

checkPalindrome("hannah") // true
