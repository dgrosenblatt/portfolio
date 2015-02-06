import Ember from 'ember';

export default Ember.Controller.extend({
  price: function(params) {
    var stock = {"ticker": "AAPL"};
    var response = ic.ajax({
      url: 'http://finance.yahoo.com/webservice/v1/symbols/' + stock.ticker + '/quote?format=json',
      type: 'get'
    });
    return response.list.resources[0].resource.fields.price;
  }
});
