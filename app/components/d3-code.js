import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  currentWeather: Ember.inject.service(),

  actions: {
    generateScatter() {
      var tempMax = this.get('model.main.temp_max')
      var tempMin = this.get('model.main.temp_min')
      var tempBlue = Math.floor((255 / tempMin) * 255);
      var tempRed = Math.floor((255 / tempMax) * 255);
      var tempGreen = Math.floor(this.get('model.main.temp_max') - this.get('model.main.temp_min'));

      console.log(tempBlue + 'blue');
      console.log(tempRed + 'red');
      console.log(tempGreen + 'green');
      var color = function() {
        var randomHue = Math.floor(Math.random() * 255);
        return randomHue;
      };
      var dataSet = [];

      for (var i = 0; i < 144; i++ ) {
        var randomScatter = Math.floor(Math.random() * (tempMax / tempMin)) * 50;
        var red = Math.abs(255 - tempRed + (144 / i));
        console.log(red);
        var blue =  Math.abs(tempBlue - (144 / i)) ;
        console.log(blue);
        var randColor =  "rgb(" + red + "," + tempGreen + "," + blue + ")";
        d3.select("body").append("svg").attr('width', 100).attr('height', 100).append('circle').attr("cx", randomScatter).attr("cy", randomScatter).attr("r", randomScatter).style("fill", randColor);
        randomScatter = Math.floor(Math.random() * tempGreen * 5);
      }
    },
    weatherNow: function() {
      console.log(this.currentWeather.getWeather());
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
<<<<<<< HEAD
=======
  actions: {
    getWeather() {
      console.log(model);
    }
  }
>>>>>>> 4f4fa41af01e2290984848975215b98d2926c13d
});
