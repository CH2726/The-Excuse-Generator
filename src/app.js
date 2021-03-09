/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  button = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let wholoop = Math.floor(Math.random() * who.length);
    let actionloop = Math.floor(Math.random() * action.length);
    let whatloop = Math.floor(Math.random() * what.length);
    let whenloop = Math.floor(Math.random() * when.length);

    // return (document.querySelector("#excuse").innerHtml = who[0]);
    // who[wholoop] +
    // "" +
    // action[actionloop] +
    // "" +
    // what[whatloop] +
    // "" +
    // when[whenloop] +
    // "");
  };
};

// check out this math floor random example: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random
