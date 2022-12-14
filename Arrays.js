function  isArrayObj(myArray) {
  return  myArray.constructor.toString().indexOf("Array") > -1;
}

function  isArrayFunc(myArray) {
  return  myArray.constructor  === Array;
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
