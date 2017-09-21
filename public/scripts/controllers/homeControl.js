var app = app || {};
(function (module) {
  let homeControl = {};

  homeControl.init = function() {
    
    app.userSettings.getGeoLoc( () => app.Biz.search(app.homeView.init) );


    $('#home').off('click');
    $('#home').on('click', '.slideshowControl', homeControl.slideControlHandler);
  };

  homeControl.slideControlHandler = function(event) {
    let buttonName = $(event.target).parent().attr('name');
    switch(buttonName){
      case 'previousImgBtn':
        homeControl.jump.previous();
        break;
      case 'nextImgBtn':
        homeControl.jump.next();
        break;
      case 'pause-button':
        homeControl.jump.stop()
        break;
      case 'play-button':
        homeControl.jump.start();
        break;
      default: 
        console.log('in homeControl; switch:default');
    }

  }

  homeControl.jump = {
    next: function() {
      if(app.homeView.historyPosition === app.homeView.history.length - 1) {
        app.homeView.slideShow();
        app.homeView.showPlayButton(false);
      } 
      else {
        app.homeView.renderSelect(++app.homeView.historyPosition);
        app.homeView.showPlayButton(true);        
      }
    },
    previous: function() {
      if(app.homeView.historyPosition > 0) {
        clearInterval(app.homeView.interval);
        app.homeView.renderSelect(--app.homeView.historyPosition);
        app.homeView.showPlayButton(true);
      }
    },
    start: function() { // needed after a .jump.previous
      app.homeView.slideShow();
      app.homeView.showPlayButton(false);
    },
    stop: function() {
      clearInterval(app.homeView.interval);
      app.homeView.showPlayButton(true);
    }
  };

  module.homeControl = homeControl;

})(app); 