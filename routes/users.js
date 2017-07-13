
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/usersql');
var pool = mysql.createPool( dbConfig.mysql );

var responseJSON = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({     code:'-200',     msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

router.get('/addUser', function(req, res, next){
    pool.getConnection(function(err, connection) {
        var param = req.query || req.params;
        connection.query(userSQL.insert, [param.username,param.passwordmd5], function(err, result)
        {
            if(result){
                result = {
                    code:200,
                    msg:'增加成功'
                }
            }
            responseJSON(res, result);
            connection.release();
        });
    });
});
module.exports = router;
