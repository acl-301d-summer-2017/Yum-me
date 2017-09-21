var app = app || {};

(function (module) {

  let homeView = {};
    
  homeView.centerpieceTemplate = Handlebars.compile($('#centerpiece-template').text());
  homeView.$centerpiece = $('#centerpiece');
  homeView.$playPauseBtn = $('#play-pause-button');

  homeView.history = [];
  homeView.historyPosition = -1;
  homeView.interval = null;

  homeView.init = function() {
    homeView.display();
  };
// app.Biz.all[0].imgUrls[0]

  homeView.display = function () {
    let $altView = $('#altView');
    $altView.attr('href', '/grid');
    $altView.text('Grid');
    
    $('#home').show().siblings().hide();
    homeView.slideShow();
  }

  homeView.slideShow = function() {
    
    function render() {
      let currentBiz = app.Biz.all[Math.floor(Math.random() * app.userSettings.maxNumBiz)];
      
      let currentImg = currentBiz.imgUrls[0];
      
      let bizDisplay = {
        Img: currentImg,
        YelpUrl: currentBiz.yelpUrl,
        name: currentBiz.name,
        distance: currentBiz.distance
      }
      // TODO: prevent showing from recent homeView.history
      homeView.history.push(bizDisplay);
      homeView.historyPosition = homeView.history.length - 1;
      // [Math.floor(Math.random() * currentBiz.imgUrls.length)];
      console.table(homeView.history);
      console.log(homeView.historyPosition);

      homeView.$centerpiece.empty().append(homeView.centerpieceTemplate(bizDisplay));

    }
    
    clearInterval(app.homeView.interval);
    render();
    homeView.interval = setInterval(render, app.userSettings.slideshowInterval);
  };

  homeView.renderSelect = function(index) {
    homeView.$centerpiece.empty().append(homeView.centerpieceTemplate(homeView.history[index]));
    console.table(homeView.history);
    console.log(homeView.historyPosition);
  };

  homeView.showPlayButton = function(isOn) {
    switch(isOn) {
      case false:
        homeView.$playPauseBtn.attr('name', 'pause-button')
        homeView.$playPauseBtn.find('h1').text('||');
        break;
      case true:
        homeView.$playPauseBtn.attr('name', 'play-button')
        homeView.$playPauseBtn.find('h1').text('|>');
        break;
      default:
        console.log('in homeView; play/pause switch:default');
    }
  }

  

  module.homeView = homeView;

})(app);