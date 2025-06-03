"use strict";

import { addFood } from "./dbManager";

const form = document.getElementById("food-adding");

form.addEventListener("select", ()=>{
    // let foodNameValue = document.getElementById("food-name").innerHTML;
    // let caloriesValue = document.getElementById("calories").innerHTML;
    // let  = document.getElementById("food-name").innerHTML;
    // let foodNameValue = document.getElementById("food-name").innerHTML;
    // let foodNameValue = document.getElementById("food-name").innerHTML;

    food = {
        foodName : document.getElementById("food-name").innerHTML,
        calories : document.getElementById("calories").innerHTML,
        carbohidrates : document.getElementById("carbohidrates").innerHTML,
        protein : document.getElementById("protein").innerHTML,
        fat : document.getElementById("fat")
    }

    addFood(food);
})