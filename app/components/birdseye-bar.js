import Ember from 'ember';

export default Ember.Component.extend({

  fullConditions: Ember.computed('weather', function() {
    var weather = this.get('weather')
    return weather.weather[0].description;
  }),

  actions: {
    generateWeather() {
      document.getElementById("holder").innerHTML = "";
      var windSpeed = 0;
      var windRad = 0;
      var weather = this.get('weather');
      var weatherCode = weather.weather[0].id;
      console.log(weatherCode);
      if (weather.wind.speed) {
        windSpeed = weather.wind.speed;
      }
      if (weather.wind.deg) {
        windRad = (90-weather.wind.deg) * (Math.PI/180);
      }
      let svgContainer = d3.select('#holder').append('svg').attr('width',window.innerWidth).attr('height',(window.innerHeight-64));
      var w = 1;
      var c = 1;
      var r = 1;
      if (weatherCode >= 200 &&  weatherCode < 300) {
        //Thunderstorm
        while (r++ < 600 * (window.innerWidth/1080)){
          var startX = Math.random()*window.innerWidth;
          var startY = Math.random()*window.innerHeight;
          var radius = 5 * Math.random();
          svgContainer.append('circle')
          .attr('cx',startX)
          .attr('cy',startY)
          .attr('r',radius)
          .style('fill', 'blue')
          .transition()
          .attr('cy', startY+40)
          .attr('r',0)
          .duration(1000)
          .ease('linear');
        }
      } else if (weatherCode >= 300 &&  weatherCode < 400 || weatherCode === 701) {
        //Drizzle and mist
        while (r++ < 300 * (window.innerWidth/1080)){
          var startXDriz = Math.random()*window.innerWidth;
          var startYDriz = Math.random()*window.innerHeight;
          var radiusDriz = 5 * Math.random();
          svgContainer.append('circle')
          .attr('cx',startXDriz)
          .attr('cy',startYDriz)
          .attr('r',radiusDriz)
          .style('fill', 'blue')
          .transition()
          .attr('cy', startYDriz+40)
          .attr('r',0)
          .duration(1000)
          .ease('linear');
        }
      } else if (weatherCode >= 500 &&  weatherCode < 600) {
        //Rain
        while (r++ < 350* (window.innerWidth/1080)){
          var startXRain = Math.random()*window.innerWidth;
          var startYRain = Math.random()*window.innerHeight;
          var radiusRain = 5 * Math.random();
          svgContainer.append('circle')
          .attr('cx',startXRain)
          .attr('cy',startYRain)
          .attr('r',radiusRain)
          .style('fill', 'blue')
          .transition()
          .attr('cy', startYRain+40)
          .attr('r',0)
          .duration(1000)
          .ease('linear');
        }
      } else if (weatherCode >= 600 &&  weatherCode < 700) {
        //Snow
        while (r++ < 340 * (window.innerWidth/1080)){
          var startXSnow = Math.random()*window.innerWidth;
          var startYSnow = Math.random()*window.innerHeight;
          var radiusSnow = 5 * Math.random();
          svgContainer.append('circle')
          .attr('cx',startXSnow)
          .attr('cy',startYSnow)
          .attr('r',radiusSnow)
          .style('fill', 'white')
          .transition()
          .attr('cy', startYSnow+40)
          .attr('r',0)
          .duration(3000)
          .ease('linear');
        }
      }

      while (w++ < 200) {
        //Draws the little "dust" squares to show wind direction when there are few/no clouds
        var startXBits = (Math.random()-Math.random())*window.innerWidth;
        var startYBits = (Math.random()-Math.random())*window.innerHeight;
        var radiusBits = Math.random()*4;
        var fullRgb = 'rgb(' + String(Math.floor(Math.random()*255)) + ', ' + String(Math.floor(Math.random()*255)) + ', ' + String(Math.floor(Math.random()*255)) + ')';
        svgContainer.append('rect')
        .attr('x',startXBits)
        .attr('y',startYBits)
        .attr('width', radiusBits)
        .attr('height', radiusBits)
        .style('fill',fullRgb)
        .transition()
        .attr('x', startXBits - (((windSpeed * 60) * Math.cos(windRad))/(radiusBits/120)) )
        .attr('y', startYBits + (((windSpeed * 60) * Math.sin(windRad))/(radiusBits/120)) )
        .duration(3000);
      }

      while (c++ < this.get('weather.clouds.all')) {
        var startXCloud = Math.random()*window.innerWidth;
        var startYCloud = Math.random()*window.innerHeight;
        var radiusCloud = (this.get('weather.clouds.all')) + (Math.random()*100);
        svgContainer.append('rect')
        .attr('x',startXCloud)
        .attr('y',startYCloud)
        .attr('width', radiusCloud)
        .attr('height', radiusCloud)
        .style('fill', 'white')
        .style('opacity', '0.7')
        .transition()
        .attr('x', startXCloud - (((windSpeed * 60) * Math.cos(windRad))/(radiusCloud/120)) )
        .attr('y', startYCloud + (((windSpeed * 60) * Math.sin(windRad))/(radiusCloud/120)) )
        .duration(3000);
      }
    },
    weatherNow: function() {
      console.log(this.get('weather'));
    },
    citySearch: function() {
      var params = {
        name: this.get('city')
      };
      document.getElementById("holder").innerHTML = "";
      this.sendAction('citySearch', params);
    }
  }
});
