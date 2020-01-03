'use strict';

const Controller = require('egg').Controller;

class HistoryController extends Controller {
  async list() {
    let result = this.ctx.query;
    console.log(result);
    this.ctx.body = {
        code:200,
        msg:"SUCCCESS",
        data:{
            "total":100,
            "rows":[
                {
                    billId:"145",
                    success:true,
                    operatorBy:"小智",
                    createdTime:"2019-12-12",
                    content:"你好呀",
                    category:"明细",
                    id:"12345"
                },
                {
                    billId:"123",
                    success:true,
                    operatorBy:"小智",
                    createdTime:"2019-12-12",
                    content:"你好呀",
                    category:"明细",
                    id:"123456"
                },
                {
                    billId:"125",
                    success:true,
                    operatorBy:"小智",
                    createdTime:"2019-12-12",
                    content:"你好呀",
                    category:"明细",
                    id:"1234567"
                },

                {
                    billId:"1453",
                    success:true,
                    operatorBy:"小智",
                    createdTime:"2019-12-12",
                    content:"你好呀",
                    category:"明细",
                    id:"12345678"
                },
                

            ]
        }
    }
  }
 
}

module.exports = HistoryController;
