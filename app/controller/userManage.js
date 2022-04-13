'use strict';
const Controller = require('egg').Controller;
class userManage extends Controller {
  async addUser() {
    const { ctx } = this;
    const params = {
      name: '小黄',
      age: 30,
    };
    await ctx.service.testdb.addUser(params);
    ctx.body = '添加成功';
  }
  async delUser() {
    const { ctx } = this;
    const ids = {
      id: 13,
    };
    await ctx.service.testdb.delUser(ids);
    ctx.body = '删除成功';
  }
  async editUser() {
    const { ctx } = this;
    const param = {
      id: 12,
      name: '小小',
      age: 12,
    };
    await ctx.service.testdb.editUser(param);
    ctx.body = '编辑成功';
  }
  async getUser() {
    const { ctx } = this;
    const res = await ctx.service.testdb.getUser();
    ctx.body = JSON.stringify(res);
  }
}
module.exports = userManage;
