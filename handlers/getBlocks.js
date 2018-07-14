module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance

  const blocks = blockchain.get()

  const response = h.response({
    blocks
  })
  response.statusCode = 200

  return response
}
