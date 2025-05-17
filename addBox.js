//Selecting the HTML elements that the script will use
const container = document.getElementById("container");
const foodAdderButton = document.getElementById("food-adder-btn");
let functionCounter = -1;

//An asyncronous function that will return an array with all the foods from the json file
async function fetchFood(parentNode) {

    const allDivs = document.querySelectorAll(".food-box");
    const selectedDiv = allDivs[parentNode];
    const foodSelector = selectedDiv.firstElementChild();
    let foodList = [];

    try {
        
        //Stored the promise
        const response = await fetch("foods.json");

        //An "if" statement that will throw an error if the file isn't located
        if(!response.ok) {
            throw new Error("Couldn't locate the file");
        }

        //Storing and then iterating the json file to store it in an array
        const foodsJson = await response.json();
        for (food in foodsJson) {
            foodList.push(foodsJson[food]);
        }
        
        let foodsHTML = "";
        for (food in foodList) {
            foodsHTML += `<option>${food}</option>`;
        }

        foodSelector.innerHTML = foodsHTML;

    } 
    catch(e) {
        console.error(e);
    }
}



//A function that will add a div that will contain the information of a selected food
function addBox(asyncronousFunction) {

    functionCounter += 1;

    //Creating all the elements that the div will have
    let foodSelector = `<select class="foodSelect" name="food"></select>`;
    let foodQuantiyInput = `<form></form>`;
    let calorieContentDisplay = `<div></div>`;
    let carbContentDisplay = `<div></div>`;
    let proteinContentDisplay = `<div></div>`;
    let fatContentDisplay = `<div></div>`;

    //Creating the div that will store the elements
    let div = document.createElement("div");
    div.classList.add("food-box");
    div.innerHTML = foodSelector + foodQuantiyInput + calorieContentDisplay 
    + carbContentDisplay + proteinContentDisplay + fatContentDisplay;
    
    asyncronousFunction(functionCounter);

    //Adding the div to the container
    container.appendChild(div);

}



//Adding an event that will add a div each time a button is pressed
foodAdderButton.addEventListener("click", ()=> addBox(fetchFood));