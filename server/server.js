require("dotenv").config()
const express = require('express')
const cors = require("cors")
const projectData = require("./data/projectData.json")
const authenticateApiKey = require("./services/authenticateApiKey.js")


const app = express()
port = 5000

app.use(cors())
app.use(express.json())


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


app.get('/api', (req, res) => {
    res.status(200).send("Back-end API works")
})

app.get("/project",authenticateApiKey,(req,res)=>{
    res.status(200).json(projectData)
})

app.post("/projectP",authenticateApiKey,(req,res)=>{
    const {id} = req.body
    res.json({id})
})


