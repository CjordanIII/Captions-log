const mongoose = require('mongoose')

module.exports = function connectDB(){
    mongoose.connect(process.env.CAPTAIN_URI);
    const db = mongoose.connection
    db.on('error',(e)=>{console.log(e)})
    db.on('open',()=>{console.log("Connected to MongoDB")})
    db.on('close',()=>{console.log("MongoDb Disconnected !!!!")})
}