function reverseStringRaw(str) {
  var strArray = str.split('');
  var charToMove;
  
  for(var i = 0; i < strArray.length; i++)
    {
      charToMove = strArray.splice( strArray.length - (i + 1), 1 );
      strArray.push( charToMove );
    }
    return strArray.join('');
}

function reverseStringMethods(str) {
	var strArray = str.split('');
	var reverseArray = strArray.reverse();
	return( reverseArray.join('') );
}

console.log(reverseStringRaw("joe is a momo"));