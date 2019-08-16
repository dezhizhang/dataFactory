'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index');
  }
  async result() {
    await this.ctx.render('result');
  }
  async example() {
    console.log(this.ctx.app);
    this.ctx.body = {
      code: 200,
      mes: 'hello',
      data: null,
    };
  }

  async httpClient() {
    let result = await this.ctx.curl('https://cnodejs.org/api/v1/topics',{
      dataType:'json',
      timeout:3000
    });
    this.ctx.body = {
      code:200,
      msg:'SUCCESS',
      data:result
    }
  }

  async httpPOST() {
 

    let result = await this.ctx.curl('https://httpbin.org/post',{
      method:'POST',
      contentType:'json',
      data:{
        hello:'world',
        now:Date.now()
      },
      dataType:'json'
    });

    console.log(result);
    
    
    this.ctx.body = {
      code:200,
      msg:'SUCCESS',
      data:result
    }
  }

}

module.exports = HomeController;
