require('dotenv').config()

var express=require("express")
var bodyParser=require('body-parser')
var cors=require('cors');
var app=express();
app.use(bodyParser.json())
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rubi@123',
    database: 'CASIONOUSERS'
  })
  connection.connect()







app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

app.use(express.json())
app.use(express.static("public"))
const stripe =require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const storeItems=new Map([

    [1,{priceInCents:10000,name:"learn React"}]

])
app.post("/create-checkout-session",(req,res)=>{
    console.log(req.body);
   let createTodos=`create table todo(id int primary key auto_increment,
                                    title varchar(255) not null)`;
    connection.query(createTodos,function(err, results,fields){
        if(err){
            console.log(err.message)
        }
    });

});
app.post("/lockmoney",(req,res)=>{
    res.send('oik');

    coin=req.body.coin;
    amount=req.body.amount;
    username=req.body.username;
    group=req.body.group;
  
     let lockmoney='create table lockmoney(id int primary key auto_increment,username varchar(255) not null,cgroup varchar(255) not null,amount varchar(255) not null,coin varchar(255) not null)';
     connection.query(lockmoney, function(err,result,field){
         if(err){
             if(err.errno==1050)
             {
              connection.query(`insert into  lockmoney(username,cgroup,amount,coin) VALUES("${username}","${group}","${amount}","${coin}")`);     
             }
             else{
                 console.log(err);
             } 
         }
        })   
});

app.get("/winner",(req,res)=>{

    connection.query('select * from lockmoney ORDER BY RAND()',function(err,results,fields){
        if(err) throw err;
        res.send(results);
        });

})




app.listen(3000)