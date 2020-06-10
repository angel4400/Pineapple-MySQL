var co = require('co'); // 自动执行异步函数
var utils = require('../libs/utils'); // 工具类
var User = require('../models/index').User; // 实体
module.exports = {
    // 查询全部
    getUserList: function(req,res,next) {
        co(function*() {
            var result = yield User.findAndCountAll({})
            var userList = result.rows || [];
            utils.handleJson({
                response: res,
                result: {
                    list: userList
                },
            })
        }).catch(function(err){
            utils.handleJson({
                response:res,
                error: err
            })
        })
    }
}