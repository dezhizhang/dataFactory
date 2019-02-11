'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  //用户登录
    async login() {

        let result =  this.ctx.request.body;
        
        let data =   await this.ctx.model.Login.find(result);

        if(data.length > 0) {
            this.ctx.body = {
                code:200,
                message:'登录成功'
            }
        } else {
            this.ctx.body = {
                code:404,
                message:'传入参数有误'
            }
        }

    }

    //指标集查询
    async searchParam() {

        let result = await this.ctx.model.Indicators.find();
        this.ctx.body = {
            code:200,
            message:'成功',
            data:result
        }

    }
    //指标价格
    async listPrice() {
        let result = this.ctx.request.body;


        let data = await this.ctx.model.Price.find();

        this.ctx.body = {
            code:200,
            message:'成功',
            data:data
        }

    }

    //结果字典
    async tableList() {
        let result = this.ctx.request.body;


        let data = await this.ctx.model.Result.find();

        this.ctx.body = {
            code:200,
            message:'成功',
            data:data
        }

    }

 
}

module.exports = UserController;
