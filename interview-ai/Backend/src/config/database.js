const mongoose = require("mongoose")

const dns = require('dns');

dns.setServers(['8.8.8.8']);

async function connectToDB() {

    try {
        console.log("Connecting to DB with URI:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB