require("dotenv").config()
const db  = require("./db")
const redis = require('redis')
const express = require("express")
const app = express()
const routes = require("./routes/router")
const cors = require('cors');
const port = process.env.PORT || 2000
const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
  })
redisClient.connect()
app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
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


app.listen(port,()=>{
    console.log(`server start on port ${port} `);
})