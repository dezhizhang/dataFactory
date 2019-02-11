'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
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

 
}

module.exports = UserController;
