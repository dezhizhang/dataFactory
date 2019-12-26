'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
    async list() {
        let result = this.ctx.request.body;
        console.log(result);

        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "total": 1,
                "rows": [
                {
                    "id": "OR892694",
                    "custId": "CNO996520",
                    "mode": 1,
                    "createdTime": "2019-12-17 18:42:28",
                    "chargingCount": 54,
                    "unchargingCount": 354,
                    "queryCount": 537,
                    "chargingSum": 888.0,
                    "description": "lalala",
                    "available": true,
                    "name": "yy",
                    "createdBy": '小智',
                    "updatedTime": "2019-12-17 18:45:12",
                    "recordMode": 1
                }
                ]
            }
        }
    }

    async save() {
        let result = this.ctx.request.body;
        console.log(result);
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            
        }
    }

    async update() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:"更新成功"
        }
    }
    async delete() {
        let result = this.ctx.query;
        console.log(result);
        
        this.ctx.body = {
            code:200,
            msg:"删除成功"
        }
    }
    async customer() {
        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            data:[
                {
                    "custId": "CNO238934",
                    "custName": "雅虎"
                },
                {
                    "custId": "CNO960423",
                    "custName": "青旅舍"
                },
                {
                    "custId": "CNO996520",
                    "custName": "知乎"
                },
                {
                    "custId": "CNO741572",
                    "custName": "座"
                }
            ]
        }
    }


}

module.exports = AccountController;
