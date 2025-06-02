import {allFoods} from "../main.js";

const allBoxes = document.querySelectorAll(".food-box");

allBoxes.forEach(box => box.querySelector("select").addEventListener("select",eventValue=>{
    const calDisplay = box.getElementsByClassName(".calorie-display");
    const carbDisplay = box.getElementsByClassName(".carb-display");
    const protDisplay = box.getElementsByClassName(".prot-display");
    const fatDisplay = box.getElementsByClassName("fat-display");

    let n = eventValue.target.value;

    let calContent = allFoods[n].calories;
    let carbContent = allFoods[n].carbohidrates;
    let protContent = allFoods[n].protein;
    let fatContent = allFoods[n].fat;

    calDisplay.innerHtml(calContent);
    carbDisplay.innerHtml(carbContent);
    protDisplay.innerHtml(protContent);
    fatDisplay.innerHtml(fatContent);
}));