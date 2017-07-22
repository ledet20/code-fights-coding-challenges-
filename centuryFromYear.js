/// Given a year, return the century it is in. The first century spans from the year 1 up
/// to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  
  var valueToCheck = year/100; // variable that will divide our year we pass in by 100
  
  if(year % 100 === 0) { // if statement that will check if our year is evenly divisible by 100 with no remainders 
    return valueToCheck;   //if the statement is true our varibale value will be returned 
  }
  
  return Math.floor(valueToCheck) + 1; // if the statement is not evenly divisble by 100 the Math.floor will return a variable value 
                          // less than the largest integer & a value of one will be added to return the integer to the correct century 
}

centuryFromYear(1700); // 17 
