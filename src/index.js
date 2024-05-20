const express = require('express');
const { connectToDatabase } = require('./db/database-connection');
//import { MongoClient, ObjectId } from 'mongodb';

async function main() {
    await connectToDatabase()
    // const collection = db.collection('personagem')

    const app = express()
    app.use(express.json())

    app.get('/', function (req, res) {
        res.send('Hello World!')
    })

    /*
    app.get('/personagem', async function (req, res) {
        const itens = await collection.find().toArray()
        res.send(itens)
    })

    app.get('/personagem/:id', async function (req, res) {
        const id = req.params.id
        const item = await collection.findOne({ _id: new ObjectId(id) })

        if (!item) {
            return res.status(404).send('Item não encontrado.')
        }

        res.send(item)
    })

    app.post('/personagem', async function (req, res) {
        const novoItem = req.body

        if (!novoItem || !novoItem.nome) {
            return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
        }

        // if (lista.includes(novoItem)) {
        //     return res.status(409).send('Esse item `' + novoItem + '` já existe na lista.')
        // }

        await collection.insertOne(novoItem)
        res.send(novoItem)
    })

    app.put('/personagem/:id', async function (req, res) {
        const id = req.params.id

        // if (!lista[id - 1]) {
        //     return res.status(404).send('Item não encontrado.')
        // }

        const novoItem = req.body


        if (!novoItem || !novoItem.nome) {
            return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
        }

        // if (lista.includes(novoItem)) {
        //     return res.status(409).send('Esse item `' + novoItem + '` já existe na lista.')
        // }

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: novoItem }
        )
        res.send(novoItem)
    })

    app.delete('/personagem/:id', async function (req, res) {
        const id = req.params.id

        // if (!lista[id - 1]) {
        //     return res.status(404).send('Item não encontrado.')
        // }

        await collection.deleteOne({ _id: new ObjectId(id) })
        res.send('Item removido com sucesso: ' + id)
    })
    */

    app.listen(3000, function () {
        console.log('Servidor rodando em http://localhost:3000')
    })
}

main();