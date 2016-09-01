import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({
  didInsertElement() {

    var model = this.get('model');
    console.log(model);

    var dataset = [];
    for (var i = 0; i < model.list.length; i++) {
      var tempArray = [ model.list[i].dt, model.list[i].main.humidity, model.list[i].main.temp, model.list[i].clouds.all ];
      dataset.push(tempArray);
    }

    var w = 1000;
    var h = 500;
    var barPadding = 1;
    var padding = 30;

    var xScale = d3.scale.linear()
    .domain([d3.min(dataset, function(d) {
      return d[0];
    }), d3.max(dataset, function(d) {
      return d[0];
      })
    ])
    .range([padding, w - padding * 2]);

    var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
      return d[1];
      })
    ])
    .range([h - padding, padding]);

    var rScale = d3.scale.linear()
      .domain([0, 100])
      .range([2, 10]);

    var tempScale = d3.scale.linear()
      .domain([d3.min(dataset, function(d) {
        return d[2];
      }), d3.max(dataset, function(d) {
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

    var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

    svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr({
      cx: function(d, i) { return xScale(d[0]); },
      cy: function(d) { return yScale(d[1]); },
      width: w / dataset.length - barPadding,
      fill: function(d) {
        return "rgb(" + Math.floor(tempScale((d[2]))) + ", 0, " +(255 - Math.floor(tempScale((d[2])))) + ")";
      },
      r: function(d) { return rScale(d[1]); }
    });

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);
 }
});
