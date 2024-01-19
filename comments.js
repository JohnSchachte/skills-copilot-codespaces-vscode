// create webserver
// 2017-08-01    PV

var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET comments listing. */
router.get('/', function (req, res, next) {
    var sql = "select * from comments";
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json(data);
    });
});

/* GET comments for given id */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = "select * from comments where id = ?";
    db.query(sql, [id], function (err, data, fields) {
        if (err) throw err;
        res.json(data);
    });
});

/* POST comments */
router.post('/', function (req, res, next) {
    var title = req.body.title;
    var body = req.body.body;
    var sql = "insert into comments (title, body) values (?, ?)";
    db.query(sql, [title, body], function (err, data, fields) {
        if (err) throw err;
        res.json({ message: "comment added" });
    });
});

/* PUT comments */
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    var title = req.body.title;
    var body = req.body.body;
    var sql = "update comments set title = ?, body = ? where id = ?";
    db.query(sql, [title, body, id], function (err, data, fields) {
        if (err) throw err;
        res.json({ message: "comment updated" });
    });
});

/* DELETE comments */
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = "delete from comments where id = ?";
    db.query(sql, [id], function (err, data, fields) {
        if (err) throw err;
        res.json({ message: "comment deleted" });
    });
});

module.exports = router;