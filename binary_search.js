function getRandom(length){
	return (Math.random(0,1) * length);
}

function createList(start, end)
{
	var list = [];
	for(start; start <= end; start++)
	{
		list.push(start);
	}
	return list;
}

function randomizeList(list)
{
	var randomList = [];
	var location;

	while(list.length > 0)
	{
		location = getRandom(list.length)
		randomList.push(list.splice(location,1)[0]);
	}

	return randomList;
}

function mergeSort(list)
{


}

function binarySearch(list, num)
{
	var midPoint = Math.floor(list.length / 2);

	if(list[midPoint] == num)
	{
		done
	}
	else if(list[midPoint] > num)
	{
		list.slice(list.)
		binarySearch(list, num);
	}
	else
	{
		slice off bottom half of array
		binarySearch(list, num);
	}
}

var list;
list = createList( 1,10000 );
list = randomizeList( list );
list = mergeSort( list );
console.log(binarySearch( list,num ));