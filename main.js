"use strict";

import {addBox} from "./scripts/addBox.js";

const foodAdderButton = document.getElementById("food-adder-btn");
const request = indexedDB.open("FoodDB");

//An array that will store all the possible foods
export let allFoods = [];

//Creating the DB that will contain the foods
request.addEventListener("upgradeneeded",()=>{
    const db = request.result;

    const store = db.createObjectStore("foods", {keyPath: "foodName"});
})

//When the page loads successfully, it will store all the foods in an array
request.addEventListener("success",() => {
    let foodObj = {};

    const db = request.result;
    const IDBtransaction = db.transaction("foods", "readwrite");
    const objStore = IDBtransaction.objectStore("foods");

    const cursor = objStore.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            foodObj = cursor.result.value;
            allFoods.push(foodObj)
            cursor.result.continue();
        }
    })
})

//Adding an event that will add a div each time a button is pressed
foodAdderButton.addEventListener("click", ()=>addBox());