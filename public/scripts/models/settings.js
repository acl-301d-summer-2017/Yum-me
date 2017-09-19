var app = app || {};

(function (module) {
    console.log('whatever');
  const userSettings = {
        wantDelivery: false,
        distance: 2000,
        price: '1, 2, 3',
        wantOpen: false,
        location: [45.523, 122.676],
        fetchSettings: function() {
           if (localStorage) {
                wantDelivery = localStorage.getItem('wantDelivery');
                distance = localStorage.getItem('distance');
                price = localStorage.getItem('price');
                wantOpen = localStorage.getItem('wantOpen');
                location = localStorage.getItem('location'); 
            }
            else {
                wantDelivery = false,
                    distance = 2000,
                    price = '1, 2, 3',
                    wantOpen = false,
                    location = [45.523, 122.676]
            }   
         },
      }

module.userSettings = userSettings;



})(app); 