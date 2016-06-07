
function bouncer(arr) {
	for(var i = 0; i < arr.length; i++)
	{
		arr = arr.filter(function( value ){
			if( value )
			{
				return true;
			}
		});
	}
  return( arr );
}

bouncer([7, "ate", "", false, 9]);
