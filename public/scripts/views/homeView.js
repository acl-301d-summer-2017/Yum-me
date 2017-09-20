var app = app || {};

(function (module) {

  let homeView = {};

  homeView.init = function() {
    homeView.display();
    console.log(app.Biz.all);
    $(`<img src=${app.Biz.all[0].imgUrls[1]}></img>`).appendTo($('#centerpiece'));
  };
// app.Biz.all[0].imgUrls[0]

  homeView.display = function () {
    let $altView = $('#altView');
    $altView.attr('href', '/grid');
    $altView.text('Grid');
    
    $('#home').show().siblings().hide();
  }

  module.homeView = homeView;

})(app);