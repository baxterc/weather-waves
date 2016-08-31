import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dot-result', {path: '/dot-result/:cityName'});
  this.route('city', {path: '/city/:name'});
  this.route('wind-plot');
  this.route('city-comparison');
  this.route('scatter-map');
  this.route('moving-dot');
});

export default Router;
