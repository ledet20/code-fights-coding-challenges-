// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
//Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger
//than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. 
//Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
 statues = statues.sort(function(a,b) {  // reassign our input array to be sorted from ascending order using the javascript built in sort method
                        return a-b;
                        });
                        
 var min = statues[0]; // variable that will be store the first index value in our array
 var max = statues[statues.length - 1]; // variable that will store that last index value in our array
 var count = 0; // count variable that will start at 0
 
 for(var i = min; i < max; i++) { // for loop that will iterate through the every integer found between our min and max values 
  if(statues.indexOf(i) === -1) { // if statement that will determine if the integer is in our our original
         // array if the index value  is -1  then our value is not in the array 
   count++; // if the statement is true our count variable will increase by 1
  }
 }
  
 return count;
}

makeArrayConsecutive2([6,2,3,8]) // 3 
