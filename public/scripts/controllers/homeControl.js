var app = app || {};
alert("hello from above the IFFE");
(function (module) {
  alert("hello");

})(app); 