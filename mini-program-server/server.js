// const fs=require("fs")
const experss = require('express')
const cors = require('cors')
// const expressJWT = require('express-jwt')
const petDetail=require('./petDetail')
const index=require('./index')
const classify=require('./classify')
const search=require('./search')
// 创建服务器
const app = experss()
// 允许跨域请求中间件
app.use(cors())

// #region
//express4.x以上版本已经弃用'body-parser'
// const bodyParse=require('body-parser')
// express4.x及以上版本已经不需要安装body-parser中间件去获取post请求的请求体了，且已经被弃用
// 直接使用experss.urlencoded({extended:false})即可获取body参数
// #endregion
app.use(experss.urlencoded({ extended: false }))
// 解析JSON格式的字符串请求数据
app.use(experss.json())

app.use(petDetail)
app.use(index)
app.use(classify)
app.use(search)


//监听端口启动服务器
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听ing")
})