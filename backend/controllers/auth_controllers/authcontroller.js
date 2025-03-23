
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const pool = require("../../config/db");
const {v4 : uuidv4} = require("uuid");

const saltRounds = 10;

const registerUser = async (req,res) => {
    try {
        const {email,password,phone_number,name,role,address,user_image} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email=$1",[email]);
        if (user.rowCount===1) {
          return res.status(201).send({
            message : "This Email was Already Used"
          });
        }
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
          
           const user_id = uuidv4();
           let access,status;
           if(role==="customer") {
            access = "customer"
           } else {
            access = "admin"
           }
          const create_user = await pool.query(`INSERT into users 
          (user_id,email,password,role,phone_number,name,address) 
          VALUES ($1,$2,$3,$4,$5,$6,$7)`,
          [user_id,email,hash,access,phone_number,name,address])
            .then((user) => {
              res.send({
                success: true,
                message: "User is created Successfully",
                user : {
                  user_id,
                  email
                }
              });
            })
            .catch((error) => {
              res.send({
                success: false,
                message: "User is not created",
                error: error,
              });
            });
         });


      } catch (error) {
        res.status(500).send(error.message);
      }
}

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email=$1",[email]);
    if(user.rowCount===0) {
      return res.status(201).send({
        success : false,
        message : "User is not found"
      })
    }
    if (!bcrypt.compareSync(password, user.rows[0]?.password)) {
      return res.status(201).send({
        success: false,
        message: "Incorrect password",
      });
    }
  
    const payload = {
      id: user.rows[0].user_id,
      name: user.rows[0].name,
      role : user.rows[0].role
    };
  
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
  
  
      return res.status(200).send({
        success: true,
        userinfo:{
          name:user.rows[0].name,
          user_id:user.rows[0].user_id,
          role : user.rows[0].role
        },
        message: "User is logged in successfully",
        token: "Bearer " + token,
      });  
  }
  

//check admin middleware
const isAdmin = (req,resp,next) => {

  let token = req.headers['authorization'];
  if(token) {
    token = token.split(' ')[1];
    jwt.verify(token,process.env.SECRET_KEY,(err,valid)=> {
      if(err) {
        resp.send({result : "please provide valid token"});
      } else {
          let decode;
          decode = jwt.decode(token);
          req.info = decode;    
           if(decode.role==='admin') { 
              next();
           } else {
                resp.send({
                  message : "admin not verified"
                })
           }
      }
    })

  } else {
    resp.send({result : "please add token with header"});
  }
}

//check customer middleware
const isCustomer = (req,resp,next) => {

    let token = req.headers['authorization'];
    if(token) {
      token = token.split(' ')[1];
      jwt.verify(token,process.env.SECRET_KEY,(err,valid)=> {
        if(err) {
          resp.send({result : "please provide valid token"});
        } else {
            let decode;
            decode = jwt.decode(token);
            req.info = decode;    
             if(decode.role==='customer') { 
                next();
             } else {
                  resp.send({
                    message : "admin not verified"
                  })
             }
        }
      })
  
    } else {
      resp.send({result : "please add token with header"});
    }
  }


module.exports = {registerUser,loginUser,isAdmin,isCustomer}