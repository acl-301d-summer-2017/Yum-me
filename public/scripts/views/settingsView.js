var app = app || {};

(function (module) {
    let settingsView = {};

    settingsView.display = function () {
        let $altView = $('#altView');
        $altView.attr('href', '/home');
        $altView.text('Home');

        $('#settings').show().siblings().hide();
    }

    settingsView.presets = function() {
        /* preset distances */
        $('select.distance').children(`[value="${app.userSettings.distance}"]`).attr('selected', 'selected');
        
        /* preset prices */
        app.userSettings.price.split(', ').forEach(price => $(`input.prices[value="${price}"`).attr('checked', 'checked'));

        /* preset delivery and isOpenNow */
        if(app.userSettings.wantDelivery) $('#delivery').attr(`checked`, 'checked');
        if(app.userSettings.wantOpen) $('#isOpen').attr(`checked`, 'checked');

        /* preset search terms */
        if(app.userSettings.searchTerms) $('#terms').val(app.userSettings.searchTerms).removeAttr('placeholder');

        /* preset search count */
        $('select.search-count').children(`[value="${app.userSettings.maxNumBiz}"]`).attr('selected', 'selected');
    }

    module.settingsView = settingsView;
})(app); 
