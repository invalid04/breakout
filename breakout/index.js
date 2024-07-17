const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

// create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

// all blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    // new Block(560, 270),
    // new Block(670, 270),
    // new Block(780, 270),
    // new Block(890, 270),
    // new Block(1000, 270),
    // new Block(1110, 270),
    // new Block(1220, 270),
    // new Block(1330, 270),
    // new Block(1440, 270),
    // new Block(1550, 270),
]

// draw blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }
}

addBlocks()