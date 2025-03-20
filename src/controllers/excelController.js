const excelService = require("../services/excelService")


exports.getAllData = (req,res) => {
    try{
        const excel = excelService.getAllData()

        res.status(200).json(excel)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}


exports.getByFilters = (req,res) => {
    try {
        const excel = excelService.getByFilters(req.body)

        res.status(201).json(excel)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}


exports.getCategoryData = (req,res) => {
    try {
        const excel = excelService.getStaticsByCategory(req.query)

        res.status(200).json(excel)
    } 
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.getTendencia = (req,res) => {
    try{
        const excel = excelService.getTendencia(req.query)

        res.status(200).json(excel)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}