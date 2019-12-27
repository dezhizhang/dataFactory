'use strict';

const Controller = require('egg').Controller;

class AttachmentController extends Controller {
    async list() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            data:{
                "total": 3,
                "rows": [
                    {
                        "id": "8cd90a30dad74f96",
                        "fileName": "smileDog",
                        "fileType": "原始文件",
                        "uid": null,
                        "createdTime": "2019-12-25 10:24:06",
                        "updatedTime": null,
                        "remark": "测试上传附件",
                        "tfsId": "T1EaJTBT__1RXrhCrK"
                    },
                    {
                        "id": "abd52602e15d414f9f035354480296dd",
                        "fileName": "系统开发周期.png",
                        "fileType": "结果文件",
                        "uid": null,
                        "createdTime": "2019-12-19 10:18:39",
                        "updatedTime": null,
                        "remark": "离线记录上传测试",
                        "tfsId": "T1BaJTBTh_1R4cSCrK"
                    },
                    {
                        "id": "2322744adfc94df49c62efad190",
                        "fileName": "smileDog.jpg",
                        "fileType": "结果文件",
                        "uid": "小智",
                        "createdTime": "2019-12-19 10:18:03",
                        "updatedTime": "2019-12-19 10:18:03",
                        "remark": "离线记录上传测试",
                        "tfsId": "T1YyJTBTJ_1RXrhCrK"
                    },
                    {
                        "id": "abd52602e15d414f9f035354480296",
                        "fileName": "系统开发周期.png",
                        "fileType": "结果文件",
                        "uid": "小智",
                        "createdTime": "2019-12-19 10:18:39",
                        "updatedTime": "2019-12-19 10:18:03",
                        "remark": "离线记录上传测试",
                        "tfsId": "T1BaJTBTh_1R4cSCrK"
                    },
                    {
                        "id": "2322744adfc94df49c62efad1900d",
                        "fileName": "smileDog.jpg",
                        "fileType": "结果文件",
                        "uid": null,
                        "createdTime": "2019-12-19 10:18:03",
                        "updatedTime": null,
                        "remark": "离线记录上传测试",
                        "tfsId": "T1YyJTBTJ_1RXrhCrK"
                    }
                ]
            }
        }
    }
    async type() {
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "category": "0",
                    "name": "原始文件"
                },
                {
                    "category": "1",
                    "name": "结果文件"
                }
            ]
        }
    }

}

module.exports = AttachmentController;
