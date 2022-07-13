const http=require('http')
// 创建一个服务器实例
const fs=require('fs')
const fpath=require('path')
const server=http.createServer()

// 为服务器绑定事件，第一个函数为绑定事件名称，第二个参数为绑定事件的回调
// req请求对象，res响应对象
server.on('request',(req,res)=>{
    // 用户请求的url
    const url=req.url;
    // 用户请求的方法浏览器默认只能发起GET（）请求
    const method=req.method;
    console.log(url)
    console.log(method)
    // 使用end()方法发送会发生中文乱码，需要设置编码格式,设置该请求头会导致html文件被解析成纯代码
    //res.setHeader('Content-Type','text/html:charset=utf-8')
    // 向客户端发送指定的内容，并结束此次请求的处理过程
    fs.readFile('html与css练习/horse_race_lamp.html','utf8',(err,results)=>{
        if(err) console.log(err.message)  
        res.end(results)
    })
    
    
})

// 启动服务器，第一个参数为端口号，第二个参数为回调函数
server.listen("19980",()=>{
    console.log("服务器启动")
})