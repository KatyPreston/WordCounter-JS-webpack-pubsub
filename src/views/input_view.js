const PubSub = require("../helpers/pub_sub.js");

const InputView = function(){

};

InputView.prototype.bindEvents = function(){
  const input = document.querySelector("#wordcounter-form");
  input.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputtedWords = evt.target.text.value;
    PubSub.publish("InputView:words-inputted", inputtedWords)
    console.log(inputtedWords);
  })


};

module.exports = InputView;
