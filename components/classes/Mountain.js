import globals from "../data.js"

class Mountain {
    constructor(
    src,
    alt,
    totalClicks,
    clicks
    ) {
        this.id = "The_Mountain",
        this.src = src,
        this.alt = alt,
        this.totalClicks = totalClicks,
        this.threshold = 100,
        this.clicks = clicks,
        this.chip_progress = 0,
        this.mined = false,
        this.oreMultiplier = 1.0
    }
    miner_click = (miner_strength = 0) =>{
        this.chip_progress += miner_strength
        console.log("The miners are busy!", this.chip_progress)
        this.check_chip()
    }
    clicked = (click_strength = 0) =>{
        this.clicks += 1 + click_strength
        this.totalClicks += 1
        this.chip_progress += 1 + click_strength
        console.log("Clicked!", this.totalClicks)
        this.check_chip()
    }
    check_chip = () =>{
        if (this.chip_progress >= this.threshold){
            this.chip_progress -= this.threshold
            this.mined = true
        }
        if (this.mined){
            this.mine()
        }
    }
    mine = () => {
        this.mined = false
        //Pop a rock off!
        globals.add_ore(1 * this.oreMultiplier)
        console.log("You got some ore!", globals.get_current_ore())
    }
};

export default Mountain;