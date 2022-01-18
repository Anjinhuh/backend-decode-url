var http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const decodify = require('./scripts/decoder')
const app = express()
const port = process.env.PORT || 3000
app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) =>{
        res.send('HELLO WORLD')
})
app.post('/enviaTextoDecode', async (req, res) =>{
        decodify.decodeOrCode(req, res, 'decode')
        console.log('OK')
})
app.post('/enviaTextoEncode', async (req, res) =>{
         decodify.decodeOrCode(req, res, 'encode')
})
app.get('/retornaCodigos',  (req, res) =>{
         decodify.decodeOrCode(req, res, 'getCode')

})
 

app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta 3030...")