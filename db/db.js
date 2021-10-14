const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('connected....DB');
})


module.exports = con;