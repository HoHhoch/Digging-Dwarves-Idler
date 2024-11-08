import mountain from "../mountain_data.js";
import globals from "../data.js";
import miner from "../miner_data.js";
import { set_ore_counter, set_miner_cost } from "../../templates/mountainView.js";

let timeout = 10000
let miner_interval = ''

//Objects and custom events
const true_mountain = document.getElementById("True_Mountain")
const minerEvent = new MouseEvent("click", {
    message: "This is a miner event test!",
});

//Event dispatch wrappers
function mining_miners(){
    if (globals.get_total_miners() > 0){
        true_mountain.dispatchEvent(minerEvent)
    }
}

//Functions
const mountainClick = function () {
    mountain.clicked()
    set_ore_counter()
    console.log(globals.get_current_ore())
}

const miner_click = function () {
    mountain.miner_click(miner.get_strength())
    set_ore_counter()
    console.log(globals.get_current_ore())
}

const buyMiner = function () {
    if (globals.current_ore >= globals.get_miner_cost()){
        console.log("Miner Bought!")
        globals.purchase_miner()
        set_ore_counter()
        set_miner_cost()

        let adjust_time = timeout - (globals.get_total_miners() - 1) * 100
        console.log("Time adjusted:", adjust_time, "Total Miners:", globals.get_total_miners())
        if (globals.get_total_miners() == 1) {
            miner_interval = setInterval(mining_miners, adjust_time)
            console.log("After creation: ", miner_interval)
        }
        else{
            console.log("Before clearing: ", miner_interval)
            clearInterval(miner_interval)
            console.log("After Clearing: ", miner_interval)
            miner_interval = setInterval(mining_miners, adjust_time)
            console.log("After Creation: ", miner_interval)
        }
    }
}

//Event Listeners
true_mountain.addEventListener("click", (event) => {
    console.log(event)
    if (event.pointerType === "mouse"){
        mountainClick()
    }
    else{
        miner_click()
    }
});
document.getElementById("Miner_Button").addEventListener("click", buyMiner, false);