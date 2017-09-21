var app = app || {};

(function (module) {
  
    let settingsControl = {};
  
    settingsControl.display = function () {
        app.settingsView.display();

        clearInterval(app.homeView.interval);
      
        $('#userInput').submit(function(event){
            event.preventDefault();

            var disValue = $('select.distance option:selected').val();
            console.log(disValue);
            app.userSettings.distance = parseFloat(disValue);

            var deliValue = $('input.deli[type=checkbox]:checked').map(function(){return this.value;}).get();

            var deliBool = function(){
                if (deliValue == "true"){
                    return JSON.parse(deliValue);
                } else {
                    return JSON.parse("false");
                }
            };
            app.userSettings.wantDelivery = deliBool();
            console.log(app.userSettings.wantDelivery);

            var openValue = $('input.isO[type=checkbox]:checked').map(function(){return this.value;}).get();
            var openBool = function(){
                if (openValue == "true"){
                    return JSON.parse(openValue);
                } else {
                    return JSON.parse("false");
                }
            };
            app.userSettings.wantOpen = openBool(); 
            console.log(app.userSettings.wantOpen);  

            app.userSettings.price = $('input.prices[type=checkbox]:checked').map(function(){return this.value;}).get().join(', ');
            
            app.userSettings.pushSettings();
            page('/');
            app.homeView.init();
            
            ///NEED TO REDIRECT BACK TO HOME PAGE
            
        })

    }
  

  
    module.settingsControl = settingsControl;

})(app); 
