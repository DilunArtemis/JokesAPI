const express = require("express");
// const mongoose = require("mongoose");


const app = express();
app.use(express.json());

require("./config/mongoose.config");
const jokesRoutes = require("./routes/jokes.routes");

jokesRoutes(app)

app.listen(8000);