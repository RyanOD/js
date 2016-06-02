
function slasher(arr, howMany) {

  // check if arr is an array
  if( typeof(arr) !== 'array' )
  {
  	return 'Not a valid array';
  }

  // check to see if howMany is a valid number
  if( typeof(howMany) !== 'number' )
  {
  	return 'Not a valid number';
  }

  // Method 1: leverage splice method of array object
  // arr.splice(0, howMany);
  // return arr;

  // Method 2: use for loop and shift method to remove array elements
  for(var i = 0; i < howMany; i++)
  {
  	arr.shift;
  }
  return arr;
}

slasher([1, 2, 3], 2);
