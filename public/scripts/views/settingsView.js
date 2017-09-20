var app = app || {};

(function (module) {
    let settingsView = {};

    settingsView.display = function () {
        let $altView = $('#altView');
        $altView.attr('href', '/home');
        $altView.text('Home');

        $('#settings').show().siblings().hide();
    }

    module.settingsView = settingsView;
})(app); 
