// import { Planilha } from "../models/Data"
const excelController = require("../controllers/excelController")

const express = require("express")


const router = express.Router()

router.get("/", excelController.getAllData)
router.post("/filters", excelController.getByFilters)



module.exports = router