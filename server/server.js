const express = require('express')
const cors = require("cors")
const app = express()
port = 5000

app.use(cors())


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


app.get('/api', (req, res) => {
    //res.json({"users":["user1","user2","user3"]})
    res.status(200).send("Back-end API works")
})