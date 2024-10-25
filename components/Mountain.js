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
        this.threshold = 10,
        this.clicks = clicks,
        this.mined = false,
        this.totalOre = 0,
        this.currentOre = 0,
        this.oreMultiplier = 1.0
    }
    clicked(){
        this.clicks += 1
        this.totalClicks += 1
        console.log("Clicked!", this.totalClicks)

        if (this.clicks >= this.threshold){
            this.clicks -= this.threshold
            this.mined = true
            this.mine()
        }
    }
    mine(){
        this.mined = false
        //Pop a rock off!
        this.totalOre = this.totalOre + 1 * this.oreMultiplier
        this.currentOre = this.currentOre + 1 * this.oreMultiplier
        console.log("You got some ore!", this.totalOre)
    }
};

export default Mountain;