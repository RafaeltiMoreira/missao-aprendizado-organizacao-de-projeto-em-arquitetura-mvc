const service = require('./personagem.service');

async function readAll(req, res) {
  const items = await service.readAll()
  res.send(items)
}

async function readById(req, res) {
  const id = req.params.id

  const item = await service.readById(id)

  if (!item) {
    return res.status(404).send('Item não encontrado.')
  }

  res.send(item)
}

function create(req, res) {
  res.send('Create')
}

function updateById(req, res) {
  res.send('Update By ID')
}

function deleteById(req, res) {
  res.send('Delete By ID')
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}