const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

const transactionsController = require("./controllers/transactionsController")

app.get("/", (req, res) => {
    res.send("Welcome to this budgeting app!")
})

app.use("/transactions", transactionsController)

app.get("*", (req,res) => {
    res.status(404).json({error: "Sorry no transaction found!"})
})

module.exports = app