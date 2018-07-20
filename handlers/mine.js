module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance

  const blockInfo = blockchain.mineNewBlock(request.params.address)

  const message =
    blockInfo === null
      ? 'Nothing to mine'
      : 'Block mined successfully'

  const responseObj = {
    message,
    blockInfo
  }

  const response = h.response(responseObj)
  response.statusCode = 200

  return response
}
