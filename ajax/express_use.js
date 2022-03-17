//引入express
const { response } = require('express');
const express = require('express');
const { request } = require('http');

// 创建应用对象
const app = express();
const Json={
        name:"小明",
        age:"18"
    }
// 创建路由规则
// all表示接受所有类型的请求，可设置为get，post
app.all('/express-s', (request, response) => {
    // CORS 官方对跨域的最终解决方案
    // 表示可以进行跨域请求，*表示所有域名都支持
    // 如果需要指定特定的域名，将*换成对应域名即可
    response.setHeader('Access-Control-Allow-Origin','*')
    // 表示可以处理所有的请求标头信息，包括非预定义的
    response.setHeader('Access-Control-Allow-Headers','*')
    // 表示可以处理所有的请求方法
    response.setHeader('Access-Control-Allow-Method','*')

    response.send('HELLO AJAX you are fuck');
});
app.all('/express', (request, response) => {

    // 表示可以进行跨域请求，*表示所有域名都支持
    // 如果需要指定特定的域名，将*换成对应域名即可
    response.setHeader('Access-Control-Allow-Origin','*')
    // 表示可以处理所有的请求标头信息，包括非预定义的
    response.setHeader('Access-Control-Allow-Headers','*')
    // 表示可以处理所有的请求方法
    response.setHeader('Access-Control-Allow-Method','*')
    
    Json.age++;
    // 对对象进行处理
    let delive=JSON.stringify(Json);
    // send函数中只能传递字符串跟buffer格式的内容
    response.send(delive);

    
});
app.all('/jsonp', (request, response) => {
    const data={
        msg:"用户名已经存在"
    }
    // 对对象进行处理
    let delive=JSON.stringify(data);
    // send函数中只能传递字符串跟buffer格式的内容
    response.end(`handle(${delive})`);

    
});
app.all('/jQuery-jsonp', (request, response) => {
    const data={
        msg:"用户名已经存在"
    }
    //服务器端接收jQuery的callback值，并返回
    let cd =request.query.callback;
    // 对对象进行处理
    let delive=JSON.stringify(data);
    // send函数中只能传递字符串跟buffer格式的内容
    // response.send(`${cd}(${delive})`);
    response.end(`${cd}(${delive})`);

    
});
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听ing")
})