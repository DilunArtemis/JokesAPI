const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
    setup:  
    {
        type: String,
        minlength: [10, "Please use 10 characters in your set up!"],
        required: [true, "This field is required"]
    
    },
    
    punchline: 
    {
        types: String,
        minLength: [3, "Punchline must be at least 3 characters!"],
        required: [true, "This field is required"]
    }
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
