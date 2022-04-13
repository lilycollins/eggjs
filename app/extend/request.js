// 请求级别的对象，提供了请求相关的属性和方法 this.ctx.request
'use strict';
module.exports = {
  get token() {
    console.log('token', this.get('token'));
    return this.get('token');
  },
};
