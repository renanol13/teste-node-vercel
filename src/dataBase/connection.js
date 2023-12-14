const mongoose = require('mongoose')
require('dotenv').config()

const DATABASE_URL = process.env.DATABASE_URL

const db = () => {
    try {
        mongoose.connect(DATABASE_URL)
    } catch (error) {
        console.log(error);
    }
}

module.exports = db
