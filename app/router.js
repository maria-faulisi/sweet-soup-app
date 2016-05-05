import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('soups', function() {
    this.route('soup', {path: '/:slug'});
  });

});

export default Router;
