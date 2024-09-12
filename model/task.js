const mongoose = require("mongoose")

const task = mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
},{ timestamps: true })

module.exports = mongoose.model("task",task)