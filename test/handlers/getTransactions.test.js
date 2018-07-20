const originalGetTransactions = require('../../handlers/getTransactions')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Get transactions endpoint', () => {
  it('should return a list of transactions from a blockchain', () => {
    const transactions = [{
      'from': 'network',
      'to': 'f73f1fcd-9a2a-945a-f120-5607df157d5e',
      'amount': 18,
      'createdAt': 1532067621611
    },
    {
      'from': 'network',
      'to': 'f73f1fcd-9a2a-945a-f120-5607df157d5e',
      'amount': 67,
      'createdAt': 1532067626085
    },
    {
      'from': 'network',
      'to': 'f73f1fcd-9a2a-945a-f120-5607df157d5e',
      'amount': 12,
      'createdAt': 1532067629846
    }]
    const blocks = [{ test: 'value', data: { transactions } }]
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
    const response = originalGetTransactions(requestObj, h)

    sinon.assert.called(requestObj.server.app.bcInstance.get)
    sinon.assert.calledWith(h.response, { transactions })

    expect(response.statusCode).to.equal(200)
  })
})
