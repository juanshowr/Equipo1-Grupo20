const express = require("express");
const userRoute = express.Router();

// user model
let userModel = require("../models/Usuario");


//enlistar
userRoute.route("/").get((req, res) => {
    userModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

//encontrar a uno especifico
userRoute.route("/search-user/:id").get((req, res) => {
    userModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

//crear usuario
userRoute.route("/create-user").post((req, res, next) => {
    userModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// Update user
userRoute.route("/update-user/:id").put((req, res, next) => {
    userModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                console.log("User successfully updated!");
                res.json(data);
            }
        }
    );
});

// Delete user
userRoute.route("/delete-user/:id").delete((req, res, next) => {
    userModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = userRoute;

