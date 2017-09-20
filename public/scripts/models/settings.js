var app = app || {};

(function (module) {
  const userSettings = {
        wantDelivery: false,
        distance: 2000,
        price: '1, 2, 3',
        wantOpen: false,
        location: [45.523, 122.676],
        maxNumBiz: 1,

        fetchSettings: function() {
           if (localStorage.settings) {
               console.log("are you here in the if")
               let localStorageSettings = JSON.parse(localStorage.getItem('settings'));

                this.wantDelivery = localStorageSettings.wantDelivery;
                this.distance = localStorageSettings.distance;
                this.price = localStorageSettings.price;
                this.wantOpen = localStorageSettings.wantOpen;
                this.location = localStorageSettings.location; 
            }
            else {
                console.log("are you hitting this");
                var defaults = {
                    wantDelivery: userSettings.wantDelivery,
                    distance: userSettings.distance ,
                    price: userSettings.price,
                    wantOpen: userSettings.wantOpen,
                    location: userSettings.location
                }
                localStorage.setItem('settings', JSON.stringify(defaults))
                console.log("are you hitting this");
                
            }   
         },

         getGeoLoc: function(callback) {
             console.log("searching LOCATION")
             $.ajax({
                 url: '/geolocation/getGeoLoc',
                 type: 'POST',
                 contentType: 'application/json'
             })
             .then(resp => console.log(resp),
             err => console.error(err));
             
         }
      }

module.userSettings = userSettings;



})(app); 

app.userSettings.getGeoLoc();
app.userSettings.fetchSettings();