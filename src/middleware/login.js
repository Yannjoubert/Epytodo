/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** login.js
*/

const db = require('../config/db')
const crypt = require('bcryptjs')

const check_email = module.exports.check_email = function(req, res, next){
    db.connection.query("select * from user where email=?", [req.body['email']], function(err, values){
        if (err) {
            db.mysql_error(res)
        }
        if (values.length > 0) {
            next()
        } else {
            res.type('application/json')
            res.status(401)
            res.send(JSON.stringify({msg: 'Invalid Credentials'}, null, 0))
        }
    })
}

const check_undefined = module.exports.check_undefined = function(req, res, next){
    if (req.body['email'] == undefined || req.body['password'] == undefined) {
        res.type('application/json')
        res.status(404)
        res.send(JSON.stringify({msg: 'error 404 not found'}, null, 0))
    }else
        next()
}

const check_password = module.exports.check_password = function(req, res, next){
    db.connection.query('select * from user where email=?', [req.body['email']], function(err, values){
        if (err)
            db.mysql_error(res)
        crypt.compare(req.body['password'], values[0].password).then(function(rows){
            if (rows == true)
                next()
            else {
                res.type('application/json')
                res.status(401)
                res.send(JSON.stringify({msg: "Invalid Credentials"}, null, 0))
            }
        })
    })
}