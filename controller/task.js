const { json } = require("express")
const Task =  require("../model/task")

exports.addTask = async(req,res)=>{
    let {name,description} = req.body
    let redisClient = req.redisClient
    try{
let task = new Task({
    name,
    description
})
await task.save()
await redisClient.del('tasks_all');
res.status(200).send({
    status:"success",
    statusCode:200,
    message:"task added successfully",
    data:[]
})
    }
    catch(err){
        console.log(err);
        res.status(400).send({
            status:"failed",
            statusCode:400,
            message:err.message,
            data:[]
        })
    }
}

exports.getTaskList = async(req,res)=>{
    let {id} = req.query
    let redisClient = req.redisClient
    try{
        let query = {}
        console.log({id});
        
        const cacheKey = !id ? 'tasks_all' : id;
        console.log({cacheKey});
        const cachedTasks = await redisClient.get(cacheKey)
        if(cachedTasks){
            return res.status(200).send({
                status:"success",
                statusCode:200,
                message:"tasks data found successfully",
                data:JSON.parse(cachedTasks)
            })
        }
        if(id){
            query._id=id
        }
        const tasks = await Task.find(query)
        console.log({tasks});
        await redisClient.setEx(cacheKey,40,JSON.stringify(tasks))
        res.status(200).send({
            status:"success",
            statusCode:200,
            message:"tasks data found successfully",
            data:tasks
        })
    }
    catch(err){
        console.log(err);
        res.status(400).send({
            status:"failed",
            statusCode:400,
            message:err.message,
            data:[]
        })
    }
}

exports.updateTask = async(req,res)=>{
    let {id,name,description} = req.query
    let redisClient = req.redisClient
    try{
await redisClient.del(id)
let task = await Task.findOneAndUpdate({_id:id},{name,description})

    }
    catch(err){
        console.log(err);
        res.status(400).send({
            status:"failed",
            statusCode:400,
            message:err.message,
            data:[]
        })
    }
}