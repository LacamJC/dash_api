require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./src/routes')
const app = express()


const chave = process.env.API_KEY

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))
app.use("/dashboard", authenticReq, routes)

app.get("/", authenticReq, (req, res) => {
    res.status(200).json({ message: "Entre em contato com @LacamJC para mais informações" })
})


function authenticReq(req, res, next) {
    const api_req = req.headers['token']

    if (!api_req || api_req !== chave) {
        return res.status(401).json({ message: "Acesso não autorizado" })
    }

    next()
}


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(
        `
    //////////////////
    
    Servidor aberto na porta: ${PORT}

    //////////////////
    `)
})