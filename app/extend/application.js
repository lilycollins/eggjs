// 全局应用对象 this.app
'use strict';
module.exports = {
  // 方法扩展
  currentTime() {
    const current = getTime();
    return current;
  },
  // 属性扩展
  get timeProp() {
    return getTime();
  },
};

function getTime() {
  const now = new Date();
  return now;
}
