'use strict';

const Controller = require('egg').Controller;

class testEggController extends Controller {
  async index() {
    const { ctx, app } = this;
    // ctx.body = '<h2>this is my new Controller</h2>';
    const result = await ctx.service.testEgg.getDetail(123);
    result.skills = [
      '吃饭',
      '睡觉',
      '娱乐',
    ];
    result.userName = ctx.session.userName;
    result.nowTime = app.currentTime(); // app.timeProp
    await ctx.render('index.html', result);
  }
  async waitIt() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h2>哈哈哈哈，三秒后执行</h2>');
      }, 3000);
    });
  }
  async queryInfo() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }
  async strictQuery() {
    const { ctx } = this;
    ctx.body = ctx.params.name + ctx.params.age;
  }
  async postAdd() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
  async getDetail() {
    const { ctx } = this;
    const res = await ctx.service.testEgg.getDetail(ctx.query.id);
    ctx.body = res;
  }
  async addCookie() {
    const { ctx } = this;
    ctx.cookies.set('cookie', 'tangqi123456789', { maxAge: 1000 * 2, httpOnly: false });
    ctx.body = {
      status: 200,
      data: '',
      msg: 'success',
    };
    // 设置session
    ctx.session.userName = '汤琪';
  }
  async delCookie() {
    const { ctx } = this;
    ctx.cookies.set('cookie', null);
    ctx.body = {
      status: 200,
      data: '',
      msg: 'success',
    };
    // 删除session
    ctx.session.userName = null;
  }
  async editCookie() {
    const { ctx } = this;
    ctx.cookies.set('cookie', ctx.params.cookie, { encrypt: false });
    ctx.body = {
      status: 200,
      data: '',
      msg: 'success',
    };
  }
  async getCookie() {
    const { ctx } = this;
    const cookie = ctx.cookies.get('cookie', { encrypt: false });
    console.log(cookie);
    ctx.body = {
      status: 200,
      data: 'Cookie显示成功',
    };
  }
  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    console.log(params);
    ctx.body = 'newContext';
  }
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = {
      status: 200,
      body: token,
    };
  }
  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'new response 666';
    const testBase64 = ctx.helper.base64encode('tangqi');
    ctx.body = testBase64;
  }
}

module.exports = testEggController;
