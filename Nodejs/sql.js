const mysql=require('mysql')
// 创建数据库连接
const db=mysql.createPool({
    host:'127.0.0.1',//数据库的IP地址
    user:'root',//登录数据库的账号
    password:'root',//登录数据库的密码
    database:'petMessage' //指定需要操作的数据库
})
// 数据库查询语句,第一个参数填入SQL语句，第二个参数为回调函数
// 回调函数中第一个为错误信息，第二个为结果对象
// 请求的宠物信息
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
    },
    (err) => {
      // 打印错误信息
      console.log(err);
    }
  );
// const user={username:'小王',password:'123456'}
// // 对于待执行的sql语句，英文？表示占位符
// const sqlStr='INSERT INTO myuser (name,password) VALUES(?,?)'
// // 对于插入多个数据的简化语法，要求数据对象的每一个属性跟数据库字段一一对应
// const sqlStr1="INSERT INTO myuser SET ?"
// // 数据库插入语句,第一个参数填入SQL语句，第二个参数为插入的数据数组，第三个参数为回调函数
// // db.query(sqlStr1,[user.username,user.password],(err,result)=>{
// //     if(err) return err.message
// //     // 执行insert into 语句返回的是一个对象，其中affectedRows为1表示插入成功
// //     if(result.affectedRows===1)
// //     console.log("数据插入成功")
// // })
// const sqlStr2='UPDATE myuser SET password=? WHERE name=?'
// // 简写形式
// const sqlStr3='UPDATE myuser SET ? WHERE name=?'
// db.query(sqlStr2,[9981,"小王"],(err,result)=>{
//     if(err) return err.message
//     // 执行UPDATE语句返回的是一个对象，其中affectedRows为1表示插入成功
//     if(result.affectedRows===1)
//     console.log("数据更新成功")
// })

// // 删除数据
// // 为了防止数据真的被删除，推荐使用标记删除的方式，来模拟删除的动作
// // 所谓标记删除，表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除
// // 当用户执行了删除操作后使用UPDATE改变status的值为1
// const sqlStr4='DELETE FROM myuser where id=?'
// db.query(sqlStr4,1,(err,result)=>{
//     if(err) return err.message
//     // 执行DELETE语句返回的是一个对象，其中affectedRows为1表示插入成功
//     if(result.affectedRows===1)
//     console.log("数据删除成功")
// })
