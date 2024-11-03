import mountain from "../mountain_data.js";
import globals from "../data.js";
import { set_ore_counter, set_miner_cost } from "../../templates/mountainView.js";

const mountainClick = function () {
    mountain.clicked()
    set_ore_counter()
    console.log(globals.get_current_ore())
}

const buyMiner = function () {
    if (globals.current_ore >= globals.get_miner_cost()){
        console.log("Miner Bought!")
        globals.purchase_miner()
        set_ore_counter()
        set_miner_cost()
    }
}

const true_mountain = document.body.querySelector(".True_Mountain")
true_mountain.addEventListener("click", mountainClick, false);
document.getElementById("Miner_Button").addEventListener("click", buyMiner, false);

let index = 0
let timeout = 10000

function simulateClick() {
    if (index > 0) {
         const clickEvent = new MouseEvent("click", {
             message: "This is an automated click test",
         });
         true_mountain.dispatchEvent(clickEvent)
         setTimeout(simulateClick, timeout)
    }
 }

 simulateClick()