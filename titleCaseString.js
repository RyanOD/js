
function titleCase(str) {
  var charArray;
  str = str.toLowerCase();
  strArray = str.split(' ');
  for(var i = 0; i < strArray.length; i++)
    {
      charArray = strArray[i].split('');
      charArray[0] = charArray[0].toUpperCase();
      strArray[i] = charArray.join('');
    }
  str = strArray.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
