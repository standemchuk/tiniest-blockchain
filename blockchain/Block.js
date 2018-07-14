'use strict'

const crypto = require('crypto')

class Block {
  constructor (index, timestamp, data, previousHash) {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHashOfBlock()
  }

  calculateHashOfBlock () {
    return crypto
      .createHash('sha256')
      .update(this.index, this.timestamp, JSON.stringify(this.data), this.previousHash)
      .digest('hex')
  }

  static generateGenesisBlock () {
    return new Block(
      0,
      1531577901348,
      {
        name: 'Genesis block'
      },
      '-1'
    )
  }
}

module.exports = Block
