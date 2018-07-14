module.exports = (request, h) => {
  const blockchain = request.server.app.bcInstance

  const blockInfo = blockchain.mineNewBlock('testMiner') // TODO: change

  const response = h.response({
    message: 'Block mined successfully',
    blockInfo
  })
  response.statusCode = 200

  return response
}
