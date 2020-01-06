'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 新增结果字典
  router.get('/result', controller.home.result);
  // 用户登录
  router.post('/dataFactory/login', controller.user.login);
  // 指标管理
  router.post('/dataFactory/searchParam', controller.user.searchParam);
  // 提增指示管理
  router.post('/dataFactory/addSearchParam', controller.user.addSearchParam);
  // 指标阶梯价格查询
  router.post('/dataFactory/listPrice', controller.user.listPrice);

  // 指标结果字典查询
  router.post('/dataFactory/tableList', controller.user.tableList);

  // 结果字典查询
  router.get('/dataFactory/resultQuery', controller.user.resultQuery);
  // 新增结果字典数据
  router.post('/dataFactory/addResult', controller.user.addResult);

  // 指标编号查询
  router.post('/dataFactory/resultIndex', controller.user.resultIndex);
  // 指标缓存策略
  router.post('/dataFactory/listAttribute', controller.user.listAttribute);
  // 指标缓存删除
  router.post('/dataFactory/tableDelete', controller.user.tableDelete);

  // 指标缓存删除所有的
  router.post('/dataFactory/tableAllData', controller.user.tableAllData);

  // 指标缓存添加
  router.post('/dataFactory/addAttribute', controller.user.addAttribute);

  // 添加指标重试
  router.post('/dataFactory/addAttributeRetry', controller.user.addAttributeRetry);

  // 指标重试查询
  router.post('/dataFactory/listAttributeTable', controller.user.listAttributeTable);

  // 指标重试删除单项
  router.post('/dataFactory/tableDeleteRetry', controller.user.tableDeleteRetry);

  // 指标重试删除所有的
  router.post('/dataFactory/tableAllDeleteRetry', controller.user.tableAllDeleteRetry);

  // 指标管理查询
  router.post('/dataFactory/tableListSearch', controller.user.tableListSearch);

  // 指标缓存查询
  router.post('/dataFactory/tableSearchUpdate', controller.user.tableSearchUpdate);


  // 指标重试查询
  router.post('/dataFactory/tableSeachRetry', controller.user.tableSeachRetry);
  //用户登录
  router.post('/risk/user/login',controller.risk.userLogin);


  //获取业务类型
  router.get('/risk/workBench/general/riskBizTypeInfo/:id',controller.risk.riskBizTypeInfo);
  //新增风控方案
  router.get('/risk/workBench/riskSchema/add',controller.risk.addRisk);
  //规则组件
  router.get('/risk/workBench/general/list',controller.risk.generalList);





  //离线帐单列表
  router.post('/fs/api/v1/offlineRecord/list',controller.account.list);
  //获取客户下拉
  router.get('/fs/api/v1/customerInfo/getCustomer',controller.account.customer);
  //离线帐单新增
  router.post('/fs/api/v1/offlineRecord/save',controller.account.save);
  //离线帐单列新
  router.post('/fs/api/v1/offlineRecord/update',controller.account.update);
  //离线帐单删除
  router.get('/fs/api/v1/offlineRecord/delete/:id',controller.account.delete);
  //离线明细api接口
  router.get('/fs/api/v1/common/getAllApiInfo',controller.detail.info);
  //离线明线列表
  router.get('/fs/api/v1/offlineRecordApi/detail/:id',controller.detail.list);
  //离线明细搜索
  router.get('/fs/api/v1/offlineRecordApi/list',controller.detail.search);
  //离线明细新增
  router.post('/fs/api/v1/offlineRecordApi/save',controller.detail.add);
  //离线明细删除
  router.get('/fs/api/v1/offlineRecordApi/delete/:id',controller.detail.delete);
  //离线明细更新
  router.post('/fs/api/v1/offlineRecordApi/update',controller.detail.update);
  //离线附件列表
  router.get('/fs/api/v1/offlineRecordFile/list/:id',controller.attachment.list);
  //离线附件类型
  router.get('/fs/api/v1/offlineRecordFile/getFileType',controller.attachment.type);
  //离线附件下载
  router.get('/fs/api/v1/offlineRecordFile/delete/:id',controller.attachment.delete);
  //账单列表
  router.get("/fs/api/v1/sjyzdgl/maintain/bills",controller.maintain.list)
  //帐单历史记录
  router.get("/fs/api/v1/sjyzdgl/maintain/billMaintainList/:id",controller.history.list);
  //帐单明细
  router.get("/fs/api/v1/sjyzdgl/maintain/billSummary/:id",controller.maintain.sum);
  //帐单明细列表
  router.get("/fs/api/v1/sjyzdgl/maintain/billDetail/:id",controller.maintain.info);
  //帐单明细新增
  router.post("/fs/api/v1/sjyzdgl/maintain/addBillDetail",controller.maintain.add);




  













};
