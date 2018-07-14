const Block = require('./Block')

class Blockchain {
  constructor () {
    this.blockchain = [Block.generateGenesisBlock()]
  }

  get () {
    return this.blockchain
  }

  static generateNextBlock (latestBlock, data) {
    return Block(
      latestBlock.index + 1,
      Date.now(),
      data,
      latestBlock.hash
    )
  }
}

module.exports = Blockchain
