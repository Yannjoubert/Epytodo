/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** db.js
*/

const mysql2 = require('mysql2')
const dotenv = require('dotenv').config()

const connection = module.exports.connection = mysql2.createConnection({
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD
})

connection.connect(function(error){
    if (error) throw error;
    console.log("Connected to db");
})

const mysql_error = module.exports.mysql_error = function(res){
    res.type('application/json'),
    res.status(500),
    res.send(JSON.stringify({msg: "Internal server error"}, null, 0))
}