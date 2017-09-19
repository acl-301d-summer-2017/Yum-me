var app = app || {};

(function (module) {
    Biz.all = []    
    function Biz( bizData ) {
      this.name = bizData.name;
      this.id = bizData.id;
      this.latLong = [bizData.coordinates.latitude, bizData.coordinates.longitude];
      this.price = bizData.price.length;
      this.delivery = bizData.transactions.includes('delivery');
      this.yelpUrl = bizData.url;
      this.imgUrls = [];
      bizData.photos.forEach(photo => this.imgUrls.push(photo));
      this.isOpen = !(bizData.is_closed);

      Biz.all.push(this);
    }

    Biz.search = function(callback) {
      console.log('searching')
      $.ajax({
        url: '/yelp/search',
        type: 'GET',
        contentType: 'application/json',
        data: {
          term: 'delivery',
          categories: 'Restaurants',
          location: 'Portland',
          radius: app.userSettings.distance,
          limit: 20,
          price: app.userSettings.price,
          open_now: app.userSettings.wantOpen,
        }
      })
        .then(data => console.log(data),
           err => console.error(err));
    }


    module.Biz = Biz;
})(app);
app.Biz.search();