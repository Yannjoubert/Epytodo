/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** auth.js
*/

require('dotenv').config()
const rooter = require('express').Router()
const db = require('../../config/db')
const crypt = require('bcryptjs')
const check = require('../../middleware/auth')
const jwt = require('jsonwebtoken')

rooter.post('/', check.check_email, check.check_undefined, (req, res) => {
    crypt.hash(req.body['password'], 10).then(function(hash) {
        db.connection.query('INSERT INTO user(email, password, name, firstname) VALUES(?,?,?,?)', [req.body['email'], hash, req.body['name'], req.body['firstname']], function(err, values) {
            if (err) {
                db.mysql_error(res)
            } else {
                var token = jwt.sign(req.body['email'], process.env.SECRET)
                res.json({"token": token})
            }
        })
    })
})


module.exports = rooter;
