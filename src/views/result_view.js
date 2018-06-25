const PubSub = require("../helpers/pub_sub.js");

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe("WordCounter:result", (evt) => {
    const count = evt.detail;
    this.updateView(count);
  })
};

ResultView.prototype.updateView = function(count){
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `Number of words is ${count}`;
};

module.exports = ResultView;
