const originalGetBlocks = require('../../handlers/getBlocks')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Get blocks endpoint', () => {
  it('should call createTransaction() method on a blockchain instance', () => {
    const blocks = [{ test: 'value ' }]
    const requestObj = {
      server: {
        app: {
          bcInstance: {
            get: sinon.stub().returns(blocks)
          }
        }
      }
    }

    const h = { response: sinon.stub().returns({ statusCode: null }) }
    const response = originalGetBlocks(requestObj, h)

    sinon.assert.called(requestObj.server.app.bcInstance.get)
    sinon.assert.calledWith(h.response, { blocks })

    expect(response.statusCode).to.equal(200)
  })
})
