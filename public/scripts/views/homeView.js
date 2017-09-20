var app = app || {};

(function (module) {

  homeView = {};

  homeView.init = function() {
    console.log(app.Biz.all);
    $(`<img src=${app.Biz.all[0].imgUrls[1]}></img>`).appendTo($('#centerpiece'));
  };
// app.Biz.all[0].imgUrls[0]
  module.homeView = homeView;

})(app);