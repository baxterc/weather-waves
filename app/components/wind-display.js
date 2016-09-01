import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  didInsertElement() {
    var container = this.$('.map-display')[0];
    var options = {
      center: this.get('map').center(this.get('weather.coord.lat'), this.get('weather.coord.lon')),
      scrollwheel: false,
      zoom: 15
    };
    console.log(options);
    var fullMap = this.get('map').findMap(container, options);
  },

  actions: {

    generateWeather() {
        document.getElementById("holder").innerHTML = "";
        var windSpeed = 0;
        var windRad = 0;
        if (this.get('weather.wind.speed')) {
          windSpeed = this.get('weather.wind.speed');
        };
        if (this.get('weather.wind.deg')) {
          windRad = (90-this.get('weather.wind.deg')) * (Math.PI/180);
        };
        let svgContainer = d3.select('#holder').append('svg').attr('width',window.innerWidth).attr('height',(window.innerHeight - 300));
        var w = 1;
        var c = 1;

        while (w++ < 200) {
          var startX = (Math.random()-Math.random())*window.innerWidth;
          var startY = (Math.random()-Math.random())*window.innerHeight;
          var radius = Math.random()*4;
          var fullRgb = 'rgb(' + String(Math.floor(Math.random()*255)) + ', ' + String(Math.floor(Math.random()*255)) + ', ' + String(Math.floor(Math.random()*255)) + ')';
          svgContainer.append('rect')
          .attr('x',startX)
          .attr('y',startY)
          .attr('width', radius)
          .attr('height', radius)
          .style('fill',fullRgb)
          .transition()
          .attr('x', startX - (((windSpeed * 60) * Math.cos(windRad))/(radius/120)) )
          .attr('y', startY + (((windSpeed * 60) * Math.sin(windRad))/(radius/120)) )
          .duration(3000);
        };

        while (c++ < this.get('weather.clouds.all')) {
          var startX = Math.random()*window.innerWidth;
          var startY = Math.random()*window.innerHeight;
          var radius = (2*this.get('weather.clouds.all')) + (Math.random()*(window.innerWidth/30));
          svgContainer.append('rect')
          .attr('x',startX)
          .attr('y',startY)
          .attr('width', radius)
          .attr('height', radius)
          .style('fill', 'white')
          .style('opacity', '0.8')
          .transition()
          .attr('x', startX - (((windSpeed * 60) * Math.cos(windRad))/(radius/120)) )
          .attr('y', startY + (((windSpeed * 60) * Math.sin(windRad))/(radius/120)) )
          .duration(3000);
        }
    },
    weatherNow: function() {
      console.log(this.get('weather'));
    },
    citySearch: function() {
      var params = {
        name: this.get('city')
      };
      document.getElementById("holder").innerHTML = "";
      this.sendAction('citySearch', params)
    }

  }
});
