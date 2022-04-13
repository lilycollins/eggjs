'use strict';

const Controller = require('egg').Controller;

class todoController extends Controller {
  async index() {
    const { ctx } = this;
    const pageData = {};
    await ctx.render('todoList.html', pageData);
  }
  async addUser() {
    const { ctx } = this;
    const request = await ctx.service.testdb.addUser(ctx.request.body);
    if (request) {
      ctx.body = '添加成功';
    } else {
      ctx.body = {
        data: 'fail',
        code: -1,
        msg: '添加失败',
      };
    }
  }
  async delUser() {
    const { ctx } = this;
    console.log(ctx.request.body);
    await ctx.service.testdb.delUser(ctx.request.body.ids);
    ctx.body = '删除成功';
  }
  async editUser() {
    const { ctx } = this;
    console.log(ctx.request.body);
    await ctx.service.testdb.editUser(ctx.request.body);
    ctx.body = '编辑成功';
  }
}
module.exports = todoController;

