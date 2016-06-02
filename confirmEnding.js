
function confirmEnding(str, target) {
  if(typeof(str) !== "string")
  {
    console.log('Not a string');
    return false;
  }
  startingPoint = str.length - target.length;
  for(var i = 0; i < str.length; i++)
  {
    if(str[startingPoint + i] !== target[i])
      {
        return false;
      }
  }  
  return true;
}

confirmEnding(234, "n");
