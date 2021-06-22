/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** auth.js
*/

const db = require('../config/db')

const check_email = module.exports.check_email = function(req, res, next){
    db.connection.query("select * from user where email=?", [req.body['email']], function(err, values){
        if (err)
            db.mysql_error(res)
        if (values.length > 0) {
            res.type('application/json')
            res.status(400)
            res.send(JSON.stringify({msg: 'account already exists'}, null, 0))
        } else
            next()
    })
}

const check_undefined = module.exports.check_undefined = function(req, res, next){
    if (req.body['email'] == undefined || req.body['name'] == undefined || req.body['firstname'] == undefined || req.body['password'] == undefined) {
        res.type('application/json')
        res.status(404)
        res.send(JSON.stringify({msg: 'error 404 not found'}, null, 0))
    } else
        next()
}