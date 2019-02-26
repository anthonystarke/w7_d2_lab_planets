const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:chosen-planet', (event) => {
     const receivedPlanet = event.detail;
     this.renderPlanet(receivedPlanet);
  });
};

ResultView.prototype.createAndText = function (element,text,parent) {
    const newElement = document.createElement(element);
    newElement.textContent = text;
    parent.appendChild(newElement);
    return newElement;
};

ResultView.prototype.renderPlanet = function (receivedPlanet) {
  const planetList = document.querySelector(".planet-details");
  planetList.innerHTML = "";

  const divElement = document.createElement('div');
  divElement.classList.add('planet-item');

  const elementToCreate = 'li'

  const newPlanetName = this.createAndText(elementToCreate,`Planet Name: ${receivedPlanet.name}`,divElement);
  const newPlanetOrbit = this.createAndText(elementToCreate,`Planet Orbit: ${receivedPlanet.orbit}`,divElement);
  const newPlanetDay = this.createAndText(elementToCreate,`Planet Day: ${receivedPlanet.day}`,divElement);
  const newPlanetSurfaceArea = this.createAndText(elementToCreate,` Surface Area: ${receivedPlanet.surfaceArea}`,divElement);
  const newPlanetVolume = this.createAndText(elementToCreate,` Volume: ${receivedPlanet.volume}`,divElement);
  const newPlanetGravity = this.createAndText(elementToCreate,` Gravity: ${receivedPlanet.gravity}`,divElement);
  const newPlanetMoons = this.createAndText(elementToCreate,` Moons: ${receivedPlanet.moons}`,divElement);

  const newPlanetImage = document.createElement('img');
  newPlanetImage.classList.add('planet-image');
  newPlanetImage.src = receivedPlanet.image;

  planetList.appendChild(divElement);
  planetList.appendChild(newPlanetImage);
};

module.exports = ResultView;
