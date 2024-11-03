import mountain from "../components/mountain_data.js";
import globals from "../components/data.js";

// Replace the image with a canvas for actual development
const template = `
    <img src=${mountain.src} alt=${mountain.alt} class="True_Mountain"/>
`;

// document.getElementById("Current_Ore").innerHTML = "Current Ore: " + mountain.currentOre;

export function set_building_view(){

    let article = document.createElement("article")
    article.innerHTML = template

    let mountain_table = document.body.querySelector(".Building_Wrapper")
    mountain_table.append(article)
}
export function set_ore_counter() {
    let totalOre = document.getElementById("Current_Ore")
    totalOre.innerHTML = globals.get_current_ore()
}

export function set_miner_cost() {
    document.getElementById("Miner_Cost").innerText = globals.get_miner_cost()
}

set_building_view()
set_ore_counter()
set_miner_cost()