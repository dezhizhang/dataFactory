'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async list() {
    let result = this.ctx.query;
    let time = new Date();

    console.log(result);

    this.ctx.body = {
        code:200,
        msg:"SUCCESS",
        data:{
            "size": 20,
            "data": [
                {
                    "id": "020623c3",
                    "name": "同盾数",
                    "dsId": "BCS300000",
                    "month": "12",
                    "datasource":"智数",
                    "queryCount": 559019,
                    "successCount": 559019,
                    "failure": 0,
                    "chargingCount": 0,
                    "unchargingCount": 559019,
                    "chargingSum": 14734.80,
                    "freeSum": null,
                    "addSum": null,
                    "adjustSum": null,
                    "realSum": 100,
                    "status": 0,
                    "auditedBy": "小智",
                    "auditedTime": null,
                    "createdTime": "2019-12-19 14:53:00",
                    "updatedTime": null,
                    "auditedDesc": null,
                    "remark": null,
                    "receiver": null,
                    "copyList": null,
                    "auditStatus": 0,
                    "invoicedTime": null,
                    "invoicedBy": null,
                    "payedTime": null,
                    "payedBy": null
                },
                {
                    "id": "020623c141",
                    "name": "同盾数",
                    "dsId": "BCS300000",
                    "month": "12",
                    "datasource":"智数",
                    "queryCount": 559019,
                    "successCount": 559019,
                    "failure": 0,
                    "chargingCount": 0,
                    "unchargingCount": 559019,
                    "chargingSum": 14734.80,
                    "freeSum": null,
                    "addSum": null,
                    "adjustSum": null,
                    "realSum": 100,
                    "status": 0,
                    "auditedBy": "小智",
                    "auditedTime": null,
                    "createdTime": "2019-12-19 14:53:00",
                    "updatedTime": null,
                    "auditedDesc": null,
                    "remark": null,
                    "receiver": null,
                    "copyList": null,
                    "auditStatus": 0,
                    "invoicedTime": null,
                    "invoicedBy": null,
                    "payedTime": null,
                    "payedBy": null
                }
            ]
        }
    }
  }
  async result() {
    await this.ctx.render('result');
  }

  async sum() {
    this.ctx.body = {
      code:200,
      msg:"SUCCESS",
      data:{
        billId:"1223541",
        chargingSum:"120.00",
        freeSum:"12.00",
        realSum:"14.00"
      }
    }
  }

  async add() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code:200,
      msg:"SUCCESS",
      data:null
    }
  }
  async delete() {
    let result = this.ctx.query;
    console.log(result);
    this.ctx.body = {
      code:200,
      msg:"删除成功",
      data:null
    }
  }
  async update() {
    let result = this.ctx.request.body;
    console.log(result);
    this.ctx.body = {
      code:200,
      msg:"更新成功",
      data:null
    }
  }
  async info() {
    let result = this.ctx.query;
    console.log(result);

    this.ctx.body = {
      code:200,
      msg:"SUCCESS",
      data:{
        "size": 100,
        "data": [
            {
                "id": "94f0598711994bb4a0725165f44",
                "apiCode": "SCqry0006",
                "apiName": "手机状态",
                "operation": "CUCC",
                "price": 0.72,
                "chargingCount": 0,
                "unchargingCount": 20465,
                "queryCount": 20465,
                "chargingSum": 14734.80,
                "billId": "020623c3728c4195bc490fa2c27",
                "successCount": 100,
                "failureCount": 120
            },
            {
              "id": "94f0598711994bb4a05165f4491b0f",
              "apiCode": "SCqry0006",
              "apiName": "手机状态",
              "operation": "CUCC",
              "price": 0.72,
              "chargingCount": 0,
              "unchargingCount": 20465,
              "queryCount": 20465,
              "chargingSum": 14734.80,
              "billId": "020623c3728c4195bc490fa2c27c3",
              "successCount": 140,
              "failureCount": 150
          },
          {
            "id": "94f0598711994bb4a0725165f449",
            "apiCode": "SCqry0006",
            "apiName": "手机状态",
            "operation": "CUCC",
            "price": 0.72,
            "chargingCount": 0,
            "unchargingCount": 20465,
            "queryCount": 20465,
            "chargingSum": 14734.80,
            "billId": "020623c3728c4195bc490fa2cc3a8e",
            "successCount": 22,
            "failureCount": 77
        },
        {
                "id": "94f0598711994bb4a072516591b0f",
                "apiCode": "SCqry0006",
                "apiName": "手机状态",
                "operation": "CUCC",
                "price": 0.72,
                "chargingCount": 0,
                "unchargingCount": 20465,
                "queryCount": 20465,
                "chargingSum": 14734.80,
                "billId": "020623c3728c4195bc490fa2c3a8e",
                "successCount": 80,
                "failureCount": 66
            }
        ]
      }
    }
  }



}

module.exports = HomeController;
