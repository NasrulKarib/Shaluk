const userrouter = require("express").Router();
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { getAllProducts, individualProduct, medicineProducts, foodProducts, orderByAParticularCustomer,
     specificShopProducts, 
     placeOrder,
     allFoodShops,
     allMedicineShops,
     userProfile,
     updateUserProfile} = require("../../controllers/user_controllers/usercontroller");
const { isCustomer } = require("../../controllers/auth_controllers/authcontroller");
  
userrouter.use(passport.initialize());
userrouter.post("/user-profile",userProfile);
userrouter.put("/update-profile",isCustomer,updateUserProfile);
userrouter.get("/get-all-products",getAllProducts);
userrouter.get("/all-food-shops",allFoodShops);
userrouter.get("/all-medicine-shops",allMedicineShops);
userrouter.post("/individual-product",individualProduct);
userrouter.post("/products-by-a-specific-shop",specificShopProducts)
userrouter.get("/medicine-products",medicineProducts);
userrouter.get("/food-products",foodProducts);
userrouter.post("/place-order",isCustomer,placeOrder);
userrouter.post("/order-by-a-particular-user",isCustomer,orderByAParticularCustomer);


module.exports = userrouter;