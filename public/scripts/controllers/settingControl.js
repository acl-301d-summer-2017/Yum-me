var app = app || {};

(function (module) {
  
    let settingsControl = {};
  
    settingsControl.display = function () {
        app.settingsView.display();
        $('#userInput').submit(function(event){
            event.preventDefault();

            var disValue = $('#distance').val();
            var datValue = parseFloat(disValue);
            var deliValue = $('input.deli[type=checkbox]:checked').map(function(){return this.value;}).get();
            var deliBool = JSON.parse(deliValue);
            var openValue = $('input.isO[type=checkbox]:checked').map(function(){return this.value;}).get();
            var openBool = JSON.parse(openValue);
            var priceVal=$('input.prices[type=checkbox]:checked').map(function(){return this.value;}).get().join();
            
            // console.log(datValue, typeof(datValue));
            var settings = {
                wantDelivery: deliBool,
                distance: datValue,
                price: priceVal,
                wantOpen: openBool,
                location: app.userSettings.location,
            };
            localStorage.setItem('settings', JSON.stringify(settings));
            //  console.log(app.userSettings.wantDelivery +'1');
            // app.userSettings.wantDelivery = $('#delivery:input');
            //  console.log(app.userSettings.wantDelivery);
            app.homeControl.init();
            // app.homeView.display();
        })
    }
  

  
    module.settingsControl = settingsControl;

})(app); 
