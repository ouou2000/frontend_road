const express=require('express')
const jwt = require('jsonwebtoken')
const util=require('util')
const fs=require('fs')

let minReadFild=util.promisify(fs.readFile)
const mysql = require('mysql')
// 创建数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址
    user: 'root',//登录数据库的账号
    password: 'root',//登录数据库的密码
    database: 'employee' //指定需要操作的数据库
})
const route=express.Router()
// 定义secert密码，用于对jwt字符串进行加密以及解密
const screctKey = 'ousqlPiOv-A.C/Q?--vdc'
route.post('/login', (req, res) => {
    const userMsg = req.body
    const sqlStr = "SELECT user_password FROM employee_msg WHERE user_acount=?"
    const p = new Promise((resolve, reject) => {
        db.query(sqlStr, userMsg.acount, (err, res) => {
            if (err) reject(err.message)
            if (res.length === 0) {
                reject(2)
            }
            else {
                if (res[0].user_password === userMsg.password) {
                    resolve("登录成功")
                } else {
                    reject(0)
                }
            }

        })
    }).then(value => {
        // jwt.sign()方法生成JWT字符串，并通过token属性发送给客户端
        // 参数1：用户的信息对象
        // 参数2：加密的密钥
        // 参数3：配置对象，可以配置当前token1的有效期

        const tokenStr = jwt.sign({ userAcont: userMsg.acount }, screctKey, { expiresIn: '30s' })
        minReadFild('../html/index.html').then(value=>{
        })
         res.send({
                statue: 1,
                message: "success",
                token:tokenStr
            })
    }, err => {
        res.send({
            statue: err,
            message: "账号未注册或者是密码错误"
        })
    })
})
module.exports=route