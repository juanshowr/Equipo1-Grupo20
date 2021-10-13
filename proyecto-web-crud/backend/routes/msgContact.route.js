const express = require("express");
const MsgContactRoute = express.Router();

// mscContact model
let MsgContactModel = require("../models/Mensaje");

//enlistar
MsgContactRoute.route("/").get((req, res) => {
    MsgContactModel.find((error, data, next) => {
      if (error) {
        return next(error);
      } else {
        console.log(error);
        res.json(data);
      }
    });
  });

  //encontrar a uno especifico
  MsgContactRoute.route("/search-msg/:id").get((req, res) => {
    MsgContactModel.findById(req.params.id,(error, data, next) => {
      if (error) {
        return next(error);
      } else {
        console.log(error);
        res.json(data);
      }
    });
});

  //crear productos
  MsgContactRoute.route("/create-msg").post((req, res, next) => {
    MsgContactModel.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  // Delete user
  MsgContactRoute.route("/delete-msg/:id").delete((req, res, next) => {
    MsgContactModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });

  module.exports = MsgContactRoute;