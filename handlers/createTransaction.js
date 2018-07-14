module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance

  blockchain.createTransaction({
    ...request.payload
  })

  const response = h.response('success')
  response.statusCode = 201

  return response
}
