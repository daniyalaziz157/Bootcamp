var countVowels = function(str){
    var count = 0;
    var input = str.toLowerCase();
    for (var i = 0; i < input.length; i++){
      if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
        count++;
      }
    }
  }