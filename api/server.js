const express = require('express')

const server = express()

server.use(express.json())

const users = [
    { id: 1, name: "Melana"},
    { id: 2, name: "Bret"}
]

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
    const newUser = req.body
    res.status(201).json(newUser)
})

server.post('/api/login', (req, res) => {
    if(!req.body.name || !req.body.password) {
        res.status(400).json({ message: "Name and Password required"})
    } else {
        res.status(200).json({ message: `Welcome ${req.body.name}`})
    }
})

module.exports = server;