/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** notFound.js
*/

const db = require('../config/db')

const check_id = module.exports.check_id = function(req, res, next){
    db.connection.query('select * from user where id=?', [req.params['id']], function(err, values){
        if (err)
            db.mysql_error(res)
        if (values.length > 0)
            next()
        else {
            res.type('application/json')
            res.status(404)
            res.send(JSON.stringify({msg: 'Not found'}, null, 0))
        }
    })
}