import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var cities = ["Birmingham", "Anchorage", "Phoenix", "LittleRock", "LosAngeles", "Denver", "Bridgeport", "Wilmington", "Jacksonville", "Atlanta", "Honolulu", "Boise", "Chicago", "Indianapolis", "DesMoines", "Wichita", "Louisville", "NewOrleans", "Portland", "Baltimore", "Boston", "Detroit", "Minneapolis", "Jackson", "KansasCity", "Billings", "Omaha", "LasVegas", "Manchester", "Newark", "Albuquerque", "NewYorkCity", "Charlotte", "Fargo", "Columbus", "OklahomaCity", "Philadelphia", "Providence", "Columbia", "SiouxFalls", "Memphis", "Houston", "SaltLakeCity", "Burlington", "VirginiaBeach", "Seattle", "Charleston", "Milwakuee", "Cheyenne"];

    var humidityArray = [];
    var key = config.apiKey;
    var done = cities.length;
    cities.forEach(function(city){
      console.log(city);
      var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=" + key;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        humidityArray.push(responseJSON.main.humidity);
        done -= 1;
        if (done === 0) {
          return humidityArray;
        }
      });
    });


    console.log(humidityArray);
  },
  actions: {
    getLoc: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }
});
