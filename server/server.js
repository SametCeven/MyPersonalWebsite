require("dotenv").config()
const express = require('express')
const cors = require("cors")
const authenticateApiKey = require("./services/authenticateApiKey.js")
const profile = require("./data/profile.json")
const skills = require("./data/skills.json")
const projects = require("./data/projects.json")
const workExperience = require("./data/workExperience.json")


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

app.get("/data",authenticateApiKey,(req,res)=>{
    const combinedData = {
        profile,
        skills,
        projects,
        workExperience,
    }
    res.status(200).json(combinedData)
})

app.post("/dataPost",authenticateApiKey,(req,res)=>{
    const {id} = req.body
    res.json({id})
})


