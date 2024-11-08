import mountain from "../components/mountain_data.js";
import globals from "../components/data.js";

// Replace the image with a canvas for actual development
const template = `
    <img src=${mountain.src} alt=${mountain.alt} id="True_Mountain"/>
`;

//Building views
function set_building_view(){

    let article = document.createElement("article")
    article.innerHTML = template

    let mountain_table = document.body.querySelector(".Building_Wrapper")
    mountain_table.append(article)
}
function set_ore_counter() {
    let total_ore = document.getElementById("Current_Ore")
    total_ore.innerHTML = globals.get_current_ore()
}


//Upgrade views
function set_miner_cost() {
    document.getElementById("Miner_Cost").innerText = globals.get_miner_cost()
}

//Call everything for initial buildout
set_building_view()
set_ore_counter()
set_miner_cost()


//Used to update views in other scripts
export {
    set_miner_cost,
    set_ore_counter,
    set_building_view
}