const Block = require('./Block')
const axios = require('axios')

class Blockchain {
  constructor () {
    this.blockchain = [Block.generateGenesisBlock()]
    this.transactions = []
  }

  get () {
    return this.blockchain
  }

  createTransaction (transactionInfo) {
    this.transactions.push(transactionInfo)
  }

  mineNewBlock (minerAddress) {
    const lastBlock = this.blockchain[this.blockchain.length - 1]

    const proof = this.proofOfWork(lastBlock.data.proofOfWork)

    this.createTransaction({
      from: 'network',
      to: minerAddress,
      amount: 1,
      createdAt: Date.now()
    })

    const newBlock = Block.generateNextBlock(lastBlock, {
      transactions: this.transactions,
      proofOfWork: proof
    })

    this.transactions = []

    this.blockchain.push(newBlock)

    return newBlock
  }

  async consensus () {
    const otherChains = await this.discoverPeerChains()

    let longestChain = this.blockchain

    for (let chain of otherChains) {
      if (chain.length > longestChain.length) {
        longestChain = chain
      }
    }

    this.blockchain = longestChain
  }

  async discoverPeerChains () {
    const peerChains = []

    const peersList = process.env.PEERS.split(',')

    for (let peerUrl of peersList) {
      const peerChain = await axios.get(`${peerUrl}/api/blocks`)

      peerChains.push(peerChain)
    }

    return peerChains
  }

  proofOfWork (lastProof) {
    let incrementor = lastProof + 1

    while (!(incrementor % 9 === 0 && incrementor % lastProof === 0)) {
      incrementor += 1
    }

    return incrementor
  }
}

module.exports = Blockchain
