import DS from 'ember-data';

export default DS.Model.extend({
  ticker: DS.attr('string'),
  quantity: DS.attr('number')
});
