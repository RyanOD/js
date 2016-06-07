
function destroyer(arr) {
	
	var targetArray = [];
	
	for (var property in arguments)
	{
		targetArray.push(arguments[property]);
	}
	
	arr = arguments[0].filter(function(num) {
      console.log(arguments);
		return targetArray.indexOf(num) !== -1 ? false : true;
	});
	
	console.log(arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);