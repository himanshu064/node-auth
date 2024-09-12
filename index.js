require("dotenv").config()
const db  = require("./db")
const redis = require('redis')
const express = require("express")
const app = express()
const routes = require("./routes/router")

const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
  })
redisClient.connect()
app.use(express.json())
app.use(express.urlencoded())
app.use( (req, res, next) => {
    // redisClient.flushAll().then(()=>{
    //     console.log("all data delete"); 
    // }).catch(()=>{
    //     console.log("no data delete");
        
    // })
    req.redisClient = redisClient
    next()
  })
app.use("/api",routes)


app.listen(process.env.PORT,()=>{
    console.log(`server start on port ${process.env.PORT} `);
})