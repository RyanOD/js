
function largestOfFour(arr) {
  newArray = [];
  for(var subArray in arr)
    {
      arr[subArray].sort( function(a, b) {    // for sort() method, must provice compare function
      	return a - b;
      });
    }
  
  for(var i = 0; i < arr.length; i++)
    {
      newArray[i] = arr[i][arr.length - 1];
    }
  
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
