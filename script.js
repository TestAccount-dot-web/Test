function sayHello() {
  var x = Math.floor((Math.random() * 5));
  var numbers = ["1", "2", "3", "4", "5"];
  alert("Test " + numbers[x]);

}
window.onload = function () {
  document.getElementById("helloButton").onclick = sayHello;

};