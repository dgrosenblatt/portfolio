import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


// responsibility of a route handler is to load data from some other service so you can display it in a template.
Router.map(function() {
  this.route('hello');
  this.resource('stocks', function() {
    this.route('show', {path: ':stock_id'});
    this.route('edit', {path: ':stock_id/edit'});
    this.route('new');
  });
});

export default Router;
