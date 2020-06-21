const Response = require('../util/response_manager');
const HttpStatus = require('../util/http_status');
const express = require('express');
const db = require("../models");
const Search = db.user;



exports.findOne = (req, res) => {
    const id = req.query.id;
    //var condition = title ? { title: {$regex: new RegExp(title), options: "i"}} : {};

    Search.findById(condition)
        .then(data => {
            if(!data)
             res.status(404).send({ message: "Not found customer with id " + id});
            else res.send(data);
            })
        .catch(err => {
            res.status(500).send({
                message:
                "Some error occurred while retrieving Customer with id= " + id
            });
        });

}
