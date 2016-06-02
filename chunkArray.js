
function chunkArrayInGroups(arr, size) {
  var tempArray = [];
  var count = 0;
  
  for(var i = 0; i < arr.length; i++)
  {
  	tempArray.push(arr[i]);
  	if((i+1) % size === 0 || (i + 1) == arr.length)
  	{
  		arr[count] = tempArray;
  		tempArray = [];
  		count++;
  	}
  }
  return (arr.slice(0, count));
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);