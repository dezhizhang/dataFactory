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
  //指标缓存策略
  router.post('/dataFactory/listAttribute',controller.user.listAttribute);
  //指标缓存删除
  router.post('/dataFactory/tableDelete',controller.user.tableDelete);

  //指标缓存删除所有的
  router.post('/dataFactory/tableAllData',controller.user.tableAllData);

  //指标缓存添加
  router.post('/dataFactory/addAttribute',controller.user.addAttribute);

  //添加指标重试
  router.post('/dataFactory/addAttributeRetry',controller.user.addAttributeRetry);

  //指标重试查询
  router.post('/dataFactory/listAttributeTable',controller.user.listAttributeTable);

  //指标重试删除单项
  router.post('/dataFactory/tableDeleteRetry',controller.user.tableDeleteRetry);

  //指标重试删除所有的
  router.post('/dataFactory/tableAllDeleteRetry',controller.user.tableAllDeleteRetry);
  








};
