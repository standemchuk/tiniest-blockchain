module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance
  const blocks = blockchain.get()
  const transactions =
    // flatten arrays of transactions into one
    [].concat.apply(
      [],
      blocks.map(block => block.data.transactions)
    ).filter(
      transaction => transaction != null
    )

  const response = h.response({
    transactions
  })
  response.statusCode = 200

  return response
}
