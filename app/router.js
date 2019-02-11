'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //用户登录
  router.post('/dataFactory/userLogin',controller.user.login);

  //指标管理
  router.post('/dataFactory/searchParam',controller.user.searchParam);

  //指标阶梯价格查询
  router.post('/dataFactory/listPrice',controller.user.listPrice);





};
