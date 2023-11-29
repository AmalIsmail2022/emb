const express = require('express')
const dotenv = require("dotenv")
dotenv.config({ path: 'config.env' })

const dbConnection = require('./config/database')
dbConnection()

const employeeRoute = require('./routes/employeeRoute')



const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use("/api/v1/employees", employeeRoute)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})