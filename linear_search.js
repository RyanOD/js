// binary search

function search(list, item)
{
	for(var i = 0; i < list.length; i++)
	{
		if(list[i] == item)
		{
			return 'Item ' + item + ' found in position ' + i;
		}
	}
	return item + ' not found in list';
}

list = [1,2,3,4,5,6,7,8,9]
console.log(search(list, 9));


// question here is...what is the fastest way to do this loop? while? different syntax?