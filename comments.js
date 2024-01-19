// create a webserver with express router and commentController
// to handle the comments routes
// 1. create a router
// 2. create a controller
// 3. export the router

const express = require('express');
const commentController = require('../controllers/commentController');

const commentRouter = express.Router();

commentRouter.get('/', commentController.index);
commentRouter.get('/new', commentController.new);
commentRouter.get('/:id', commentController.show);
commentRouter.post('/', commentController.create);
commentRouter.get('/:id/edit', commentController.edit);
commentRouter.put('/:id', commentController.update);
commentRouter.delete('/:id', commentController.delete);

module.exports = commentRouter;