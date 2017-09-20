var app = app || {};

(function (module) {
    settingsControl = {};
    $('#userInput').submit(function(event){
        console.log(app.userSettings.wantDelivery +'1');
        app.userSettings.wantDelivery = $('#delivery :input');
        console.log(app.userSettings.wantDelivery);

    })
module.settingsControl = settingsControl;
})(app); 

app.settingsControl.init