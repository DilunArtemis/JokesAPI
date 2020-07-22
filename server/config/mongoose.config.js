const mongoose = require('mongoose');
// const express = require('express');

// const app = express();


mongoose.connect("mondodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});


