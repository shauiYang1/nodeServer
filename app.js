/*
 * @Author: yangshuai u9h_75bugk181@dingtalk.com
 * @Date: 2022-09-30 13:40:11
 * @LastEditors: yangshuai u9h_75bugk181@dingtalk.com
 * @LastEditTime: 2022-09-30 13:49:08
 * @FilePath: \nodeServer\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD');
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));