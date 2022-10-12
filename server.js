/*
 * @Author: yangshuai u9h_75bugk181@dingtalk.com
 * @Date: 2022-09-30 10:16:37
 * @LastEditors: yangshuai u9h_75bugk181@dingtalk.com
 * @LastEditTime: 2022-10-12 14:40:57
 * @FilePath: \nodeServer\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEre
 */
var http = require('http');

const server = http.createServer(function (request, response) {
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' });
}).listen(8888);
//  监听客户端发起请求
server.on('request', (request, response) => {

  // 客户端请求路径
  console.log(`客户端请求路径为：${request.url}`)

  // 响应给客户端
  switch (request.url) {
    case '/': {//浏览器默认行为
      response.write(`/`)
      break;
    }
    case '/index': {//首页
      response.write(`/index`)
      break;
    }
    case '/loging': {//登录页
      response.write(`/loging`)
      break;
    }
  }
  // 响应完成
  response.end()
})
console.log('Server running at http://127.0.0.1:8888/');