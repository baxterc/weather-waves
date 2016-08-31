import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    generateScatter() {
      var model = this.get('model');
      var tempMax = Math.floor(model.list[1].main.temp_max);
      var tempMin = Math.floor(model.list[1].main.temp_min);
      var tempGreen = Math.floor(model.list[1].main.temp_max - model.list[1].main.temp_min);
      var humidity = Math.floor(model.list[1].main.humidity);
      var clouds = Math.floor(model.list[1].clouds.all);
      var redIncrement = Math.floor(tempMax / 144);
      var blueIncrement = Math.floor(tempMin / 144);
      var red = 0;
      var blue = tempMin - 100;
      var radius = 50;
      for (var i = 0; i < 150; i++ ) {
        var hum = 'translate(' + humidity + ', ' + humidity + ')';
        var cld = 'translate(' + clouds + ', ' + clouds + ')';
        var randColor =  "rgb(" + red + "," + tempGreen + "," + blue + ")";
        d3.select("body").append("svg").attr('width', 100).attr('height', 100).append('circle').attr("cx", 50).attr("cy", 50).attr("r", radius).style("fill", randColor)
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
        .duration(8000)
        blue -= Math.floor(blueIncrement);
        red += Math.floor(redIncrement / 2);
        radius = (red + blue) / 4;
      }
    }
  },
  generateBar() {
    var highTemps = [];
    var lowTemps = [];
    var model = this.get('model');
    for (var i = 0; i < model.list.length; i++ ) {
      
    }
  }
});
