const express = require("express");
const productRoute = express.Router();

// Student model
let ProductModel = require("../models/Producto");

//enlistar
productRoute.route("/").get((req, res) => {
  ProductModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

//encontrar a uno especifico
productRoute.route("/search-product/:id").get((req, res) => {
  ProductModel.findById(req.params.id,(error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

//crear productos
productRoute.route("/create-product").post((req, res, next) => {
  ProductModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

productRoute.route("/edit-product/:id").get((req, res) => {
  ProductModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
productRoute.route("/update-product/:id").put((req, res, next) => {
  ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Product successfully updated!");
      }
    }
  );
});

// Delete student
productRoute.route("/delete-product/:id").delete((req, res, next) => {
  ProductModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

/*  ProductModel Update and Read by Id and delete products API's */
// on routes that end in /products/:product_id
// ----------------------------------------------------


  // get the product with that id (accessed at GET http://localhost:8080/api/products/:product_id)
productRoute.route("/detalle/:_id").get(function(req, res) {
    ProductModel.findById(req.params.producto_id, function(err, data) {
      if (err) {
        res.send(err);
      }
      console.log("data", data);
      res.json(data);
    });
   })

module.exports = productRoute;