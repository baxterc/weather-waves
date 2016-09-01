import config from '../config/environment';
import Ember from 'ember';
import d3 from 'd3';

export default Ember.Route.extend({
  actions: {
    showHist() {
      var cities = ["Birmingham", "Anchorage", "Phoenix", "LittleRock", "LosAngeles", "Denver", "Bridgeport", "Wilmington", "Jacksonville", "Atlanta", "Honolulu", "Boise", "Chicago", "Indianapolis", "DesMoines", "Wichita", "Louisville", "NewOrleans", "Portland", "Baltimore", "Boston", "Detroit", "Minneapolis", "Jackson", "KansasCity", "Billings", "Omaha", "LasVegas", "Manchester", "Newark", "Albuquerque", "NewYorkCity", "Charlotte", "Fargo", "Columbus", "OklahomaCity", "Philadelphia", "Providence", "Columbia", "SiouxFalls", "Memphis", "Houston", "SaltLakeCity", "Burlington", "VirginiaBeach", "Seattle", "Charleston", "Milwakuee", "Cheyenne"];

      var tempArray = [];
      var done = cities.length;



      cities.forEach(function(city){
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=89f17c12732050af0fecc7fed7d43c39";
        return Ember.$.getJSON(url).then(function(responseJSON) {
          var fahr = responseJSON.main.temp * (9/5) - 459.67;
          tempArray.push(Math.floor(fahr));
          done -= 1;
          if (done === 0) {
            return tempArray;
          }
        }).then(function(){
          // console.log(tempArray);

          // var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

          var w = 1000;
          var h = 500;
          var barPadding = 1;

          let svgContainer = d3.select('#holder').append('svg')
          .attr("width", w)
          .attr("height", h)
          .style('background', '#dff0d8')
          .selectAll('rect')
          .data(tempArray)
          .enter()
          .append("rect")
          .attr("x", function(d, i){
            return i * (w/tempArray.length);
          })
          .attr("y", function(d) {
            return h - (d * 3);
          })
          .attr("width", w /tempArray.length - barPadding)
          .attr("height", function(d){
            return d * 4;
          })
          .attr("fill", function(d) {
            return "rgb(0, 0, " + (d * 2) + ")";
          });
        });
      });




      // d3.select("#holder").selectAll("div")
      // .data(tempArray)
      // .enter()
      // .append("div")
      // .attr("class", "bar")
      // .style("height", function(d) {
      //   var barHeight = d;
      //   return barHeight + "px";
      // });


      // let svgContainer = d3.select('#holder').append('svg')
      // .attr('width',1000)
      // .attr('height',750)
      // .style('background', '#dff0d8')
      // .selectAll('rect').data(tempArray)
      // .enter().append('rect')
      // .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
      // .attr('width', barWidth)
      // .attr('height', function (data) {
      //   return data;
      // })
      // .attr('x', function (data, i) {
      //   return i * (barWidth + barOffset);
      // })
      // .attr('y', function (data) {
      //   return height - data;
      // });

      // var axisScale = d3.scale.linear()
      // .domain([0,6])
      // .range([5,1980]);
      //
      // var xAxis = d3.svg.axis()
      // .scale(axisScale);
      //
      // var xAxisGroup = svgContainer.append("g")
      // .call(xAxis);
      //
      //
      //
      // var yAxisScale = d3.scale.linear()
      // .domain([0,100])
      // .range([0, 1500]);
      //
      // var yAxis = d3.svg.axis()
      // .orient("left")
      // .scale(yAxisScale);
      //
      // var yAxisGroup = svgContainer.append("g")
      // .attr("transform", "translate(100,0)")
      // .call(yAxis);
    }
  }
});
