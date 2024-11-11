import mountain from "../components/mountain_data.js";
import globals from "../components/data.js";

// Replace the image with a canvas for actual development

const canvas = document.getElementById("Building_Canvas")
const canvas2 = document.getElementById("Village_Canvas")
const ctx = canvas.getContext("2d")
const ctx2 = canvas2.getContext("2d")

window.addEventListener("load", set_building_view, false)
window.addEventListener("load", set_village_view, false)

//Building views
//Will need to be rewritten once multiple buildings are in place
function set_building_view(){
    let img = document.createElement("img")
    img.src=mountain.src
    img.alt=mountain.alt
    img.id="True_Mountain"
    ctx.drawImage(img, 10, 10)
}

function set_village_view(){
    var gradient = ctx2.createLinearGradient(0, 0, canvas2.clientWidth, 0)
    gradient.addColorStop("0", "black")
    gradient.addColorStop("0.5", "orange")
    gradient.addColorStop("1.0", "red")

    ctx2.font = "90px Arial"
    ctx2.fillStyle = gradient
    ctx2.fillText("Village View", 10, 175)
}

function set_ore_counter() {
    let total_ore = document.getElementById("Stone_Ore")
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