const mongoose = require('mongoose')

const captain = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:1,
        maxLength:10000,
    },
    entry:{
        type:String,
        required:true,
        minLength:1,
        maxLength:100000,
    },
    shipIsBroken: Boolean

})

const Captain = mongoose.model('captain',captain)

module.exports = Captain