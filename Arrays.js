function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
  
/*   return  myArray.constructor.toString().indexOf("Array") > -1;
    return  myArray.constructor  === Array;
    
  Determines if an object is an array using the constructor operator

*/
}

function arrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

function arrayMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
