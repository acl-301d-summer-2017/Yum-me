var app = app || {};

(function (module) {
    let gridView = {};

    gridView.display = function () {
        $('#grid').show().siblings().hide();
        let $altView = $('#altView');
        $altView.attr('href', '/home');
        $altView.text('Home');
        
    }

    module.gridView = gridView;

})(app); 