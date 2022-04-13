'use strict';

const { app } = require('egg-mock/bootstrap');

describe('testEgg jest', () => {
  it('test index', () => {
    return app.httpRequest()
      .get('/eggController')
      .expect('<h2>this is my new Controller</h2>')
      .expect(200);
  });
  it('test settimeout', async () => {
    await app.httpRequest()
      .get('/wait')
      .expect(200)
      .expect('<h2>哈哈哈哈，三秒后执行</h2>');
  });
});
