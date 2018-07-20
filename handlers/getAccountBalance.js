module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance
  const blocks = blockchain.get()
  const userTransactions =
    [].concat.apply(
      [],
      blocks.map(block => block.data.transactions)
    ).filter(
      transaction => transaction != null && (
        transaction.to === request.params.userAddress ||
        transaction.from === request.params.userAddress
      )
    )

  let accountBalance = userTransactions.reduce((acc, curr) => {
    if (curr.to === request.params.userAddress) {
      return acc + curr.amount
    } else if (curr.from === request.params.userAddress) {
      return acc - curr.amount
    }
  }, 0)

  const response = h.response({
    accountBalance,
    userTransactions
  })
  response.statusCode = 200

  return response
}
