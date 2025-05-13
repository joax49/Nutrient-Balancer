const container = document.querySelector("#container");
const foodAdderButton = document.querySelector("#food-adder-btn");

function addBox() {
    let foodSelector = `<select name="food"></select>`;
    let foodQuantiyInput = `<form></form>`;
    let calorieContentDisplay = `<div></div>`;
    let carbContentDisplay = `<div></div>`;
    let proteinContentDisplay = `<div></div>`;
    let fatContentDisplay = `<div></div>`;

    let div = document.createElement("div");
    div.classList.add("food-box");
    div.innerHTML = foodSelector + foodQuantiyInput + calorieContentDisplay 
    + carbContentDisplay + proteinContentDisplay + fatContentDisplay;
    
    container.appendChild(div);
}

foodAdderButton.addEventListener("click", ()=> addBox());