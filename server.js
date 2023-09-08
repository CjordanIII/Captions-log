const express = require('express')
require('dotenv').config()
const connectDb = require('./utils/mongodb')
const Captain = require('./module/logsdb')
const jsxEngine = require("jsx-view-engine");
const methodOverride = require('method-override')

//*variables
const app = express();
const PORT = 3000;


//* App Config 
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

//*Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride('_method'))


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
app.get('/captions-log/create/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const log = await Captain.findById(id);
        res.render("Show", { log });
    }catch(e){
        console.log(e)
    }
})

//Delete
app.delete("/captions-log/create/:id",async(req,res)=>{
    const {id} = req.params
    try{
    const deletedLog = await Captain.findByIdAndDelete(id);
    res.redirect('/captions-log');
    }catch(e){
        console.log(e)
    }
});

//Edit
app.get("/captions-log/edit/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const findLog = await Captain.findById(id)
        res.render("Edit",{findLog});
    }catch(e){
        console.log(e)
    }
    
});


app.put("/captions-log/edit/:id",async(req,res)=>{
    const {id} =req.params
      if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      }
    try{
        const updateLog = await Captain.findByIdAndUpdate(id,req.body,{new:true})
        res.redirect(`/captions-log`);// change
    }catch(e){
        console.log(e)
    }
});
//TODO put controllers in controllers folder
connectDb()
app.listen(PORT,()=>{console.log(`Listening on port: ${PORT}`)})