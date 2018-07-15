const { expect } = require('chai')

const Block = require('../../blockchain/Block')

describe('Block', () => {
  it('should generate a hash once you construct a new instance', () => {
    const newBlock = new Block(0, Date.now(), { from: 'me', to: 'you', amount: 32 })
    expect(newBlock.hash).to.be.a('string')
  })

  it('should return the genesis block when generateGenesisBlock() is called', () => {
    const genesisBlock = Block.generateGenesisBlock()

    expect(genesisBlock.index).to.equal(0)
    expect(genesisBlock.previousHash).to.equal('-1')
    expect(genesisBlock.timestamp).to.equal(1531577901348)
    expect(genesisBlock.data.name).to.equal('Genesis block')
    expect(genesisBlock.data.proofOfWork).to.equal(9)
  })

  it('should generate a next block when generateNextBlock() is called', () => {
    const firstBlock = Block.generateGenesisBlock()
    const newBlock = Block.generateNextBlock(firstBlock, {
      from: 'testUser123',
      to: 'testUser1234',
      amount: 123
    })

    expect(newBlock.previousHash).to.equal(firstBlock.hash)
    expect(newBlock.index).to.equal(1)
  })
})
