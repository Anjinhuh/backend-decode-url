var http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const decodify = require('./scripts/decoder')
const app = express()

app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/enviaTextoDecode', (req, res) =>{
    
        decodify.decodeOrCode(req, res, 'decode')
        
})
app.post('/enviaTextoEncode', (req, res) =>{
        decodify.decodeOrCode(req, res, 'encode')
})
app.get('/retornaCodigos', (req, res) =>{
        decodify.decodeOrCode(req, res, 'getCode')

})
 
var server = http.createServer(app); 
server.listen(3001);
console.log("Servidor escutando na porta 3030...")