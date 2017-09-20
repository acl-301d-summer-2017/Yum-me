var app = app || {};

(function (module) {
    let gridControl = {};

    gridControl.display = function () {
        app.gridView.display();

    }

    module.gridControl = gridControl;

})(app); 