var every = function(arr, test){
  for(var i =0; i<arr.length; i++){
    if(!test(arr[i])){
      return false;
    }
  }
  return true;
}

var some = function(arr, test){
  for(var i=0; i<arr.length; i++){
    if(test(arr[i])){
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false