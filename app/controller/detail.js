'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
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
                        "id": "RA913995",
                        "apiCode": "SCqry0001",
                        "apiName": "三大要素",
                        "recordId": "OR892694",
                        "chargingCount": 80,
                        "unchargingCount": 5,
                        "queryCount": 85,
                        "chargingSum": 700.0,
                        "createdTime": "2019-12-18 16:10:31",
                        "updatedTime": "2019-12-18 16:20:23",
                        "createdBy": "小智",
                        "description": "更新明细"
                    }
                ]
            }
        }
    }

    async info() {
        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            data:[
                {
                    "apiCode": "SCdtcp006",
                    "name": "长期经济稳定性等级"
                },
                {
                    "apiCode": "SCBlk0003",
                    "name": "用户黑名单-明细记录集"
                },
                {
                    "apiCode": "SComni012",
                    "name": "居住稳定性复合【企业定制】"
                },
                {
                    "apiCode": "SCquery0023",
                    "name": "上月驻留最久城市及天数"
                },
                {
                    "apiCode": "SCswas002",
                    "name": "当前居住稳定等级"
                },
            ]

        }
    }

    //明线搜索
    async search() {
        let result = this.ctx.query;
        console.log(result);


        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "total": 1,
                "rows": [
                    {
                        "id": "RA913995",
                        "apiCode": "SCqry0001",
                        "apiName": "人物关系列表",
                        "recordId": "OR892694",
                        "chargingCount": 80,
                        "unchargingCount": 5,
                        "queryCount": 85,
                        "chargingSum": 700.0,
                        "createdTime": "2019-12-18 16:10:31",
                        "updatedTime": "2019-12-18 16:20:23",
                        "createdBy": "小智云",
                        "description": "更新明细"
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
    async add() {
        let result = this.ctx.request.body;
        console.log(result);
        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            data:null
        }
    }



}

module.exports = DetailController;
