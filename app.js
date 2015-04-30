//AK Library
var AK = {
  render: function(value, desc) {
    var li = document.createElement ("li");
    li.className = value ? "pass" : "fail";
    li.appendChild (document.createTextNode (desc));
    document.getElementById ("results").appendChild (li);
  },
  test: function(testFunction, input, expectedOutput) {
    var passOrFail = testFunction(input) === expectedOutput;
    var functionName = testFunction.name;
    var message = functionName + (passOrFail ? "passed!" : "failed.");
    this.render(passOrFail, message);
  }
}

//Example test functions, add yours here
var testing = {
  getMax: function(arr) {
    var max = arr[0];
    for (var i=1; i<arr.length; i++) {
      (max < arr[i]) ? max = arr[i] : max;
    }
    return max;
  }
}

//Run test functions here
var testSuite = function() {
  AK.test(testing.getMax, [1,2,3,4,5], 5);
  AK.test(testing.getMax, [1,2,3,4,5], 4);
}
