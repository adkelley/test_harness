// Use to test my functions
function assert (value, desc) {
  var li = document.createElement ("li");
  li.className = value ? "pass" : "fail";
  li.appendChild (document.createTextNode (desc));
  document.getElementById ("results").appendChild (li);
}

// Write a function to find the maximum number in an array.
var getMax = function (arr) {
  var max = arr[0];
  for (var i=1; i<arr.length; i++) {
    (max < arr[i]) ? max = arr[i] : max;
  }
  return max;
}

var test = function() {
  assert(true, "Testing Functions");

  assert(getMax([0, 1, 2, 3, 4, 5]) === 5, "getMax() returns 5");

}

