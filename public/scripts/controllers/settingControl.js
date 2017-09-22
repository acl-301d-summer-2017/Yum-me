var app = app || {};

(function (module) {
  
    let settingsControl = {};
    let $searchAgainMessage = $('#search-again-message');
  
    settingsControl.display = function () {
        app.settingsView.display();
        $searchAgainMessage.hide();

        clearInterval(app.homeView.interval);
        $('#userInput').off();
        $('#userInput').submit(settingsControl.newSettingsHandler);
        
        
    }
    
    settingsControl.newSettingsHandler = function(event) {
        event.preventDefault();

        settingsControl.getInput();
        app.userSettings.pushSettings();

        setTimeout(() => $searchAgainMessage.fadeIn(5000), 10000);
        app.homeControl.refreshSearch();
        
        
    };

    settingsControl.getInput = function() {
        /* GET DISTANCE */
        app.userSettings.distance = parseFloat($('select.distance option:selected').val());

        /* GET DELIVERY */
        var deliValue = $('input.deli[type=checkbox]:checked').map(function(){return this.value;}).get();
        app.userSettings.wantDelivery = deliValue == 'true' ? JSON.parse(deliValue) : JSON.parse('false');

        /* GET WANT-OPEN */
        var openValue = $('input.isO[type=checkbox]:checked').map(function(){return this.value;}).get();
        app.userSettings.wantOpen = openValue == 'true' ? JSON.parse(openValue) : JSON.parse('false'); 

        /* GET PRICE RANGE */
        app.userSettings.price = $('input.prices[type=checkbox]:checked').map(function(){return this.value;}).get().join(', ');

        /* GET SEARCH TERMS */
        app.userSettings.searchTerms = $('input#terms').val().split(' ').filter(word => /^\w{1,15}$/.test(word)).join(', ');
        console.log(app.userSettings.searchTerms);
        
        /* GET SEARCH COUNT */
        app.userSettings.maxNumBiz = parseFloat($('select.search-count option:selected').val());

    }

  
    module.settingsControl = settingsControl;

})(app); 
