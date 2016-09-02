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

          var w = 900;
          var h = 500;
          var barPadding = 1;
          var padding = 30;


          var xScale = d3.scale.linear()
          .domain([d3.min(tempArray, function(d) {
            return d[0];
          }), d3.max(tempArray, function(d) {
            return d[0];
            })
          ])
          .range([padding, w - padding * 2]);

          var yScale = d3.scale.linear()
          .domain([0, d3.max(tempArray, function(d) {
            return d[1];
            })
          ])
          .range([h - padding, padding]);

          var rScale = d3.scale.linear()
            .domain([0, 100])
            .range([2, 10]);

          var tempScale = d3.scale.linear()
            .domain([d3.min(tempArray, function(d) {
              return d[2];
            }), d3.max(tempArray, function(d) {
              return d[2];
              })
            ])
            .range([0, 255]);


          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(0);

          var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);

          let svgContainer = d3.select('#holder').append('svg')
          .attr("width", w)
          .attr("height", h)
          .attr("class", "city-plot")
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

          svgContainer.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - padding) + ")")
            .call(xAxis);

          svgContainer.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);

            svgContainer.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate("+ (padding/2) +","+ (h/2) +")rotate(-90)")
            .text("Humidity");

          svgContainer.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate("+ (w/2) +", " + (h - (padding/3))  +  ")")
            .text("Time");

        });
      });
    }
  }
});
