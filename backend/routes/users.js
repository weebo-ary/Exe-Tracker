const router = require("express").Router();
let User = require("../models/user.model");

//this handles incoming http GET requests....

router.route("/").get((req, res) => {
  User.find() //this get the list of all the user of MONGO DB ATLAS databse
    .then((users) => res.json(users)) //users return from databse
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
