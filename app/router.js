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

  //指标结果字典查询
  router.post('/dataFactory/tableList',controller.user.tableList);

  //结果字典查询
  router.get('/dataFactory/resultQuery',controller.user.resultQuery);

  //指标编号查询
  router.post('/dataFactory/resultIndex',controller.user.resultIndex);

  router.post('/dataFactory/listAttribute',controller.user.listAttribute)

  
  





};
