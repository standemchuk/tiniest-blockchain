const originalMine = require('../../handlers/mine')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Mine endpoint', () => {
  it('should call mine() method on a blockchain instance', () => {
    const requestObj = {
      params: {
        address: 'testMiner'
      },
      server: {
        app: {
          bcInstance: {
            mineNewBlock: sinon.spy()
          }
        }
      }
    }

    const h = { response: sinon.stub().returns({ statusCode: null }) }
    const response = originalMine(requestObj, h)

    sinon.assert.called(requestObj.server.app.bcInstance.mineNewBlock)
    sinon.assert.calledWith(h.response, { message: 'Block mined successfully', blockInfo: undefined })

    expect(response.statusCode).to.equal(200)
  })

  it('should call mine() method on a blockchain instance and return a proper message if there is' +
    ' nothing to mine', () => {
    const requestObj = {
      params: {
        address: 'testMiner'
      },
      server: {
        app: {
          bcInstance: {
            mineNewBlock: sinon.stub().returns(null)
          }
        }
      }
    }

    const h = { response: sinon.stub().returns({ statusCode: null }) }
    const response = originalMine(requestObj, h)

    sinon.assert.called(requestObj.server.app.bcInstance.mineNewBlock)
    sinon.assert.calledWith(h.response, { message: 'Nothing to mine', blockInfo: null })

    expect(response.statusCode).to.equal(200)
  })
})
