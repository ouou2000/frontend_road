const express = require("express");
const util = require("util");
const fs = require("fs");
const path = require("path");

// 封装了fs的异步操作
// let minReadFild = util.promisify(fs.readFile);

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
route.post("/petdetail", (req, res) => {
  // 请求的宠物信息
  const petMsg = req.body;
  filePath = path.join(__dirname, `/images/${petMsg.name}.png`); //头像图片地址
  file = fs.readFileSync(filePath); //读取头像文件
  // 构造查询语句
  const sqlStr =
  "SELECT petCharacter,petAppearance,petShowImg1,petShowImg2,petShowImg3 FROM petdetail WHERE petName=?";
  new Promise((resolve, reject) => {
    // 查数据库获取宠物数据，包括图片url，外貌性格描述
    db.query(sqlStr, petMsg.name, (err, res) => {
      if (err) reject(err.message);
      resolve(res);
    });
  }).then(
    (value) => {
      // 返回数据给客户端
      res.send({
        petCharacter: value[0].petCharacter,
        petAppearance: value[0].petAppearance,
        petAvator: file,
        petShowImg:[value[0].petShowImg1,value[0].petShowImg2,value[0].petShowImg3]
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
