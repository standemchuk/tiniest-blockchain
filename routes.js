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
      tags: ['api'],
      validate: {
        payload: Joi.object({
          from: Joi.string().required().description('Transaction sender id'),
          to: Joi.string().required().description('Transaction receiver id'),
          amount: Joi.number().required().description('Amount of coins sent in the transaction')
        })
      }
    }
  }
]
