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
}

module.exports = HomeController;
