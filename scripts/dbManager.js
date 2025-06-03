"use strict";

const request = indexedDB.open("FoodDB");

const getIDBData = ()=>{
    const db = request.result;
    const IDBtransaction = db.transaction("foods", "readwrite");
    const objStore = IDBtransaction.objectStore("foods");

    return [IDBtransaction, objStore]
}

export const addFood = food => {
    const db = getIDBData();

    db[1].add(food);
    db[0].addEventListener("success",()=>{
        console.log("The item was added correctly");
    })
}

const getFood = () => {
    let foodObj = {};

    const db = getIDBData();

    const cursor = db[1].openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            foodObj = cursor.result.value;
            allFoods.push()
            cursor.result.continue();
        }
    })
}