var app = app || {};
(function (module) {
  let homeControl = {};
  homeControl.init = function() {
    app.userSettings.getGeoLoc( () => app.Biz.search(app.homeView.init) );

    // TODO: add event listener
  }

  homeControl.display = function() {
    app.homeView.display();
    //TODO: add event listener
  }

  module.homeControl = homeControl;

})(app); 