import generateJoke from "./generateJoke";
import "./styles/main.scss";
import cooking from "./assets/cooking_hat.svg";

const cooking_hat = document.getElementById("cooking_hat");
cooking_hat.src = cooking;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
generateJoke();
