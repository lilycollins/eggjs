'use strict';

const Service = require('egg').Service;

class testdbService extends Service {
  async addUser(params) {
    console.log(params);
    try {
      const { app } = this;
      const res = await app.mysql.insert('user', params);
      return res;
    } catch (error) {
      return null;
    }
  }
  async delUser(ids) {
    console.log(98, ids);
    try {
      const { app } = this;
      for (let i = 0; i < ids.length; i++) {
        await app.mysql.delete('user', { id: Number(ids[i]) });
      }

    } catch (error) {
      return null;
    }
  }
  async editUser(params) {
    try {
      const { app } = this;
      const res = await app.mysql.update('user', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getUser() {
    try {
      const { app } = this;
      const res = await app.mysql.select('user');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }

  }
}
module.exports = testdbService;
