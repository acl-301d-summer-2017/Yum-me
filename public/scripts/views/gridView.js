var app = app || {};

(function (module) {
    let gridView = {};

    gridView.display = function () {
        $('#grid').show().siblings().hide();
        let $altView = $('#altView');
        $('.atView').attr('href', '/home');
        $altView.attr('src','/style/icons/home.png');
        gridView.renderAll();
    }

    gridView.renderAll = function () {
        let $gridBackground = $('#grid-background');
        let gridItemTemplate = Handlebars.compile($('#grid-item-template').text());
        let allImages = [];
        let allImagesRandom = [];
        app.Biz.all.forEach(bzns => {
            for(let i = 0; i < bzns.imgUrls.length; i++) {
                allImages.push({
                    imgUrl: bzns.imgUrls[i],
                    yelpUrl: bzns.yelpUrl,
                    distance:((bzns.distance)*0.00062137).toFixed(2) + " mi",
                    
                })
            }
        });

        function grabRandom (arr) {   // takes all available images and scrambles them
            let index = Math.floor(Math.random() * arr.length);
            allImagesRandom.push(arr.splice(index, 1)[0]);

            if (arr.length > 0) grabRandom(arr);
        }  
        console.table(allImages);
        grabRandom(allImages);
        console.table(allImagesRandom);

        $gridBackground.empty();
        let j = 0;
        for(let i = 0; i < Math.floor(allImagesRandom.length/3); i++) {
            let $gridRow = $(`<div id="grid-row${i}" class='grid-row'></div>`);
            let jCap = j + app.userSettings.gridNumColumns;
            console.log(jCap);
            console.log($gridRow)
            for(j; j < jCap; j++) {
                $gridRow.append(gridItemTemplate(allImagesRandom[j]));
                console.log(allImagesRandom[j])
            }
            $gridBackground.append($gridRow);
        }

    }

    module.gridView = gridView;

})(app); 
