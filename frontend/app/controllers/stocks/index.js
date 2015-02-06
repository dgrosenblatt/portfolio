import Ember from 'ember';

export default Ember.Controller.extend({
  sortedByShares: function() {
    return this.get('model').sortBy('quantity');
  }.property('model.@each.quantity'),
  
  actions: {
    delete: function(stock) {

      stock.destroyRecord().then(function() {
      }, function() {
        stock.rollback();
      });
    }
  }
});
