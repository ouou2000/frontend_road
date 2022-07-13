const experss = require('express')
const cors = require('cors')
const expressJWT = require('express-jwt')
const logRot=require('./logRot')

// 定义secert密码，用于对jwt字符串进行加密以及解密
const screctKey = 'ousqlPiOv-A.C/Q?--vdc'
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
//#region 
// 对token进行解密
// 可以通过expressJWT({screct:screctKey}).unless({path:[/^\/api\//]})来指定不需要访问权限的路由
//上例表示的是/api这个路径不需要访问权限
// app.use(expressJWT({screct:screctKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
//#endregion
// 路由挂载
app.use(logRot)

//监听端口启动服务器
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听ing")
})