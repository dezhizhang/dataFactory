'use strict';

const Controller = require('egg').Controller;

class RiskController extends Controller {
  async riskBizTypeInfo() {
    let result = this.ctx.query;
    console.log(result);
    this.ctx.body = {
        code:200,
        msg:'SUCCESS',
        data:[
            {
                code:"0",
                name:"无"
            },
            {
                code:"1",
                name:"模块",
            },
            {
                code:"2",
                name:"模型"
            },
            {
                code:"0",
                name:"严谨类"
            },
            {
                code:"1",
                name:"实验类"
            }
        ]
    }
  }
  //新增风控方案
  async addRisk() {
    let schemaNo = 12345
    this.ctx.body = {
        code:200,
        msg:'新建风控方案成功！',
        data:{
            'schemaNo':schemaNo
        }
    }
  }

  async result() {
    await this.ctx.render('result');
  }


}

module.exports = RiskController;
