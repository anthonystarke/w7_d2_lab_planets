const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  // PubSub.publish('SolarSystem:All-planets-ready',this.planets);

  PubSub.subscribe('SelectView:chosen-id', (event) =>{
    const chosenPlanet = event.detail;
    this.publishPlanet(chosenPlanet);
    // console.log(chosenPlanet);
  })
};

SolarSystem.prototype.publishPlanet = function (chosenPlanet) {
  const planetObject = this.planets.find(function(planet){
    return planet.name === chosenPlanet
  });  

  PubSub.publish('SolarSystem:chosen-planet',planetObject);
};





module.exports = SolarSystem;
