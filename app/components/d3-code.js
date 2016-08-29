import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({




  didInsertElement() {
    let svgContainer = d3.select('#holder').append('svg').attr('width',600).attr('height',600);
    svgContainer.append('circle')
    .attr('cx',125)
    .attr('cy',100)
    .attr('r', 80)
    .style("stroke", "orange")
    .style('fill','blue')
    .transition()
    .attr('cx',500)
    .attr('cy',450)
    .duration(2000)
    .style('fill','red');
  }
});

var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

var ramdomInt = Math.random(Math.floor() * 500);
var randomData =
