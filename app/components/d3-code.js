import Ember from 'ember';
import d3 from 'd3';


export default Ember.Component.extend({

  didInsertElement() {
    let svgContainer = d3.select('#holder').append('svg').attr('width',700).attr('height',700);

    svgContainer.append('circle')
    .attr('cx',250)
    .attr('cy',250)
    .attr('r', 100)
    .style('fill','blue')
    .transition()
    .attr('cx',500)
    .attr('cy',450)
    .duration(2000)
    .style('fill','red');

  },
  actions: {
    getWeather() {
      console.log(model);
    },
  }
});
