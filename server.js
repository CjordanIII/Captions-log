const express = require('express')
require('dotenv').config()
const connectDb = require('./utils/mongodb')
const Captain = require('./module/logsdb')
const jsxEngine = require("jsx-view-engine");

//*variables
const app = express();
const PORT = 3000;


//* App Config 
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

//*Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())



// testing
app.get("/", (req, res) => {
  res.send("Working");
});

//Routes
//Index
app.get('/captions-log',async(req,res)=>{
    try{
        const getDb = await Captain.find({})
        res.render("Index", { getDb });
    }catch(e){
        console.log(e)
    }
})

// New
app.get('/captions-log/new',(req,res)=>{
    res.render('New')
})
// post (handles incoming form data)
app.post("/captions-log",async (req,res)=>{
    const body = req.body
    if(body.shipIsBroken === 'on'){
        body.shipIsBroken = true
    }else{
        body.shipIsBroken = false;
    }
    const createDb = await Captain.create(req.body)
    res.redirect("/captions-log");
});

//create
app.get('/captions-log/create',(req,res)=>{
    res.render('Show')
})

connectDb()
app.listen(PORT,()=>{console.log(`Listening on port: ${PORT}`)})