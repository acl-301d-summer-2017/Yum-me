var app = app || {};

(function (module) {

  let homeView = {};
  
  homeView.history = [];
  homeView.interval = null;

  homeView.init = function() {
    homeView.display();
    console.log(app.Biz.all);
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
    
    let centerpieceTemplate = Handlebars.compile($('#centerpiece-template').text());
    
    function render() {
      let currentBiz = app.Biz.all[Math.floor(Math.random() * app.userSettings.maxNumBiz)];
      // TODO: prevent showing from recent homeView.history
      homeView.history.push(currentBiz);

      let currentImg = currentBiz.imgUrls[0];
      // [Math.floor(Math.random() * currentBiz.imgUrls.length)];
      

      $('#centerpiece').empty().append(centerpieceTemplate({
        Img: currentImg,
        YelpUrl: currentBiz.yelpUrl,
        name: currentBiz.name,
        distance: currentBiz.distance
      }));
    }

    render();
    homeView.interval = setInterval(render, 2000);
    // clearInterval(app.homeView.interval)

  }

  module.homeView = homeView;

})(app);