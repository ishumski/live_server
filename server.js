const express = require('express')
const app = express()
const server = require('http').createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

const {v4: uuidV4} = require('uuid')

require('dotenv').config()

const PORT = process.env.PORT || 5001

app.get('/', (req, res)=>{
    res.redirect(`/${uuidV4()}`)
    res.send({roomId: req});
})

app.get('/:room', (req, res)=>{
    res.render('room',()=>{
        res.send({roomId: req})
    })
})



server.listen(PORT, ()=> console.log(`Server started at PORT ${PORT}`))



