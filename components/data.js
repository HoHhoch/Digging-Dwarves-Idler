import Miner from "./classes/Miner.js"
import miner from "./miner_data.js"

// We'll want to read this from some type of save, like a json or something,
// So the data doesn't get reset with the browser every time.

/*The globals object will shuttle data to all of the other objects.
The other objects will then individually keep track of their own data.
Then during a set interval, they will shuttle their data back to the global object.
Exception is when the global multiplier gets updated, where the global will then request all data
from all objects and send out new updated data once everything has been conglomerated.*/

const globals = new class Globals{
    constructor(
        total_clicks,
        multiplier,
        total_ore,
        current_ore,
        total_miners = 0
    ){
        this.id = "God",
        this.total_clicks = total_clicks,
        this.multiplier = multiplier,
        this.total_ore = 0,
        this.current_ore = 0,
        this.total_miners = 0,
        this.current_allowed_miners = 2,
        this.miner_cost = this.calculate_miner_cost()
        this.prev_miner_cost = this.miner_cost
    }
    get_total_miners = () => {
        return this.total_miners
    }
    get_total_ore = () => {
        return this.total_ore
    }
    get_current_ore = () => {
        return this.current_ore
    }
    get_miner_cost = () => {
        return this.miner_cost
    }
    add_ore(add) {
        this.current_ore += add
        this.total_ore += add
    }
    reduce_ore = (reduction) => {
        this.current_ore -= reduction
    }
    calculate_miner_cost = () => {
        this.miner_cost = 1 + this.total_miners * 2
        return this.miner_cost
    }
    purchase_miner() {
        this.total_miners += 1
        this.reduce_ore(this.miner_cost)
        this.prev_miner_cost = this.miner_cost
        this.calculate_miner_cost()
        miner.add_miner("Bob")
    }
}

export default globals;