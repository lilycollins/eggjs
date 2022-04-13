'use strict';
module.exports = options => {
  return async (ctx, next) => {
    if (ctx.session.count) {
      ctx.session.count++;
    } else {
      ctx.session.count = 1;
    }
    await next();
  };
};
