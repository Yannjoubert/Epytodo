/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** user.js
*/

const db = require('../../config/db')
const rooter = require('express').Router()
const check = require('../../middleware/notFound')
const check_token = require('../../middleware/token')

rooter.delete('/:id', check.check_id, check_token.check_token, (req, res) => {
    var id = req.params['id']
    db.connection.query('delete from user where id=?', [id], function(err, values) {
        if (err)
            db.mysql_error(res)
    })
    res.type('application/json')
    res.status(200)
    res.send(JSON.stringify({msg: `succesfully deleted record number: ${id}`}, null, 0))
})

rooter.get('/', check_token.check_token, (req, res) => {
    db.connection.query('select * from user', function(err, values) {
        if (err)
            db.mysql_error(err)
        else
            res.json(values)
    })
})

module.exports = rooter;