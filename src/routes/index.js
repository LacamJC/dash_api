// import { Planilha } from "../models/Data"
const excelController = require("../controllers/excelController")

const express = require("express")


const router = express.Router()

router.get("/", excelController.getAllData)
router.post("/filters", excelController.getByFilters)
router.get("/categorias", excelController.getCategoryData)
router.get("/tendencias", excelController.getTendencia)



module.exports = router