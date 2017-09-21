var app = app || {};

(function (module) {
    let gridView = {};

    gridView.display = function () {
        $('#grid').show().siblings().hide();
        let $altView = $('#altView');
        $altView.attr('href', '/home');
        $altView.text('Home');
        gridView.renderAll();
    }

    gridView.renderAll = function () {
        let gridItemTemplate = Handlebars.compile($('#grid-item-template').text());
        let allImages = [];
        let allImagesRandom = [];
        console.log(app.Biz.all)
        allImages = app.Biz.all.map(bus => bus.imgUrls.forEach(img => allImages.push(img)));

        function grabRandom (arr) {
            let index = Math.floor(Math.random() * arr.length);
            allImagesRandom.push(arr.splice(index, 1)[0]);

            if (arr.length > 0) grabRandom(arr);
        }  
        console.log(allImages)
        
        grabRandom(allImages);
        console.log(allImagesRandom);    
    }

    module.gridView = gridView;

})(app); 