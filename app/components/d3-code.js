import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  currentWeather: Ember.inject.service(),

<<<<<<< HEAD
  actions: {
    generateScatter() {
      var color = function() {
        var randomHue = Math.floor(Math.random() * 255);
        return randomHue;
      }
      var randColor =  "rgb(" + color() + "," + color() + "," + color() + ")"

      var dataSet = [];
      var randomScatter = Math.floor(Math.random() * 50)
      for (var i = 0; i < randomScatter; i++) {
        var randomInt = Math.floor(Math.random() * 250);
        dataSet.push(randomInt);
        console.log(randomInt);
      };
      console.log(model.name)
      for (i = 0; i < 200; i++ ) {
        d3.select("body").append("svg").attr('width', 100).attr('height', 100).append('circle').attr("cx", randomScatter).attr("cy", randomScatter).attr("r", randomScatter).style("fill", randColor);
        randomScatter = Math.floor(Math.random() * 50)
      }
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

  },
  actions: {
    weatherNow: function() {
      console.log(this.currentWeather.getWeather());
    }
  }
});
