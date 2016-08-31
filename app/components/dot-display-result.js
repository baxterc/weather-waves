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
    console.log(model);
    for (var i = 0; i < model.list.length; i++) {
      cloudsArray.push((model.list[i].clouds * 3) + 10);
      humidityArray.push(model.list[i].humidity * 6 + 100);
      windArray.push(model.list[i].speed * 200);
      highTempArray.push((model.list[i].temp.max - 55));
      lowTempArray.push((model.list[i].temp.min - 180));
    }

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

    let svgContainer = d3.select('#holder').append('svg').attr('width',2000).attr('height',1000);

    var axisScale = d3.scale.linear()
    .domain([0,6])
    .range([5,1980]);

    var xAxis = d3.svg.axis()
    .scale(axisScale);

    var xAxisGroup = svgContainer.append("g")
    .call(xAxis);



    var yAxisScale = d3.scale.linear()
    .domain([0,100])
    .range([0, 1500]);

    var yAxis = d3.svg.axis()
    .orient("left")
    .scale(yAxisScale);

    var yAxisGroup = svgContainer.append("g")
    .attr("transform", "translate(100,0)")
    .call(yAxis);


    svgContainer.append('circle')
    .attr('cy', humidityArray[0])
    .attr('cx', windArray[0])
    .attr('r', cloudsArray[0])
    .style('fill','rgb(' + highTempArray[0] + ', 0, ' + (256 - lowTempArray[0]) + ')')
    .transition()
    .attr('cy', humidityArray[1])
    .attr('cx', windArray[1])
    .attr('r', cloudsArray[1])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[1] + ', 0, ' + (256 - lowTempArray[1]) + ')')
    .transition()
    .attr('cy', humidityArray[2])
    .attr('cx', windArray[2])
    .attr('r', cloudsArray[2])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[2] + ', 0, ' + (256 - lowTempArray[2]) + ')')
    .transition()
    .attr('cy', humidityArray[3])
    .attr('cx', windArray[3])
    .attr('r', cloudsArray[3])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[3] + ', 0, ' + (256 - lowTempArray[3]) + ')')
    .transition()
    .attr('cy', humidityArray[4])
    .attr('cx', windArray[4])
    .attr('r', cloudsArray[4])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[4] + ', 0, ' + (256 - lowTempArray[4]) + ')')
    .transition()
    .attr('cy', humidityArray[5])
    .attr('cx', windArray[5])
    .attr('r', cloudsArray[5])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[5] + ', 0, ' + (256 - lowTempArray[5]) + ')')
    .transition()
    .attr('cy', humidityArray[6])
    .attr('cx', windArray[6])
    .attr('r', cloudsArray[6])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[6] + ', 0, ' + (256 - lowTempArray[6]) + ')')
    .transition()
    .attr('cy', humidityArray[7])
    .attr('cx', windArray[7])
    .attr('r', cloudsArray[7])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[7] + ', 0, ' + (256 - lowTempArray[7]) + ')')
    .transition()
    .attr('cy', humidityArray[8])
    .attr('cx', windArray[8])
    .attr('r', cloudsArray[8])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[8] + ', 0, ' + (256 - lowTempArray[8]) + ')')
    .transition()
    .attr('cy', humidityArray[9])
    .attr('cx', windArray[9])
    .attr('r', cloudsArray[9])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[9] + ', 0, ' + (256 - lowTempArray[9]) + ')')
    .transition()
    .attr('cy', humidityArray[10])
    .attr('cx', windArray[10])
    .attr('r', cloudsArray[10])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[10] + ', 0, ' + (256 - lowTempArray[10]) + ')')
    .transition()
    .attr('cy', humidityArray[11])
    .attr('cx', windArray[11])
    .attr('r', cloudsArray[11])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[11] + ', 0, ' + (256 - lowTempArray[11]) + ')')
    .transition()
    .attr('cy', humidityArray[12])
    .attr('cx', windArray[12])
    .attr('r', cloudsArray[12])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[12] + ', 0, ' + (256 - lowTempArray[12]) + ')')
    .transition()
    .attr('cy', humidityArray[13])
    .attr('cx', windArray[13])
    .attr('r', cloudsArray[13])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[13] + ', 0, ' + (256 - lowTempArray[13]) + ')')
    .transition()
    .attr('cy', humidityArray[14])
    .attr('cx', windArray[14])
    .attr('r', cloudsArray[14])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[14] + ', 0, ' + (256 - lowTempArray[14]) + ')')
    .transition()
    .attr('cy', humidityArray[15])
    .attr('cx', windArray[15])
    .attr('r', cloudsArray[15])
    .duration(1000)
    .style('fill','rgb(' + highTempArray[15] + ', 0, ' + (256 - lowTempArray[15]) + ')');

  },
});
