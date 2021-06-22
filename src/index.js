/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** index.js
*/

const bodyParser = require('body-parser')
const express = require('express')
const db = require('./config/db')
const mini_express = express()
const body = require("body-parser")
const port = 3000

function main(){
    db.connection.connect(function(err){
        if (err) {
            console.log(err)
            return
        }
    })
    mini_express.use(express.json())
    mini_express.use(body.json())
    mini_express.use(body.urlencoded({extended: true}))
    mini_express.use('/register', require('./routes/auth/auth'))
    mini_express.use('/login', require('./routes/auth/login'))
    mini_express.use('/user', require('./routes/user/user'))
    mini_express.use('/todos', require('./routes/todos/todos'))
    mini_express.listen(port, function(){
        console.log('server launch')
    })
}

main()