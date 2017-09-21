var app = app || {};

(function (module) {
    let gridControl = {};

    gridControl.display = function () {
        
        app.gridView.display();

        clearInterval(app.homeView.interval)

    }

    module.gridControl = gridControl;

})(app); 