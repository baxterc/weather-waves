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

          svgContainer.selectAll("text")
          .data(tempArray)
          .enter()
          .append("text")
          .text(function(d) {
            return d;
          })
          .attr("x", function(d, i) {
            return i * (w / dataset.length) + 5;  // +5
          })
          .attr("y", function(d) {
            return h - (d * 4) + 15;              // +15
          })
          .attr("font-family", "sans-serif")
          .attr("font-size", "11px")
          .attr("fill", "white");

        });
      });
    }
  }
});
