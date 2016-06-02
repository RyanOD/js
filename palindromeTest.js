function palindromeTest(str) {

  str = str.replace(/\W/g,'').toLowerCase();  		// /\W/g is equivalent to [^0-9a-zA-Z_]g
  for(var i = 0; i < str.length; i++)
  {
  	if(str[i] !== str[str.length - 1 - i])
  	{
  		return false;
  	}
  }
  return true
}

console.log(palindromeTest("TaCo CAT!!"));
console.log(palindromeTest("A man a plan a canal, Panama!"));
console.log(palindromeTest("123Race Car321"));
console.log(palindromeTest("Hot dog love"));