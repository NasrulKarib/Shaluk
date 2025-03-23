require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const pool = require("../../config/db");
const {v4 : uuidv4} = require("uuid");

const saltRounds = 10;

// //delete all products
const deletetShops = async (req,res) => {
  const addProduct = await pool.query(`
     DELETE FROM shops 
  `)
  .then((product) => {
      res.send({
        success: true,
        message: "Product is added Successfully",
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
//delete all products
const deletetProducts = async (req,res) => {
  const addProduct = await pool.query(`
     DELETE FROM products WHERE LENGTH(product_image)=0 
  `)
  .then((product) => {
      res.send({
        success: true,
        message: "Product is added Successfully",
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
//get all orderes
const getAllOrders = async (req,res) => {
    const products = await pool.query(`
    SELECT o.order_id,o.product_id,o.quantity,o.price,o.order_status,o.user_id,
    pro.product_name,pro.product_description,pro.product_image,product_price,pro.shop_id,
    u.name,u.email,u.role,u.user_image,u.phone_number,u.address,sh.shop_name,sh.shop_type,sh.shop_address,
    sh.shop_number
    FROM orders as o join products as pro ON o.product_id=pro.product_id 
    JOIN users as u ON o.user_id=u.user_id JOIN shops as sh ON sh.shop_id=pro.shop_id
    `)
    .then((orders)=> {
        res.send({
            success: true,
            message: "Successfully fetched all orders",
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

//add product
const addProduct = async (req,res) => {
    const {product_name,product_description,product_price,product_image,shop_id} = req.body;
    console.log(Number(product_price))
    const product_id = uuidv4();
    const addProduct = await pool.query(`
       INSERT INTO products (product_id,product_name,product_description,product_image,product_price,shop_id)
       VALUES ($1,$2,$3,$4,$5,$6)
    `,[product_id,product_name,product_description,product_image,Number(product_price),shop_id])
    .then((product) => {
        res.send({
          success: true,
          message: "Product is added Successfully",
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


const allShops = async (req,res) => {
    const products = await pool.query(`
     SELECT * FROM shops
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

//add product
const addShop = async (req,res) => {
  const {shop_name,shop_type,shop_address,shop_number} = req.body;
  const shop_id = uuidv4();
  const addShop = await pool.query(`
     INSERT INTO shops (shop_id,shop_name,shop_type,shop_address,shop_number)
     VALUES ($1,$2,$3,$4,$5)
  `,[shop_id,shop_name,shop_type,shop_address,shop_number])
  .then((shop) => {
      res.send({
        success: true,
        message: "Shop is added Successfully",
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

//change order status
const changeOrderStatus = async ( req,res) => {
  const {order_id} = req.body;
  console.log(order_id)
  const status = await pool.query(`
  UPDATE orders SET order_status=$1 WHERE order_id=$2
    `,["Delivered",order_id])
    .then((status)=> {
        res.send({
            success: true,
            message: "Successfully updated order status",
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
module.exports = {getAllOrders,addProduct,allShops,changeOrderStatus,addShop,deletetProducts}