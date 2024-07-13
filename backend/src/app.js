const express = require('express')
const app = express()
const routes = require('./routes/index')
const config = require(`${__dirname}/config/config.js`)
const cors = require('cors')
const { connection } = require("./helpers/mongodb")
const { addStockDetails } = require('./controllers/stockController')


// middlewares and routes
app.use(cors())
app.use('/', routes)


// Set interval to poll data every minute
setInterval(() => {
    addStockDetails()
}, 15 * 1000);


app.listen(config.node_port, async () => {
    try {
        await connection;
        console.log(`Listening on port number ${config.node_port}`)
    }

    catch (err) {
        console.log(err)
    }
})