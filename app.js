const express = require('express');
const mongodb = require('./db/db');

const app = express();

app.use(express.json());
const alienRouter = require('./routers/rout')
app.use('/', alienRouter)

app.listen(9001, () => {
    console.log("Server is runnuing...")
});