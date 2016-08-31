import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({

  actions: {
    generateWind() {
      document.getElementById("holder").innerHTML = "";
      var windRad = (90-this.get('weather.wind.deg')) * (Math.PI/180) ;
      let svgContainer = d3.select('#holder').append('svg').attr('width',700).attr('height',700);
      var i = 1;

      while (i++ < 25) {
        var startX = Math.random()*700;
        var startY = Math.random()*700;
        var radius = Math.random()*100;
        svgContainer.append('circle')
        .attr('cx',startX)
        .attr('cy',startY)
        .attr('r', radius)
        .style('fill','blue')
        .transition()
        .attr('cx', startX - ((100 * Math.cos(windRad))/(radius/100)) )
        .attr('cy', startY + ((100 * Math.sin(windRad))/(radius/100)) )
        .duration(2000)
        .style('fill','red');
      }

    },
    weatherNow: function() {
      console.log(this.get('weather'));
    },
    citySearch: function() {
      var params = {
        name: this.get('city')
      };
      this.sendAction('citySearch', params);
    }

  }
});
