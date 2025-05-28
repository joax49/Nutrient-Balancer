"use strict";

const request = indexedDB.open("FoodDB");

request.addEventListener("upgradeneeded",()=>{
    const db = request.result;

    db.createObjectStore("foods", {keyPath: "foodName"});
})

const getIDBData = ()=>{
    const db = request.result;
    const IDBtransaction = db.transaction("foods", "readwrite");
    const objStore = IDBtransaction.objectStore("foods");

    return [IDBtransaction, objStore]
}

const addFood = food => {
    const db = getIDBData();

    db[1].add(food);
    db[0].addEventListener("success",()=>{
        console.log("The item was added correctly");
    })
}

const getFood = () => {
    let foodListArr = [];

    const db = getIDBData();

    const cursor = db[1].openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            foodListArr.push(cursor.result.value);
            cursor.result.continue();
        }
    })

    return foodListArr;
}

// export const fillFoodSelectors = ()=> {

//     const allFoods = ["rice", "cheese"]

//     const foodBox = document.querySelector(".food-box");
//     const foodSelector = foodBox.querySelector(".foodSelect");
    
//     allFoods.forEach(food => {
//         const option = document.createElement('option');
//         option.value = food;
//         option.textContent = food;
//         foodSelector.appendChild(option);
//     })
// }
