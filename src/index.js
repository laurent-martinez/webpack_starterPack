import "bootstrap";
import "./styles/main.scss";
import { recipes } from "./recipes.js";
// or get all of the named exports for further usage
import * as bootstrap from "bootstrap";

import cooking from "./assets/cooking_hat.svg";
import magnifying from "./assets/magnifying_glass.svg";
import food from "./assets/food.svg";
import time from "./assets/timer.svg";
console.log(recipes);
const logoBrand = document.getElementById("logo");
logoBrand.src = cooking;
const searchPicture = document.getElementById("search_picture");
searchPicture.src = magnifying;
const recipesPic = document.querySelectorAll(".card-img-top");
recipesPic.forEach((recip) => {
  recip.src = food;
});
const logoTimer = document.querySelectorAll(".timer");
logoTimer.forEach((logo) => {
  logo.src = time;
});

const recipeCardTemplate = document.querySelector("[data-recipe-template]");
const recipeCardsContainer = document.querySelector("[data-cards-container]");

recipes.forEach((recipe) => {
  const card = recipeCardTemplate.content.cloneNode(true);
  const title = card.querySelector("[data-title]");
  const timing = card.querySelector("[data-timing]");
  const ingredients = card.querySelector("[data-ingredients]");
  const instructions = card.querySelector("[data-instructions]");
  title.textContent = recipe.name;
  timing.textContent = recipe.time;
  console.log(recipe.ingredients);
  const ingredientso = recipe.ingredients;
  ingredientso.forEach((ing) => {
    ingredients.textContent += `${ing.ingredient} : ${
      ing.quantity + ing.unit || ing.quantity
    }`;
  });
  instructions.textContent = recipe.description;
  recipeCardsContainer.append(card);
});
