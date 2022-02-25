const express = require("express")
const app = express()


app.get("/", function(req, res){
    res.send('Welcome to Node API')
})
app.get("/student", function(req, res){
    res.send('Welcome to student API')
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})