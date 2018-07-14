const Joi = require('joi')

module.exports = [
  {
    method: 'POST',
    path: '/transaction',
    config: {
      handler: () => {
        return 'OK'
      },
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
    path: '/blocks',
    config: {
      handler: () => {
        return 'OK'
      },
      description: 'Get the list of blocks in the blockchain',
      tags: ['api', 'blocks', 'chain']
    }
  },
  {
    method: 'GET',
    path: '/mine',
    config: {
      handler: () => {
        return 'OK'
      },
      description: 'Mine a new block in the blockchain',
      tags: ['api', 'blocks', 'mine']
    }
  }
]
