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


}

module.exports = HomeController;
