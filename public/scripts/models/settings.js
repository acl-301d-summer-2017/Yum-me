var app = app || {};


(function (module) {
  var testData = {};  
  const userSettings = {
        wantDelivery: false,
        distance: 2000,
        price: '1, 2, 3',
        wantOpen: false,
        location: [45.523, 122.676],

        fetchSettings: function() {
           if (localStorage) {
                this.wantDelivery = localStorage.getItem('wantDelivery');
                this.distance = localStorage.getItem('distance');
                this.price = localStorage.getItem('price');
                this.wantOpen = localStorage.getItem('wantOpen');
                this.location = localStorage.getItem('location'); 
            }
            else {
                this.wantDelivery = false,
                this.distance = 2000,
                this.price = '1, 2, 3',
                this.wantOpen = false,
                this.location = [45.523, 122.676]
            }   
         },

         getGeoLoc: function(callback) {
             console.log("searching LOCATION")
             var latLong = {};
             $.ajax({
                 url: '/geolocation/getGeoLoc',
                 type: 'POST',
                 contentType: 'application/json'
             })
             .then(resp => {
                testData = resp.location
                console.log(testData)
                // console.log(latLong)
                })
             
            
             err => console.error(err);
             
         },

         parseLatLong: function(testData) {
            console.log(testData);

         }
      }

module.userSettings = userSettings;



})(app); 

app.userSettings.getGeoLoc();