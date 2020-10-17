class Cell {
    constructor(alive) {
        this.alive = alive;        
    }

    setAlive(alive) {
        this.alive = alive;
    }

    isAlive() {
        return this.alive;
    }
}

export default Cell;