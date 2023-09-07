const express = require('express')



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

//Rout
app.get('/captions-log',(req,res)=>{
    res.send('homepange')
})

// New
app.get('/captions-log/new',(req,res)=>{
    res.render('New')
})


//



app.listen(PORT,()=>{console.log(`Listening on port: ${PORT}`)})