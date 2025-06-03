import {allFoods} from "../main.js";

//Selecting the HTML elements that the script will use
const container = document.getElementById("container");

//A function that will add a div that will contain the information of a selected food
export function addBox() {
    //Creating all the elements that the div will have
    let foodSelector = document.createElement("select");//`<select class="food-select" name="food"></select>`;
    foodSelector.name = "food";

    for (let n = 0; n < allFoods.length; n++) {
        let option = document.createElement('option');
        option.value = n;
        option.textContent = allFoods[n].foodName;
        foodSelector.appendChild(option);
    }

    foodSelector.addEventListener("select",()=>console.log("hola"));

    let foodQuantiyInput = document.createElement('input');
    foodQuantiyInput.type = 'number';
    foodQuantiyInput.required = true;

    let submit = document.createElement('input');
    submit.type = 'submit';

    let calorieContentDisplay = document.createElement('div');
    calorieContentDisplay.classList.add("calorie-display");
    let carbContentDisplay = document.createElement('div');
    carbContentDisplay.classList.add("carb-display");
    let proteinContentDisplay = document.createElement('div');
    proteinContentDisplay.classList.add("prot-display");
    let fatContentDisplay = document.createElement('div');
    fatContentDisplay.classList.add("fat-display");

    let form = document.createElement('form');
    form.appendChild(foodSelector);
    form.appendChild(foodQuantiyInput);
    form.appendChild(submit);

    form.addEventListener("submit",event=>{
        event.preventDefault(false);
        let selectedFood = foodSelector.value;
        let foodQuantity = foodQuantiyInput.value;

        calorieContentDisplay.innerHTML = (allFoods[selectedFood].calories * foodQuantity) / 100;
        carbContentDisplay.innerHTML = (allFoods[selectedFood].carbohidrates * foodQuantity) / 100;
        proteinContentDisplay.innerHTML = (allFoods[selectedFood].protein * foodQuantity) / 100;
        fatContentDisplay.innerHTML = (allFoods[selectedFood].fat * foodQuantity) / 100;
    });

    //Creating the div that will store the elements
    let div = document.createElement("div");
    div.classList.add("food-box");

    div.appendChild(form);
    div.appendChild(calorieContentDisplay);
    div.appendChild(carbContentDisplay);
    div.appendChild(proteinContentDisplay);
    div.appendChild(fatContentDisplay);

    //Adding the div to the container
    container.appendChild(div);
}