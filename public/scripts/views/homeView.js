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
    $('.atView').attr('href', '/grid');
    $altView.attr('src','/style/icons/table2.png');

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
        distance: ((currentBiz.distance)*0.00062137).toFixed(2)
      }
      
      app.Biz.currentLocation = currentBiz.latLong;
      homeView.history.push(bizDisplay);
      homeView.historyPosition = homeView.history.length - 1;

      function initMap() {
        var uluru = {lat: 45.22 , lng: -122.567};//lat long current 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        console.log("uluru", uluru);
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
      
      homeView.initMap();
      homeView.$centerpiece.empty().append(homeView.centerpieceTemplate(bizDisplay));
    }
    
    clearInterval(app.homeView.interval);
    render();
    homeView.interval = setInterval(render, app.userSettings.slideshowInterval);
  };

  homeView.renderSelect = function(index) {
    homeView.$centerpiece.empty().append(homeView.centerpieceTemplate(homeView.history[index]));

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

  homeView.initMap = function () {
    var userLat = app.userSettings.location.lat
    var userLong = app.userSettings.location.lng
    
    var mapEle = $('googleMapScript')
    var mapUrl= "https://maps.googleapis.com/maps/api/js?key=AIzaSyAbe6TOoV-iKlX4DIUfhu-Cs5omGDJZIA0&callback=homeView.initMap"  
    mapEle.src = mapUrl;
    var myOptions = {
      center: {lat: userLat, lng: userLong},
      zoom: 13
    };

    var map = new google.maps.Map(document.getElementById('map'), myOptions);

    var marker = new google.maps.Marker({
      position: {lat: app.Biz.currentLocation[0], lng: app.Biz.currentLocation[1]}, 
      map: map, 
    });
    
  
  }
  

  module.homeView = homeView;

})(app);