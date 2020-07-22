const jokesController = require("../controllers/jokes.controller")


module.exports = app =>{
    app.post("/api/jokes", jokesController.create);
    app.get("/api/jokes", jokesController.getAll);
}
