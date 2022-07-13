const express = require("express");
const mysql = require("mysql");

// 创建数据库连接
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的IP地址
  user: "root", //登录数据库的账号
  password: "root", //登录数据库的密码
  database: "petMessage", //指定需要操作的数据库
});
// 创建路由
const route = express.Router();
// 获取信息
route.post("/search", (req, res) => {
  // 请求的宠物信息
  const serachMsg = req.body.name;
  // 构造查询语句
  const sqlStr =
  `select * from allpet where petName like '%${serachMsg}%';`;
  new Promise((resolve, reject) => {
    // 查数据库获取宠物数据，包括宠物名称，图片url
    db.query(sqlStr,(err, res) => {
      if (err) reject(err.message);
      resolve(res);
    });
  }).then(
    (value) => {
      // 返回数据给客户端
      res.send({
            resultList:value
      });
    },
    (err) => {
      // 打印错误信息
      console.log(err);
    }
  );
});
// 暴露路由
module.exports = route;
