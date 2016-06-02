
function findLongestWord(str) {
	pointer = 0;
	counter = 1;
	strArray = str.split(' ');
	while( counter < strArray.length )
	{
		if( strArray[pointer].length < strArray[counter].length )
		{
			pointer = counter;
		}
		counter++;
	}
  
  return strArray[pointer].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
