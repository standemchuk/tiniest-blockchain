const originalGetAccountBalance = require('../../handlers/getAccountBalance')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Get account balance endpoint', () => {
  it('should return user balance and current user transactions', () => {
    const requestObj = {
      params: {
        userAddress: 'f73f1fcd-9a2a-945a-f120-5607df157d5e'
      },
      server: {
        app: {
          bcInstance: {
            get: sinon.stub().returns([
              {
                data: {
                  transactions: [{
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
                  },
                  {
                    'from': 'f73f1fcd-9a2a-945a-f120-5607df157d5e',
                    'to': 'test',
                    'amount': 12,
                    'createdAt': 1532067629878
                  }]
                }
              }
            ])
          }
        }
      }
    }

    const h = { response: sinon.stub().returns({ statusCode: null }) }
    const response = originalGetAccountBalance(requestObj, h)

    sinon.assert.called(requestObj.server.app.bcInstance.get)
    sinon.assert.calledWith(h.response, {
      accountBalance: 85,
      userTransactions: [{
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
      },
      {
        'from': 'f73f1fcd-9a2a-945a-f120-5607df157d5e',
        'to': 'test',
        'amount': 12,
        'createdAt': 1532067629878
      }]
    })

    expect(response.statusCode).to.equal(200)
  })
})
