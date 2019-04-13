var i=0;
var A = setInterval(function () {
  console.log(i++);
}, 1000);
var B = setInterval(function () {
clearInterval(A);
}, 1000);
// clearInterval(B);
