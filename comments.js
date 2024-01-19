// create a webserver
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var comment = require('./comment');

// CREATES A NEW COMMENT
router.post('/create', function (req, res) {
    comment.create({
            name : req.body.name,
            comment : req.body.comment,
            date : req.body.date,
            upvotes : req.body.upvotes,
            downvotes : req.body.downvotes
        }, 
        function (err, comment) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(comment);
        });
});

// RETURNS ALL THE COMMENTS IN THE DATABASE
router.get('/', function (req, res) {
    comment.find({}, function (err, comments) {
        if (err) return res.status(500).send("There was a problem finding the comments.");
        res.status(200).send(comments);
    });
});

module.exports = router;