function LetterCapitalize(str) {
  
  var temp;
  strArray = str.split(" ");
  for (var st in strArray)
  {
  	temp = strArray[st];
  	temp = temp.charAt(0).toUpperCase() + temp.slice(1);
  	strArray[st] = temp;
  }
  
  str = strArray.join(' ');
  return(str);
         
}
   
// keep this function call here 
               
LetterCapitalize('');