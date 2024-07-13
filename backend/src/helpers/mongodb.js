const config = require('../config/config')
const mongoose = require("mongoose");


const connection = mongoose.connect(`${config.mongodb.url}/${config.mongodb.database}`, { 'user': config.mongodb.username, 'pass': config.mongodb.password }).
    then(() => console.log('connected to database')).
    catch((e) => console.log(e))