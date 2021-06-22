/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** todos.js
*/

const db = require('../../config/db')
const rooter = require('express').Router()
const check = require('../../middleware/notFound')
const check_token = require('../../middleware/token')

rooter.get('/', check_token.check_token, (req, res) => {
    db.connection.query('select * from todo', function(err, values) {
        if (err)
            db.mysql_error(err)
        else
            res.json(values)
    })
})

module.exports = rooter;