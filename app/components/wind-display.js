import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({

  actions: {
    generateWind() {
      if (!this.get('weather.wind.speed')) {
        return
      } else {
        document.getElementById("holder").innerHTML = "";
        var windRad = (90-this.get('weather.wind.deg')) * (Math.PI/180) ;
        var windSpeed = this.get('weather.wind.speed');
        let svgContainer = d3.select('#holder').append('svg').attr('width',window.innerWidth).attr('height',(window.innerHeight - 300));
        var i = 1;

        while (i++ < 500) {
          var startX = (Math.random()-Math.random())*window.innerWidth;
          var startY = (Math.random())*window.innerHeight;
          var radius = Math.random()*10;
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
          .duration(3000/(windSpeed/2));
        }
      }
    },
    weatherNow: function() {
      console.log(this.get('weather'));
    },
    citySearch: function() {
      var params = {
        name: this.get('city')
      };
      this.sendAction('citySearch', params)
      this.refresh();
    }

  }
});
