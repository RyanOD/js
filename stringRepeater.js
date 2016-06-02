
function repeatStringNumTimes(str, num) {
  // repeat after me
  strCopy = str;

  if(typeof(str) !== "string")
    {
      return 'Not a valid string';
    }

  if(typeof(num) !== 'number')
    {
      return 'Not a valid number';
    }
  
  if(num < 0)
    {
      return '';
    }
  
  for(var i = 0; i < num - 1; i++)
    {
      str += strCopy;
    }
  
  return str;
}

repeatStringNumTimes("abc", 3);
