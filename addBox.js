//Selecting the HTML elements that the script will use
const container = document.getElementById("container");
const foodAdderButton = document.getElementById("food-adder-btn");

//A function that will add a div that will contain the information of a selected food
function addBox() {
    const allFoods = ["rice", "cheese"];

    //Creating all the elements that the div will have
    let foodSelector = document.createElement("select");//`<select class="food-select" name="food"></select>`;
    foodSelector.name = "food";

    allFoods.forEach (food => {
        let option = document.createElement('option');
        option.value = food;
        option.textContent = food;
        foodSelector.appendChild(option);
    })

    let foodQuantiyInput = document.createElement('form');
    let calorieContentDisplay = document.createElement('div');
    let carbContentDisplay = document.createElement('div');
    let proteinContentDisplay = document.createElement('div');
    let fatContentDisplay = document.createElement('div');

    //Creating the div that will store the elements
    let div = document.createElement("div");
    div.classList.add("food-box");

    div.appendChild(foodSelector);
    div.appendChild(foodQuantiyInput);
    div.appendChild(calorieContentDisplay);
    div.appendChild(carbContentDisplay);
    div.appendChild(proteinContentDisplay);
    div.appendChild(fatContentDisplay);

    //Adding the div to the container
    container.appendChild(div);
}



//Adding an event that will add a div each time a button is pressed
foodAdderButton.addEventListener("click", ()=>addBox());