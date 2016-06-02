
function mutation(arr) {
	// verify arr is a valid array
	if(!Array.isArray(arr))
	{
		return 'Not a valid array';
	}
	
	// reduce all characters to lowercase
	for(var i = 0; i < arr.length; i++)
	{
		arr[i] = arr[i].toLowerCase();
	}

	// for each char in substring, check indexof()
	for(i = 0; i < arr[1].length; i++)
	{
		if(arr[0].indexOf(arr[1][i]) < 0)
		{
			return false;
		}
	}
  return true;
}

mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);