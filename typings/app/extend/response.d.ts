// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendResponse = require('../../../app/extend/response');
type ExtendResponseType = typeof ExtendResponse;
declare module 'egg' {
  interface Response extends ExtendResponseType { }
}