// From a unsorted array, check whether there are any two numbers that will sum up to a given number

function sumFinder(arr, sum){
  
  for(var i =0; i<arr.length; i++){   // for loop that will iterate through the length of the array
     for(var j = i+1;j<arr.length; j++){
        if (arr[i] + arr[j] == sum)
            return true;
     }
  }
  
  return false;
}

 sumFinder([6,4,3,2,1,7], 9); // true
