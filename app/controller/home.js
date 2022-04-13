'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello, egg';
    console.log(ctx.session);
  }
  async testEgg() {
    const { ctx } = this;
    ctx.body = '<h1>hello, testEgg</h1>';
  }
}

module.exports = HomeController;
