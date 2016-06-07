// merge sort

function merge(arrLeft, arrRight)
{
	var tempArray = [];
	while(arrLeft.length > 0 && arrRight.length > 0)
	{
		if(arrLeft[0] > arrRight[0])
		{
			tempArray.push(arrRight[0]);
			arrRight.shift();
		}
		else
		{
			tempArray.push(arrLeft[0]);
			arrLeft.shift();
		}
	}
	
	tempArray = arrLeft.length > 0 ? tempArray.concat(arrLeft) : tempArray.concat(arrRight);
	return tempArray;
}

function mergeSort(arr)
{
	if(arr.length === 0)
	{
		return 'Empty array';
	}
	
	if(arr.length < 2)
	{
		return arr;
	}

	var midpoint = Math.floor(arr.length / 2);
	var arrLeft = mergeSort(arr.slice(0, midpoint));
	var arrRight = mergeSort(arr.slice(midpoint));

	return merge(arrLeft, arrRight);
}

console.log(mergeSort([3,2,5,23,32,11,5,8,3,5,1,22]));
