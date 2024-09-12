const mongoose = require("mongoose")

const task = mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enums:["pending","completed"],
        default:"pending"
    }
},{ timestamps: true })

module.exports = mongoose.model("task",task)