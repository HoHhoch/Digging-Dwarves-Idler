import mountain from "../data.js";

const mountainClick = function () {
    mountain.clicked()
    let totalOre = document.querySelector(".TotalOre_Count span")
    totalOre.innerHTML = mountain.currentOre

    console.log(totalOre)
}

const true_mountain = document.body.querySelector(".True_Mountain")
true_mountain.addEventListener("click", mountainClick, false);

let index = 20

function simulateClick() {
    if (index > 0) {
         const clickEvent = new MouseEvent("click", {
             message: "This is an automated click test",
         });
         true_mountain.dispatchEvent(clickEvent)
         index --
         setTimeout(simulateClick, 10000)
    } 
 }
 
 simulateClick()