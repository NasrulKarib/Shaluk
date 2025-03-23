const adminrouter = require("express").Router();
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { getAllOrders, addProduct, allShops, changeOrderStatus, addShop } = require("../../controllers/admin_controllers/admincontroller");
const { isAdmin } = require("../../controllers/auth_controllers/authcontroller");
  
adminrouter.use(passport.initialize());
// get all orders
adminrouter.get("/get-all-orders",isAdmin,getAllOrders);
adminrouter.post("/add-product",isAdmin,addProduct);
adminrouter.get("/all-shops",allShops);
adminrouter.post("/add-shop",isAdmin, addShop);
// adminrouter.get("/delete-shops",deletetShops);
// adminrouter.get("/delete-products",deletetProducts);
//place order
adminrouter.put("/change-order-status",isAdmin,changeOrderStatus);

module.exports = adminrouter;