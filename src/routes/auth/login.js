/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** login.js
*/

const db = require('../../config/db')
const decrypt = require('bcryptjs')
const rooter = require('express').Router()
const check_mail = require('../../middleware/login')
const check_t = require('../../middleware/token')
const jwt = require('jsonwebtoken')

rooter.post('/', check_mail.check_email, check_mail.check_undefined, check_mail.check_password, (req, res) => {
    var token = jwt.sign(req.body['email'], process.env.SECRET)
    res.type('application/json')
    res.status(200)
    res.send(JSON.stringify({token: token}))
})

module.exports = rooter;