import Ember from 'ember';
import d3 from 'd3';


export default Ember.Component.extend({

  didInsertElement() {

    var windRad = (90-this.get('model.wind.deg')) * (Math.PI/180) ;
    let svgContainer1 = d3.select('#holder').append('svg').attr('width',700).attr('height',700);

    svgContainer1.append('circle')
    .attr('cx',250)
    .attr('cy',250)
    .attr('r', 100)
    .style('fill','blue')
    .transition()
    .attr('cx', 250 - (250 * Math.cos(windRad)) )
    .attr('cy', 250 + (250 * Math.sin(windRad)) )
    .duration(2000)
    .style('fill','red');

  },
  actions: {
    weatherNow: function() {
      console.log(this.get('model'));
    },
    citySearch: function() {
      var params = {
        name = this.get('city')
      }
      this.sendAction('citySearch', params);
    }
  }
});
