"use strict"

import { addFood } from "./dbManager.js";

export function extractingJSONData () {
    const request = fetch("./standardFoods.json");
    request.then(res => res.json()).then(data => {
        for (let i = 0; i < data.foods.length; i++) {
            console.log(data.foods[i])
            addFood(data.foods[i])
        }
    });
}