import {allFoods} from "../main.js";

//Selecting the HTML elements that the script will use
const container = document.getElementById("food-managing");
const fullCalorieDisplay = document.getElementById("full-caloric-display");
const fullCarbDisplay = document.getElementById("full-carb-display");
const fullProteinDisplay = document.getElementById("full-protein-display");
const fullFatDisplay = document.getElementById("full-fat-display");

//An object that will contain the total calories, carbs, proteins and fat of the food
class Meal {
    constructor() {
        this._calories = 0;
        this._carbs = 0;
        this._protein = 0;
        this._fat = 0;

        this._storedFoods = [];
    }

    set newFood(food) {
        if(this._storedFoods.includes(food[0])) {
            return Error("This food is already selected");
        }
        else {
            this._storedFoods.push(food[0]);
            this._calories += food[1];
            this._carbs += food[2];
            this._protein += food[3];
            this._fat += food[4];
        }
    }

    get calories() {
        return this._calories
    }

    get carbs() {
        return this._carbs
    }

    get protein() {
        return this._protein
    }

    get fat() {
        return this._fat
    }
}

const WholeMeal = new Meal();

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
    foodQuantiyInput.classList.add('food-quantity-input');
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

        let calculatedCalories = Math.round((allFoods[selectedFood].calories * foodQuantity) / 100);
        let calculatedCarbs = Math.round(allFoods[selectedFood].carbohidrates * foodQuantity) / 100;
        let calculatedProtein = Math.round((allFoods[selectedFood].protein * foodQuantity) / 100);
        let calculatedFat = Math.round((allFoods[selectedFood].fat * foodQuantity) / 100)

        calorieContentDisplay.innerHTML = calculatedCalories;
        carbContentDisplay.innerHTML = calculatedCarbs;
        proteinContentDisplay.innerHTML = calculatedProtein;
        fatContentDisplay.innerHTML = calculatedFat;

        WholeMeal.newFood = [selectedFood,calculatedCalories,calculatedCarbs,calculatedProtein,calculatedFat];
        
        fullCalorieDisplay.innerHTML = "Total calories: "+WholeMeal.calories;
        fullCarbDisplay.innerHTML = WholeMeal.carbs;
        fullProteinDisplay.innerHTML= WholeMeal.protein;
        fullFatDisplay.innerHTML = WholeMeal.fat;
        
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