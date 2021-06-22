/*
** EPITECH PROJECT, 2020
** B-WEB-200-RUN-2-1-epytodo-yann.joubert
** File description:
** token.js
*/

const jwt = require('jsonwebtoken')

const check_token = module.exports.check_token = function(req, res, next) {
    var token = req.headers.authorization
    if (token != null && token !== "") {
        var token_verify = jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) {
                res.status(401)
                res.json({"msg": "Token is not valid"})
            } else
                next()
        })
    } else {
        res.type('application/json')
        res.status(401)
        res.send(JSON.stringify({msg: "No token, authorization denied"}))
    }
}