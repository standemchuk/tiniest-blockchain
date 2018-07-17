const originalMine = require('../../handlers/mine')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Mine endpoint', () => {
  it('should call mine() method on a blockchain instance', () => {
    const requestObj = {
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
    sinon.assert.called(h.response)

    expect(response.statusCode).to.equal(200)
  })
})
