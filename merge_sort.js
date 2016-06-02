// merge sort

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

function sort()
{
	for(var i = 0; i < list.length; i++)
	{

	}


}

6,5,3,1,8,7,2,4

6  5  3  1  8  7  2  4

pass list 1 & 2 into compare
compare first positions in list 1 & 2 (6 w/ 5)
swap 6 & 5 and merge into single list

compare first positions in list 3 & 4

