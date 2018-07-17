const originalCreateTransaction = require('../../handlers/createTransaction')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Create transaction endpoint', () => {
  it('should call createTransaction() method on a blockchain instance', () => {
    const requestObj = {
      server: {
        app: {
          bcInstance: {
            createTransaction: sinon.spy()
          }
        }
      }
    }

    const h = { response: sinon.stub().returns({ statusCode: null }) }
    const response = originalCreateTransaction(requestObj, h)

    sinon.assert.called(requestObj.server.app.bcInstance.createTransaction)
    sinon.assert.called(h.response)

    expect(response.statusCode).to.equal(201)
  })
})
