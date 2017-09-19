var app = app || {};

(function (module) {
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
                this.flocation = [45.523, 122.676]
            }   
         },
      }

module.userSettings = userSettings;



})(app); 