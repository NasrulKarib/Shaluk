require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const pool = require("../../config/db");
const {v4 : uuidv4} = require("uuid");

const saltRounds = 10;

//user profile
const userProfile = async (req,res) => {
  const {user_id} = req.body;
  const details = await pool.query(`
   SELECT * FROM users WHERE user_id=$1
  `,[user_id])
  .then((profile)=> {
      res.send({
          success: true,
          message: "Successfully fetched all orders",
          user : profile.rows
        });
  })
  .catch((error) => {
      res.send({
        success: false,
        message: "Something went wrong!!",
        error: error,
      });
    });
}

//update user profile
const updateUserProfile = async ( req,res) => {
  const {user_id,name,address,phone_number} = req.body;
  const status = await pool.query(`
  UPDATE users SET name=$1, address=$2, phone_number=$3 WHERE user_id=$4
    `,[name,address,phone_number,user_id])
    .then((status)=> {
        res.send({
            success: true,
            message: "Successfully updated user profile",
          });
    })
    .catch((error) => {
        res.send({
          success: false,
          message: "Something went wrong!!",
          error: error,
        });
      });

}

//all food shops
const allFoodShops = async (req,res) => {
  const products = await pool.query(`
   SELECT * FROM shops WHERE shop_type='Food'
  `)
  .then((shops)=> {
      res.send({
          success: true,
          message: "Successfully fetched all orders",
          shops : shops.rows
        });
  })
  .catch((error) => {
      res.send({
        success: false,
        message: "Something went wrong!!",
        error: error,
      });
    });
}

//all medicine shops
const allMedicineShops = async (req,res) => {
  const products = await pool.query(`
   SELECT * FROM shops WHERE shop_type='Medicine'
  `)
  .then((shops)=> {
      res.send({
          success: true,
          message: "Successfully fetched all orders",
          shops : shops.rows
        });
  })
  .catch((error) => {
      res.send({
        success: false,
        message: "Something went wrong!!",
        error: error,
      });
    });
}
//getAllProducts
const getAllProducts = async (req,res) => {
    const products = await pool.query(`
    SELECT  product_id,product_name,product_description,product_image,product_price,pro.shop_id,sh.shop_name,
    sh.shop_type,sh.shop_address
    FROM products as pro JOIN shops as sh ON pro.shop_id=sh.shop_id
    `)
    .then((products)=> {
        res.send({
            success: true,
            message: "Successfully fetched all products",
            products : products.rows
          });
    })
    .catch((error) => {
        res.send({
          success: false,
          message: "Something went wrong!!",
          error: error,
        });
      });
}

//getAllProducts under a specific shop
const specificShopProducts = async (req,res) => {
  const {shop_name} = req.body
  const products = await pool.query(`
  SELECT  product_id,product_name,product_description,product_image,product_price,pro.shop_id,sh.shop_name,
  sh.shop_type,sh.shop_address
  FROM products as pro JOIN shops as sh ON pro.shop_id=sh.shop_id
  WHERE sh.shop_name=$1
  `,[shop_name])
  .then((products)=> {
      res.send({
          success: true,
          message: "Successfully fetched user details",
          products : products.rows
        });
  })
  .catch((error) => {
      res.send({
        success: false,
        message: "Something went wrong!!",
        error: error,
      });
    });
}

//individualProduct
const individualProduct = async (req,res) => {
    const {product_id} = req.body;
    const products = await pool.query(`
    SELECT  product_id,product_name,product_description,product_image,product_price,pro.shop_id,sh.shop_name,
    sh.shop_type,sh.shop_address
    FROM products as pro JOIN shops as sh ON pro.shop_id=sh.shop_id WHERE pro.product_id=$1 
    `,[product_id])
    .then((product)=> {
        res.send({
            success: true,
            message: "Successfully fetched",
            product : product.rows
          });
    })
    .catch((error) => {
        res.send({
          success: false,
          message: "Something went wrong!!",
          error: error,
        });
      });
}

//medicine products
const medicineProducts = async (req,res) => {
    const products = await pool.query(`
    SELECT  product_id,product_name,product_description,product_image,product_price,pro.shop_id,
    sh.shop_name,sh.shop_type,sh.shop_address
    FROM products as pro JOIN shops as sh ON pro.shop_id=sh.shop_id WHERE sh.shop_type=$1 
    `,["Medicine"])
    .then((product)=> {
        res.send({
            success: true,
            message: "Successfully fetched medicine product",
            products : product.rows
          });
    })
    .catch((error) => {
        res.send({
          success: false,
          message: "Something went wrong!!",
          error: error,
        });
      });
}

//food products
const foodProducts = async (req,res) => {
    const products = await pool.query(`
    SELECT  product_id,product_name,product_description,product_image,product_price,pro.shop_id,sh.shop_name,sh.shop_type,
    sh.shop_address
    FROM products as pro JOIN shops as sh ON pro.shop_id=sh.shop_id WHERE sh.shop_type=$1 
    `,["Food"])
    .then((product)=> {
        res.send({
            success: true,
            message: "Successfully fetched food product",
            products : product.rows
          });
    })
    .catch((error) => {
        res.send({
          success: false,
          message: "Something went wrong!!",
          error: error,
        });
      });
}

//place order
const placeOrder = async (req,res) => {
  const {product_id,quantity,price,user_id} = req.body;
  const order_id = uuidv4();
  const order = await pool.query(`
     INSERT INTO orders (order_id,product_id,quantity,price,order_status,user_id)
     VALUES ($1,$2,$3,$4,$5,$6)
  `,[order_id,product_id,quantity,price*quantity,"Pending",user_id])
  .then((order) => {
      res.send({
        success: true,
        message: "Order is placed Successfully",
      });
    })
    .catch((error) => {
      res.send({
        success: false,
        message: "Something wrong",
        error: error,
      });
    });
}
//ordered products by a particular customer
const orderByAParticularCustomer = async (req,res) => {
    const {user_id} = req.body;
    const products = await pool.query(`
    SELECT o.order_id,o.product_id,o.quantity,o.price,o.order_status,o.user_id,
    pro.product_name,pro.product_description,pro.product_image,pro.product_price,pro.shop_id,
    u.name,u.email,u.role,u.user_image,u.phone_number,u.address,sh.shop_name,sh.shop_type,sh.shop_address
    FROM orders as o join products as pro ON o.product_id=pro.product_id 
    JOIN users as u ON o.user_id=u.user_id JOIN shops as sh ON sh.shop_id=pro.shop_id
    WHERE u.user_id=$1
    `,[user_id])
    .then((orders)=> {
        res.send({
            success: true,
            message: "Successfully fetched orders",
            orders : orders.rows
          });
    })
    .catch((error) => {
        res.send({
          success: false,
          message: "Something went wrong!!",
          error: error,
        });
      });
}


module.exports = {allMedicineShops,allFoodShops,getAllProducts,individualProduct,medicineProducts,foodProducts,specificShopProducts,
  orderByAParticularCustomer,placeOrder,userProfile,updateUserProfile}