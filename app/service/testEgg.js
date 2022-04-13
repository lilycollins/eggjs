'use strict';

const Service = require('egg').Service;

class eggSevice extends Service {
  async getDetail(id) {
    // mock data
    return {
      id,
      name: '张三',
      age: 20,
      gender: 'male',
    };
  }
}

module.exports = eggSevice;
