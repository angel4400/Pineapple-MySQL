var express = require('express');
var router = express.Router();

var workDao = require('../controllers/work');

// 查询种类
router.post('/taglist', function(req, res, next) {
    workDao.getTagList(req,res,next)
}); 

// 查询全部作品
router.post('/list', function(req, res, next) {
    workDao.getWorkList(req,res,next)
}); 

// 查询单个作品
router.post('/detail', function(req, res, next) {
    workDao.getWorkInfo(req,res,next)
}); 

// 查询已发作品
router.post('/ownlist', function(req, res, next) {
    workDao.getOwnWorkList(req,res,next)
}); 

// 发布作品
router.post('/addwork', function(req, res, next) {
    workDao.addWork(req,res,next)
}); 

// 删除作品
router.post('/deletework', function(req, res, next) {
    workDao.deleteWork(req,res,next)
}); 

// 评论
router.post('/addcomment', function(req, res, next) {
    workDao.addComment(req,res,next)
});

// 删除评论
router.post('/delcomment', function(req,res,next) {
    workDao.delComment(req,res,next)
})

module.exports = router;