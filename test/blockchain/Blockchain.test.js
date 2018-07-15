const { expect } = require('chai')

const Blockchain = require('../../blockchain/Blockchain')

describe('Blockchain', () => {
  it('should generate a chain with a genesis block when constructed', () => {
    const chain = new Blockchain()

    expect(chain).to.be.an('object')
    expect(chain.transactions).to.be.an('array')
    expect(chain.transactions.length).to.equal(0)
    expect(chain.blockchain).to.be.an('array')
    expect(chain.blockchain.length).to.equal(1)
    expect(chain.blockchain[0].index).to.equal(0)
    expect(chain.blockchain[0].previousHash).to.equal('-1')
  })

  it('should return a list of blocks when calling a getter', () => {
    const chain = new Blockchain()

    expect(chain.get()).to.be.an('array')
    expect(chain.get()[0].previousHash).to.equal('-1')
  })

  it('should generate a new transaction to process when createTransaction is called', () => {
    const chain = new Blockchain()

    chain.createTransaction({ from: 'test1', to: 'test2', amount: 23 })

    expect(chain.transactions.length).to.equal(1)
    expect(chain.transactions[0].from).to.equal('test1')
  })

  it('should mine a new block and reward the miner when mineNewBlock() is called', () => {
    const chain = new Blockchain()

    chain.createTransaction({ from: 'test1', to: 'test2', amount: 23 })

    chain.mineNewBlock('testMiner')

    expect(chain.transactions.length).to.equal(0)
    expect(chain.blockchain.length).to.equal(2)
    expect(chain.blockchain[1].data.proofOfWork).to.equal(18)
    expect(chain.blockchain[1].data.transactions.length).to.equal(2)
    expect(chain.blockchain[1].data.transactions[0].from).to.equal('test1')
    expect(chain.blockchain[1].data.transactions[1].from).to.equal('network')
  })
})
