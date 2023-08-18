/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const SUITS = ["&spades;", "&hearts;", "&clubs;", "&diamondsuit;"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

window.onload = function() {
  // Generate random SUIT and random card VALUE.
  let randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
  let randomValue = VALUES[Math.floor(Math.random() * VALUES.length)];

  // Get HTML elements.
  let valueElement = document.getElementsByClassName("value")[0]; // One element.
  let suitElements = document.getElementsByClassName("suit"); // Two elements.

  valueElement.innerHTML = randomValue;
  suitElements[0].innerHTML = randomSuit;
  suitElements[1].innerHTML = randomSuit;

  if (randomSuit === "&hearts;" || randomSuit === "&diamondsuit;") {
    suitElements[0].style.color = "red";
    suitElements[1].style.color = "red";
    valueElement.style.color = "red";
  }
};
