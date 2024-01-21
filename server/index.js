const exprees = require("express")
const mysql = require("mysql2")

const cors = require("cors")


const bcrypt = require('bcrypt')
const salt = 10;


const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken');
const { connect } = require("react-redux");
const app = exprees()
const port = process.env.PORT || 3000
//access .env file
require("dotenv").config()

app.use(cors(
    {
        origin:["http://localhost:5173"],
        methods:["POST","GET"],
        credentials:true
    }
))
app.use(exprees.json())
app.use(exprees.urlencoded({extended:true}))
app.use(cookieParser())

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"infiniteWeb"
})

  // Restful APIs (get only for now )
app.get("/",(req,res)=>{
    const cate = req.query.cate
  
    let query;
    if(cate == "NewSeazon"){
         query = `SELECT * FROM Products WHERE isNew = 1 `
    }else if(!cate){
        query = `SELECT * FROM Products  `
    }
        else{

        query = `SELECT * FROM Products WHERE Category = '${cate}' `
    }
    connection.execute(query,(err,data)=>{
        if(err){
            console.log("errorrrrrrrr happped",err)
        }else{
            res.send(data)
        }
    })
})
app.get("/product/:id",(req,res)=>{ 
    const id = +req.params.id
    const query = `SELECT * FROM Products WHERE Product_Id = ${id}`
    connection.execute(query,(err,data)=>{
        if(err) return res.json({Error:"Error happend on query"})
        return res.send(data)
    })
})

// popular product

app.get("/popular",(req,res)=>{
    const query = "SELECT * FROM Products ORDER BY rate DESC LIMIT 5"
    connection.execute(query,(err,data)=>{
        if(err) return res.json({Error:"error happend in sql server"})

        return res.send(data)
    })
})

// adding new product (allowed for those who have admin role only)
app.post("/addItem",(req,res)=>{
    const {name,des,img1,img2,isNew,rate,category,discount,oldPrice} = req.body
    const addquery = "INSERT INTO `Products`( `Product_Name`, `Product_Description`, `Product_Price`, `Product_img1`, `Product_img2`, `isNew`, `rate`,`category`,`discount`,`oldPrice`) VALUES (?,?,?,?,?,?,?,?,?,?)"
    connection.execute(addquery,[name,des,oldPrice-(oldPrice*discount),img1,img2,isNew,rate,category,discount,oldPrice],(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.send("item added successfully")
        }
    })
})

// Registretion code
app.post("/adduser",(req,res)=>{
    const {username,email,birthday,password} = req.body
    const addquery = "INSERT INTO `users`( `username`, `email`, `password`, `birthday`) VALUES (?,?,?,?)"

    bcrypt.hash(password.toString(),salt,(err,hash)=>{
        if(err) return res.json({Error:"error happend on hashing password"})

        // check if user exist or not 
        const sql = 'SELECT * FROM `users` WHERE email = ?'

        connection.execute(sql,[email],(err,data)=>{
            if(err) return res.json({Error:"error happedn on restration server "})
    
            if(data.length == 1){
                res.json({Error:"user already exist"})
            }else{
                connection.execute(addquery,[username,email,hash,birthday],(err,data)=>{
                    if(err){
                        res.json({Error :"error happend while executing addquery"})
                    }else{
                        res.send(true)
                    }
                })
            }
            
      
        })

    })


    
})

// login code 
 let loginEmail = "";
 module.exports = loginEmail
app.post("/login",(req,res)=>{
    const {email,password} = req.body
    loginEmail = email;
    const sql = 'SELECT * FROM `users` WHERE email = ?'

    connection.execute(sql,[email],(err,data)=>{
        if(err) return res.json({Error:"error happedn on login server"})

        //check if passwords are the same 
        if(data.length == 1){
            bcrypt.compare(password.toString(),data[0].password,(err,same)=>{
                if(err) return res.json({Error:"error happend on server"})
                if(same){
                    const name = data[0].name;
                    const token = jwt.sign({name},process.env.JWT_SECRET_KEY,{expiresIn:"1d"}) 
                    res.cookie("token",token)
                    return res.send(true)
                }else{
                    res.json({Error:"invalid password ya m3lm"})
                }
            })

        }
        
        
        else if(data.length == 0){
            res.json({Error:"User not Found"})
        }else{
            res.json({Error:"Server Error "})
        }
    })

})

// getting user data after login
const verifyUser = (req, res, next) => {
    const token = req.cookies && req.cookies.token;

    if (!token) {
        req.isAuthenticated = false;
        return res.status(401).json({ error: "You are not authenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error('JWT Verification Error:', err);
            req.isAuthenticated = false;
            return res.status(401).json({ error: "Invalid token" });
        }


        else {
            req.name = decoded.name;
            req.isAuthenticated = true;
            next();
        }
    });
};

// get user info if logged in
app.get("/userCard", verifyUser, (req, res) => {    
    const sql = 'SELECT * FROM `users` WHERE email = ?'

    connection.execute(sql,[loginEmail],(err,data)=>{
        if(err) return res.json({Error:"error while executing query"})
        return res.json({
                authenticated: req.isAuthenticated,
                name: data[0].username,
                email: data[0].email,
                birth: data[0].birthday
            });
        })
    
});

//logout function

app.get("/logout",(req,res)=>{
    res.clearCookie("token")

    return res.json({status:true})
})

// init server
app.listen(3000,()=>{
    console.log("app is runng now in port http://localhost:3000")
})