class Miner {
    constructor(
        strength,
        miner_name
    ){
        this.strength = strength,
        this.miner_name = miner_name
    }
    mine = () =>{
        return this.strength
    }
}

export default Miner;