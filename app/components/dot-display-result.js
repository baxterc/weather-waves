import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({

  didInsertElement() {
    var model = this.get('model');
    var cloudsArray = [];
    var humidityArray = [];
    var windArray = [];
    var highTempArray = [];
    var lowTempArray = [];
    var rainArray = [];
    for (var i = 0; i < model.list.length; i++) {
      cloudsArray.push(model.list[i].clouds);
      windArray.push(model.list[i].speed);
      highTempArray.push(model.list[i].temp.max);
      lowTempArray.push(model.list[i].temp.min);
      if (model.list[i].rain) {
        rainArray.push(model.list[i].rain);
      } else {
        rainArray.push(0);
      }
    }

    var padding = 90;

    let dotsContainer =
    d3.select('#holder2').append('svg').attr('width', 500).attr('height', 200);

    dotsContainer.append('circle')
    .attr('cy', 80)
    .attr('cx', 120)
    .attr('r', 10);

    dotsContainer.append('circle')
    .attr('cy', 80)
    .attr('cx', 180)
    .attr('r', 30);

    dotsContainer.append('circle')
    .attr('cy', 80)
    .attr('cx', 300)
    .attr('r', 70);

    let svgContainer = d3.select('#holder').append('svg').attr('width',1000).attr('height',600);

    var xScale = d3.scale.linear()
    .domain([0, d3.max(windArray, function(d) {
      return d;
      })
    ])
    .range([padding, 1000 - padding]);

    var xAxis = d3.svg.axis()
    .scale(xScale);

    var xAxisGroup = svgContainer.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0, " + (600 - padding) + ")")
    .call(xAxis);

    var yAxisScale = d3.scale.linear()
    .domain([0, d3.max(rainArray, function(d) {
      return d;
      })
    ])
    .range([600 - padding, padding]);

    var yAxis = d3.svg.axis()
    .orient("left")
    .scale(yAxisScale);

    var yAxisGroup = svgContainer.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);

    var highTempScale = d3.scale.linear()
      .domain([280, 315])
      .range([0, 255]);

    var lowTempScale = d3.scale.linear()
      .domain([d3.min(lowTempArray, function(d) {
        return d;
      }), d3.max(lowTempArray, function(d) {
        return d;
      })
    ]).range([0, 255]);

    var rScale = d3.scale.linear()
      .domain([0, 100])
      .range([10, 90]);

    svgContainer.append('circle')
    .attr('cy', yAxisScale(rainArray[0]))
    .attr('cx', xScale(windArray[0]))
    .attr('r', rScale(cloudsArray[0]))
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[0])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[0]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[1]))
    .attr('cx', xScale(windArray[1]))
    .attr('r', rScale(cloudsArray[1]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[1])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[1]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[2]))
    .attr('cx', xScale(windArray[2]))
    .attr('r', rScale(cloudsArray[2]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[2])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[2]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[3]))
    .attr('cx', xScale(windArray[3]))
    .attr('r', rScale(cloudsArray[3]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[3])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[3]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[4]))
    .attr('cx', xScale(windArray[4]))
    .attr('r', rScale(cloudsArray[4]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[4])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[4]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[5]))
    .attr('cx', xScale(windArray[5]))
    .attr('r', rScale(cloudsArray[5]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[5])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[5]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[6]))
    .attr('cx', xScale(windArray[6]))
    .attr('r', rScale(cloudsArray[6]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[6])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[6]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[7]))
    .attr('cx', xScale(windArray[7]))
    .attr('r', rScale(cloudsArray[7]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[7])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[7]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[8]))
    .attr('cx', xScale(windArray[8]))
    .attr('r', rScale(cloudsArray[8]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[8])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[8]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[9]))
    .attr('cx', xScale(windArray[9]))
    .attr('r', rScale(cloudsArray[9]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[9])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[9]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[10]))
    .attr('cx', xScale(windArray[10]))
    .attr('r', rScale(cloudsArray[10]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[10])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[10]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[11]))
    .attr('cx', xScale(windArray[11]))
    .attr('r', rScale(cloudsArray[11]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[11])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[11]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[12]))
    .attr('cx', xScale(windArray[12]))
    .attr('r', rScale(cloudsArray[12]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[12])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[12]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[13]))
    .attr('cx', xScale(windArray[13]))
    .attr('r', rScale(cloudsArray[13]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[13])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[13]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[14]))
    .attr('cx', xScale(windArray[14]))
    .attr('r', rScale(cloudsArray[14]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[14])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[14]))) + ')')
    .transition()
    .attr('cy', yAxisScale(rainArray[15]))
    .attr('cx', xScale(windArray[15]))
    .attr('r', rScale(cloudsArray[15]))
    .duration(1000)
    .style('fill','rgb(' + Math.floor(highTempScale(highTempArray[15])) + ', 0, ' + (255 - Math.floor(lowTempScale(lowTempArray[15]))) + ')');

    svgContainer.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "translate(500, " + (600 - (padding/3))  +  ")")
      .text("Wind Speed");

    svgContainer.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "translate("+ (padding/2) +","+ 300 +")rotate(-90)")
      .text("Rainfall in inches");

  },
});
