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
route.post("/index", (req, res) => {
  // 请求的宠物信息
  // 构造查询语句
  const sqlStr = "SELECT petName,imgUrl FROM hotpet";
  const sqlStr1 = "SELECT petName,imgUrl FROM newpet";
  new Promise((resolve, reject) => {
    let resultObj = {
      hotList: [],
      newList: [],
    };
    // 查数据库获取宠物数据，包括图片url，外貌性格描述
    db.query(sqlStr, (err, res) => {
      if (err) reject(err.message);
      resultObj.hotList = res;
    });
    db.query(sqlStr1, (err, res) => {
      if (err) reject(err.message);
      resultObj.newList = res;
      resolve(resultObj);
    });
  }).then(
    (value) => {
      console.log(value)
      // 返回数据给客户端
      res.send({
        hotList: value.hotList,
        newList: value.newList
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
