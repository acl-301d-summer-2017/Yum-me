var app = app || {};

(function (module) {
    let settingsControl = {};

    settingsControl.display = function () {
        app.settingsView.display();
    }

    module.settingsControl = settingsControl;

})(app); 