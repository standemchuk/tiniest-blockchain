const Joi = require('joi')

const { createTransaction, getBlocks, mine } = require('./handlers')

module.exports = [
  {
    method: 'POST',
    path: '/api/transaction',
    config: {
      handler: createTransaction,
      description: 'Submit a new transaction to the transaction queue',
      tags: ['api', 'transaction'],
      validate: {
        payload: Joi.object({
          from: Joi.string().required().description('Transaction sender id'),
          to: Joi.string().required().description('Transaction receiver id'),
          amount: Joi.number().required().description('Amount of coins sent in the transaction')
        })
      }
    }
  },
  {
    method: 'GET',
    path: '/api/blocks',
    config: {
      handler: getBlocks,
      description: 'Get the list of blocks in the blockchain',
      tags: ['api', 'blocks', 'chain']
    }
  },
  {
    method: 'GET',
    path: '/api/mine',
    config: {
      handler: mine,
      description: 'Mine a new block in the blockchain',
      tags: ['api', 'blocks', 'mine']
    }
  }
]
