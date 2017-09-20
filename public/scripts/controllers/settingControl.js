var app = app || {};

(function (module) {
  
    let settingsControl = {};
  
    settingsControl.display = function () {
        app.settingsView.display();
    }
  
    $('#userInput').submit(function(event){
        console.log(app.userSettings.wantDelivery +'1');
        app.userSettings.wantDelivery = $('#delivery :input');
        console.log(app.userSettings.wantDelivery);

    })
  
    module.settingsControl = settingsControl;

})(app); 
