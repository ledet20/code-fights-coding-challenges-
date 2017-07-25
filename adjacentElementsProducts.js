// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  var product = inputArray[0] * inputArray[1]; // variable that store the product of our first two elements in the array
  
  for(var i = 0; i < inputArray.length;i++) { // for loop that will iterate through the length of the array
    if(inputArray[i] * inputArray[i + 1] >= product) { // if statement that that will determine if the index value in our array multilpied
         // by the index value immedialty after it is greater that our product variable 
      product = inputArray[i] * inputArray[i + 1] // if the statement is true our product variable will be reassigned to the current index 
          // values that are being multiplied 
    }
  }
  return product;  //after the for loop is done iterating it will return the reassigned product value 
}

adjacentElementsProduct([3,6,-2,-5,7,3]) // 21
