'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index');
  }
  async result() {
    await this.ctx.render('result');
  }


}

module.exports = HomeController;
