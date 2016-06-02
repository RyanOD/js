function truncateString(str, num) {
	if(typeof(str) !== 'string')
	{
		return 'Invalid string provided';
	}
	
	if(typeof(num) !== 'number')
	{
		return 'Invalid length provided';
	}
	
	if(str.length > num)
	{
		if(num > 3)
		{
			num -= 3;
		}
		str = str.substring(0, num) + '...';
	}
	return(str);
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
