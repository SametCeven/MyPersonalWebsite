const express = require('express')
const cors = require("cors")
const app = express()
port = 5000

app.use(cors())

app.get('/api', (req, res) => {
    res.json({"users":["user1","user2","user3"]})
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})