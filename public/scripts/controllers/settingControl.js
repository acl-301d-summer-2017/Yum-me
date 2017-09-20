var app = app || {};

(function (module) {
    $('#userInput').submit(function(event){
        app.userSettings.wantDelivery = $('#delivery :input');
    })

})(app); 