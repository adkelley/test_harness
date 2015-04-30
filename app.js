//AK Library
var AK = {
  render: function(value, desc) {
    var li = document.createElement ("li");
    li.className = value ? "pass" : "fail";
    li.appendChild (document.createTextNode (desc));
    document.getElementById ("results").appendChild (li);
  },
  test: function(testFunction, input, expectedOutput) {
    var passOrFail = testSuite[testFunction](input) === expectedOutput;
    var message = testFunction + " " + (passOrFail ? "passed!" : "failed.");
    this.render(passOrFail, message);
  }
}

//Example test functions, add yours here
var testSuite = {
  getMax: function(arr) {
    var max = arr[0];
    for (var i=1; i<arr.length; i++) {
      (max < arr[i]) ? max = arr[i] : max;
    }
    return max;
  },
  yourTestFunction: function() {}
}

//Run test functions here
var runTests = function() {
  AK.test("getMax", [1,2,3,4,5], 5);
  AK.test("getMax", [1,2,3,4,5], 4);
}
