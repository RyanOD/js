// bubble sort

function swap(p1, p2)
{
	var temp = list[p1];
	list[p1] = list[p2];
	list[p2] = temp;
}

function sort(list)
{
	var p1 = 0;
	var repeat = false;

	for(var p0 = 0; p0 < list.length; p0++)
	{
		p1 = p0 + 1;
		if(list[p0] > list[p1])
		{
			swap(p0, p1);
			repeat = true;
		}
	}
  
	if(repeat)
	{
		sort(list);
	}

	return list;
}

var list = [4,-2,-10,5,2,8,-20,-4,-4];
console.log(sort(list));