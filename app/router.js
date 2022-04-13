'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/testEgg', controller.home.testEgg);
  router.get('/eggController', controller.testEgg.index);
  router.get('/wait', controller.testEgg.waitIt);
  router.get('/query', controller.testEgg.queryInfo);
  router.get('/strictQuery/:name/:age', controller.testEgg.strictQuery);
  router.post('/postAdd', controller.testEgg.postAdd);
  router.get('/getDetail', counter, controller.testEgg.getDetail);
  router.post('/addCookie', controller.testEgg.addCookie);
  router.post('/delCookie', controller.testEgg.delCookie);
  router.post('/editCookie/:cookie', controller.testEgg.editCookie);
  router.get('/getCookie', controller.testEgg.getCookie);
  router.get('/newContext', controller.testEgg.newContext);
  router.post('/newRequest', controller.testEgg.newRequest);
  router.get('/newResponse', controller.testEgg.newResponse);
  router.post('/addUser', controller.todoList.addUser);
  router.post('/delUser', controller.todoList.delUser);
  router.post('/editUser', controller.todoList.editUser);
  router.get('/getUser', controller.userManage.getUser);
  router.get('/todoList', controller.todoList.index);
};
