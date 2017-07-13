/**
 * Created by john on 2017/7/13.
 */
var UserSQL = {
    insert:'INSERT INTO userinfo( userName,passwordmd5) VALUES(?,?)',
    queryAll:'SELECT * FROM userinfo',
    getUserById:'SELECT * FROM userinfo WHERE username = ? ',
};
module.exports = UserSQL;

