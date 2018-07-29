

var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// INITIAL GET ROUTE THAT REDIRECTS TO BURGERS
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

//GET ROUTE THAT SELECTS ALL DATA FROM THE TABLE
router.get("/burgers", function (req, res) {
    burger.selectAll(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

// POST ROUTE CREATE NEW DATA 
router.post("/burgers/create", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

//PUT ROUTE UPDATING EXISTING DATA
router.put("/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;
