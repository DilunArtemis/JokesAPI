const  Joke = require("../models/jokes.models");


module.exports = {
    getAll(_,res){
        Joke.find()
            .then(jokes => res.json(jokes));
    },

    create(req, res) {
        Joke.create (req.body)
            .then(joke => res.json(joke))
            .catch(err => res.json({error: err}));
    }
}