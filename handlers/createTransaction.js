module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance

  blockchain.createTransaction({
    ...request.payload,
    createdAt: Date.now()
  })

  const response = h.response({
    message: 'success'
  })
  response.statusCode = 201

  return response
}
