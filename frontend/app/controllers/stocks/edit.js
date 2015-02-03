import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.ticker',
    'model.quantity',
    function() {
      return !Ember.isEmpty(this.get('model.ticker')) &&
        !Ember.isEmpty(this.get('model.quantity'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(stock) {
          _this.transitionToRoute('stocks.show', stock);
        });
      } else {
        this.set('errorMessage', "Ticker Symbol and Quantity can't be blank");
      }
      return false;
    },
    cancel: function() {
      this.transitionToRoute('stocks');
      return false;
    }
  }
});
