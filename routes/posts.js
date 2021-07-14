var express = require('express');
var router = express.Router();

var PostsController = require('../controllers/posts')

router.get('/', PostsController.Index);
router.post('/', PostsController.Create);
router.get('/new', PostsController.New);
router.post('/update', PostsController.Update);
// router.post('/retrieve', PostsController.findOne);
router.get('/update', PostsController.UpdatePage);


module.exports = router;
