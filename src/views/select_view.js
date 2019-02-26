const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(){

}

SelectView.prototype.bindEvents = function () {

  const itemSelect = document.querySelector('nav');
  itemSelect.addEventListener('click', this.selectedPlanet );
};

SelectView.prototype.selectedPlanet = function (event) {
  // console.log(event.target.id);
  const chosenPlanet = event.target.id;
  PubSub.publish('SelectView:chosen-id',chosenPlanet);

};

module.exports = SelectView;
