function cleanString(str) {
	for( var i = 0; i < str.length; i++ )
    {
		if( !str[i].match( /[a-z0-9]/ ) )
		{
		  	str.splice( i, 1 );
		  	i--;
		}
    }
	return str.join('');
}