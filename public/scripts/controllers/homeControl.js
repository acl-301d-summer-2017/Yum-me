var app = app || {};
(function (module) {
  homeControl = {};

  homeControl.init = function() {
    app.Biz.search(app.homeView.init);

    // add event listener
  }

  module.homeControl = homeControl;

})(app); 