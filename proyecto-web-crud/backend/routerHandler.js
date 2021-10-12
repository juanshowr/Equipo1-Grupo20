const productRoutes = require("./Product/routes");
const cartRoutes = require('./routes/')
module.exports = app => {
    app.use("/product", productRoutes);
}