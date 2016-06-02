// selection sort

function compare(start, position)
{
	return(list[start] > list[position]);
}

function swap(p1, p2)
{
	var temp = list[p1];
	list[p1] = list[p2];
	list[p2] = temp;
}

function sort(list)
{
	for(var p0 = 0; p0 < list.length; p0++)
	{
		var p1 = p0;
		var p2 = p0 + 1;
		var swapIt = false;

		while(p2 < list.length)
		{
			if(compare(p1, p2))
			{
				p1 = p2;
				swapIt = true;
			}
			p2++;
		}
		if(swapIt)
		{
			swap(p0, p1);
		}
	}
	return list;
}

var list = [4,-2,-10,5,2,8];
console.log(sort(list));