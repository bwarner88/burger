var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObejct = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

//POST that creates a new burger
router.post("/api/burger", function(req, res){
    burger.insterOne(["",""],[req.body.PARAMETER, req.body.PARAMETER], function(result) {
        res.json({id: result.insertID}); //not sure about this line ask about this!!
    });
});

//PUT that updates the table
router.put("/api/burger/:[NOT SURE WHAT THIS IS]", function(req, res) {
    var condition = "id = " + req.params.id; ////not sure about this line ask about this!!

    console.log(condition);

    burger.updateOne(
        {
            devour: req.body.devour
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end()
            }
            res.status(202).end();
        }
    );
});

module.export = router;