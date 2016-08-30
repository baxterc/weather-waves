import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  currentWeather: Ember.inject.service('current-weather'),
  actions: {
    generateScatter() {
      var tempMax = Math.floor(this.get('model.main.temp_max'));
      var tempMin = Math.floor(this.get('model.main.temp_min'));
      var tempGreen = Math.floor(this.get('model.main.temp_max') - this.get('model.main.temp_min'));
      var humidity = Math.floor(this.get('model.main.humidity'));
      var redIncrement = Math.floor(tempMax / 144);
      var blueIncrement = Math.floor(tempMin / 144);
      var red = 0;
      var blue = tempMin - 100;
      var radius = 50;
      for (var i = 0; i < 150; i++ ) {
        var hum = 'translate(' + humidity + ', ' + humidity + ')';
        var randColor =  "rgb(" + red + "," + tempGreen + "," + blue + ")";
        d3.select("body").append("svg").attr('width', 100).attr('height', 100).append('circle').attr("cx", 50).attr("cy", 50).attr("r", radius).style("fill", randColor)
        .transition()
        .attr('transform', hum )
        // .attr('cy', humidity )
        .attr('r', humidity)
        .duration(8000)
        blue -= Math.floor(blueIncrement);
        red += Math.floor(redIncrement / 2);
        radius = (red + blue) / 4;
      }
    },

    weatherNow: function() {
      var current = this.get('currentWeather')
      console.log(current)
    }
  },
  didInsertElement() {
    var windDeg = this.get('model.wind.deg');
    let svgContainer = d3.select('#holder').append('svg').attr('width',600).attr('height',300);
    svgContainer.append('circle')
    .attr('cx',125)
    .attr('cy',100)
    .attr('r', 80)
    .style("stroke", "orange")
    .style('fill','blue')
    .transition()
    .attr('cx', 250 * (Math.cos(windDeg)) )
    .attr('cy', 250 * (Math.sin(windDeg-180)) )
    .duration(2000)
    .style('fill','red');

    // var circle = d3.selectAll("circle");
    // circle.style("fill", "steelblue");
    // circle.attr("r", 30);
    // circle.data([32, 57, 112]);
    // circle.attr("r", function(d){return Math.sqrt(d);});
    // circle.attr("cx", function(d, i) { return i * 100 + 30; });
    // var svg = d3.select('svg');
    //
    // var circle = svg.selectAll("circle").data([32, 57, 112, 293]);
    // var circleEnter = circle.enter().append("circle");
    // circleEnter.attr("cy", 60);
    // circleEnter.attr("cx", function(d, i) { return i * 100 + 30; });
    // circleEnter.attr("r", function(d) { return Math.sqrt(d); });
    // circleEnter.style('fill', 'steelblue');

    // This accomplishes entering data if there's none to begin with on the page
    // svg.selectAll("circle")
    // .data([32, 57, 112, 293])
    // .enter().append("circle")
    // .attr("cy", 60)
    // .attr("cx", function(d, i) { return i * 100 + 30; })
    // .attr("r", function(d) { return Math.sqrt(d); });
    //
  },

});
