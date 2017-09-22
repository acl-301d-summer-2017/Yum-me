var app = app || {};

(function (module) {
  const userSettings = {

        wantDelivery: false,
        distance: 8050,
        price: '1, 2, 3, 4',
        wantOpen: false,
        
        slideshowInterval: 10000,
        searchTerms: '',

        maxNumBiz: 10,
        gridNumColumns: 3,
        location: [45.523, 122.676],
        searchOffset: 0,

        fetchSettings: function() {
           if (localStorage.settings) {
               let localStorageSettings = JSON.parse(localStorage.getItem('settings'));

                this.wantDelivery = localStorageSettings.wantDelivery;
                this.distance = localStorageSettings.distance;
                this.price = localStorageSettings.price;
                this.wantOpen = localStorageSettings.wantOpen;
                this.location = localStorageSettings;
                this.slideshowInterval = localStorageSettings.slideshowInterval;
                this.maxNumBiz = localStorageSettings.maxNumBiz;
                this.searchOffset = localStorageSettings.searchOffset;
                this.gridNumColumns = localStorageSettings.gridNumColumns;
                this.searchTerms = localStorageSettings.searchTerms;
            }
            else {
                userSettings.pushSettings();
            }   
        },
        
        pushSettings: function() {
            var defaults = {
                wantDelivery: userSettings.wantDelivery,
                distance: userSettings.distance,
                price: userSettings.price,
                wantOpen: userSettings.wantOpen,
                location: userSettings.location,
                slideshowInterval: userSettings.slideshowInterval,
                maxNumBiz: userSettings.maxNumBiz,
                searchOffset: userSettings.searchOffset,
                gridNumColumns: userSettings.gridNumColumns,
                searchTerms: userSettings.searchTerms
            }
            localStorage.setItem('settings', JSON.stringify(defaults))          

        },

        getGeoLoc: function(callback) {
            $.ajax({
                 url: '/geolocation/getGeoLoc',
                 type: 'POST',
                 contentType: 'application/json'
            })
            .then(resp => {    
                userSettings.location = resp.location;
                callback();
            },

            err => console.error(err));
             
             
        }
    }

    module.userSettings = userSettings;



})(app); 

// app