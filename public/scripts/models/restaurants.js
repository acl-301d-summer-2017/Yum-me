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

    module.Biz = Biz;
})(app); 