function palindrome(str){
  var reversedStr = "";
  var lowerStr = str.toLowerCase();
  
  for(var length = lowerStr.length - 1; length >= 0; length--){  	
  		reversedStr += lowerStr[length];  
  }

  return reversedStr === lowerStr;
}

