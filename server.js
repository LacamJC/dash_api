require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./src/routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))
app.use("/dashboard", routes)

app.get("/", (req,res) => {
    res.status(200).json({message:"Entre em contato com @LacamJC para mais informações"})
})


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(
    `
    //////////////////
    
    Servidor aberto na porta: ${PORT}

    //////////////////
    `)
})