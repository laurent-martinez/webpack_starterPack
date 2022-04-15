import "./styles/main.scss";
import "bootstrap";

// or get all of the named exports for further usage
import * as bootstrap from "bootstrap";

import cooking from "./assets/cooking_hat.svg";
import magnifying from "./assets/magnifying_glass.svg";
import recipes from "./assets/food.svg";
import time from "./assets/timer.svg";

const logoBrand = document.getElementById("logo");
logoBrand.src = cooking;
const searchPicture = document.getElementById("search_picture");
searchPicture.src = magnifying;
const recipesPic = document.querySelectorAll(".card-img-top");
recipesPic.forEach((recipe) => {
  recipe.src = recipes;
});
const logoTimer = document.querySelectorAll(".timer");
logoTimer.forEach((logo) => {
  logo.src = time;
});
