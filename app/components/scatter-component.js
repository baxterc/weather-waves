import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  actions: {
    generateBar() {

      var highTemps = [];
      var lowTemps = [];
      var model = this.get('model');
      for (var i = 0; i < model.list.length; i++ ) {
        highTemps.push(model.list[i].main.temp_max);
        lowTemps.push(model.list[i].main.temp_min);
      }

      for (var j = 0; j < 5; j++) {
        d3.select('#barHolder')
        .append('div')
        .text('Day ' + j + ' ~ ' + highTemps[j] + " Kelvin Avg")
        .attr("class", "top-bar")
        .transition()
        .style('background-color', "#222")
        .style('color', "white")
        .duration(2000)
        .transition()
        .style('background-color', "white")
        .remove()
        .duration(13000);
      };

      d3.select('#barHolder').selectAll('div')
      .data(highTemps)
      .enter()
      .append('div')
      .attr("class", "bar")
      .style('background-color', 'darkred')
      .transition()
      .style("height", function(d) {
          var barHeight = d * 8 - 2100;
          return barHeight + "px";
      })
      .duration(6000)
      .transition()
      .style('background-color', "white")
      .remove()
      .duration(9000);

      d3.select('#barHolder').selectAll('.bar')
      .append('div')
      .style('background-color', "white")
      .style('color', "white")
      .text('3 Hrs')
      .attr("class", "label")
      .transition()
      .style('background-color', "#222")
      .style('color', "white")
      .duration(8000)
      .transition()
      .style('background-color', "white")
      .remove()
      .duration(8000);

    },
    generateScatter() {
      var model = this.get('model');
      var tempMax = Math.floor(model.list[1].main.temp_max);
      var tempMin = Math.floor(model.list[1].main.temp_min);
      var tempGreen = Math.floor(model.list[1].main.temp_max - model.list[1].main.temp_min);
      var humidity = Math.floor(model.list[1].main.humidity);
      var clouds = Math.floor(model.list[1].clouds.all);
      var redIncrement = Math.floor(tempMax / 90);
      var blueIncrement = Math.floor(tempMin / 90);
      var red = 0;
      var blue = tempMin - 100;
      var radius = 50;
      for (var i = 0; i < 90; i++ ) {
        var hum = 'translate(' + humidity + ', ' + humidity + ')';
        var cld = 'translate(' + clouds + ', ' + clouds + ')';
        var randColor =  "rgb(" + red + "," + tempGreen + "," + blue + ")";
        d3.select("body").append("svg").attr('width', 150).attr('height', 150).append('circle').attr("cx", 50).attr("cy", 50).attr("r", radius).style("fill", randColor)
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
        .duration(8000);
        blue -= Math.floor(blueIncrement);
        red += Math.floor(redIncrement / 2);
        radius = (red + blue) / 4;

        d3.select("body").selectAll("svg").transition().remove().duration(10000);
      }
    }
  },
});
