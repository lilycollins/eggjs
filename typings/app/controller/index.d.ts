// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportTestEgg = require('../../../app/controller/testEgg');
import ExportTodoList = require('../../../app/controller/todoList');
import ExportUserManage = require('../../../app/controller/userManage');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    testEgg: ExportTestEgg;
    todoList: ExportTodoList;
    userManage: ExportUserManage;
  }
}
