var countVowels = function(str){
  var count = 0;
  var input = str.toLowerCase();
  var vowelArr = [“a”, “e”, “i”, “o”, “u”];
  for (var i = 0; i < input.length; i++){
    if(vowelArr.includes(input[i])){
      count++;
    }
  }
  return count;
}