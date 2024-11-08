class Miner {
    constructor(
        strength,
        miner_name
    ){
        this.strength = strength,
        this.miner_name = miner_name,
        this.miner_total = miner_name.length
    }
    get_strength = () => {
        return this.strength
    }
    get_miner_total = () => {
        return this.miner_total
    }
    add_miner = (name) =>{
        this.miner_name.push(name)
    }
    mine = () =>{
        return this.strength
    }
}

export default Miner;