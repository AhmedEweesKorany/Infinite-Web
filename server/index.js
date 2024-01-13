const exprees = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = exprees()
app.use(cors())
app.use(exprees.json())
app.use(exprees.urlencoded({extended:true}))

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"infiniteWeb"
})

app.get("/",(req,res)=>{
    const cate = req.query.cate
    let query;
    if(cate == "NewSeazon"){
         query = `SELECT * FROM Products WHERE isNew = 1 `
    }else{

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

app.post("/adduser",(req,res)=>{
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
app.listen(3000,()=>{
    console.log("app is runng now in port http://localhost:3000")
})