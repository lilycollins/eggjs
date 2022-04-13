// 请求级别的对象，提供了响应相关的属性和方法 this.ctx.response
'use strict';
module.exports = {
  set token(token) {
    this.set('token', token);
  },
};
