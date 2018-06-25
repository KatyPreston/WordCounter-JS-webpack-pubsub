const PubSub = require("../helpers/pub_sub.js");

const InputView = function(){

};

InputView.prototype.bindEvents = function(){
  const input = document.querySelector("#text");
  input.addEventListener("submit", (evt) => {
    const inputtedWords = evt.target.value;
    PubSub.publish("InputView:words-inputted", inputtedWords)
  })


};

module.exports = InputView;
