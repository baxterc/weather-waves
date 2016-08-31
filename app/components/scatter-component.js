import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  actions: {
    generateBar() {
      var highTemps = [];
      var lowTemps = [];
      console.log('PING')
      var model = this.get('model');
      var margin = { top: 20, right: 20, bottom: 20, left: 20 };
      var width = 200 - margin.left - margin.right;
      var height = 600 - margin.top - margin.bottom;
      let svgContainer =
      d3.select('#barHolder').append('svg').attr('width', 200).attr('height', 700);
      for (var i = 0; i < model.list.length; i++ ) {
        highTemps.push(model.list[i].main.temp_max);
        lowTemps.push(model.list[i].main.temp_min);
        console.log('highTemps[i]')
        svgContainer.append('rect')
        .attr('x', 20)
        .attr('y', 20)
        .attr('width', 25)
        .attr('height', highTemps)
        .style('fill', 'rgb(100,200,100)')
      };



    },
    generateScatter() {
      var model = this.get('model');
      var tempMax = Math.floor(model.list[1].main.temp_max);
      var tempMin = Math.floor(model.list[1].main.temp_min);
      var tempGreen = Math.floor(model.list[1].main.temp_max - model.list[1].main.temp_min);
      var humidity = Math.floor(model.list[1].main.humidity);
      var clouds = Math.floor(model.list[1].clouds.all);
      var redIncrement = Math.floor(tempMax / 144);
      var blueIncrement = Math.floor(tempMin / 144);
      var red = 0;
      var blue = tempMin - 100;
      var radius = 50;
      for (var i = 0; i < 150; i++ ) {
        var hum = 'translate(' + humidity + ', ' + humidity + ')';
        var cld = 'translate(' + clouds + ', ' + clouds + ')';
        var randColor =  "rgb(" + red + "," + tempGreen + "," + blue + ")";
        d3.select("body").append("svg").attr('width', 100).attr('height', 100).append('circle').attr("cx", 50).attr("cy", 50).attr("r", radius).style("fill", randColor)
        .transition()
        .attr('transform', hum )
        .attr('cx', humidity)
        .attr('cy', humidity )
        .attr('r', humidity)
        .duration(8000)
        .transition()
        .attr('transform', cld )
        .attr('cx', clouds)
        .attr('cy', clouds )
        .attr('r', clouds)
        .duration(8000)
        .transition()
        .remove()
        .duration(8000)
        blue -= Math.floor(blueIncrement);
        red += Math.floor(redIncrement / 2);
        radius = (red + blue) / 4;
      }
    }
  },
});
