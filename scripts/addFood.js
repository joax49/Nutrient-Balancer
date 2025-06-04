"use strict";

import { addFood } from "./dbManager.js";

const form = document.getElementById("food-adding");

form.addEventListener("submit", event=>{
    event.preventDefault(false);
    const foodNameElement = document.getElementById("food-name");
    const carbsElement = document.getElementById("carbs");
    const proteinElement = document.getElementById("protein");
    const fatElement = document.getElementById("fat")


    let food = {
        foodName : foodNameElement.value,
        calories : (carbsElement.value * 4 + proteinElement.value * 4 + fatElement.value * 9),
        carbohidrates : carbsElement.value,
        protein : proteinElement.value,
        fat : fatElement.value
    }

    addFood(food);

    foodNameElement.value = "";
    carbsElement.value = "";
    proteinElement.value = "";
    fatElement.value = "";

    console.log("Food added successfully");
})