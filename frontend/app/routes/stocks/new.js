import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('stock');
  },
  actions: {
    willTransition: function(transition) {
      var newModel = this.get('controller.model');
      if (newModel.get('isNew')) {
        newModel.destroyRecord();
      }
    }
  }
});
