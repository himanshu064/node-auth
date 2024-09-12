const express = require("express")
const router = express.Router()
let { addTaskValidation, validateResult } = require("../data-validation/validatiion")
let TaskController = require("../controller/task")


router.post("/task",addTaskValidation,validateResult,TaskController.addTask)
router.put("/task",TaskController.updateTask)
router.get("/task",TaskController.getTaskList)



module.exports = router




