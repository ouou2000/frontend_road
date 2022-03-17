const fs=require('fs');//node.js中读文件模块
// fs.readFile('./file/为学.txt',(err,data)=>{
//     if(err) throw err;//抛出异常
//     console.log(data.toString());
// })
const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        let data='success';
        //如果成功则调用resolve(）函数改变p的状态为true
        resolve(data);
        //如果失败则调用reject(）函数改变p的状态为false
        // reject(data);

    },1000)
});
//promise的then方法传入两个参数
// 根据对象的状态执行其中一个参数
// 如果是true则执行第一个，否则执行第二个
p.then(value=>{
    console.log(value);
},reason=>{
    console.error(reason);
})
// 使用promise异步读取文件
const p1=new Promise(function(resolve,reason){
    fs.readFile('./file/为学.txt',(err,data)=>{
        if(err) reason(err);//抛出异常
        resolve(data);
    });
});
// then方法的返回结果是promise对象，对象状态由回调函数返回的结果决定
// 如果回调函数返回的结果是非promise类型的属性，状态为成功，返回值为对象成功的值
// 如果回调函数返回的结果是promise类型的属性，状态由promise对象调用resolve还是reason函数决定
// 如果是返回结果是error或者通过throw抛出异常，则结果为false
// then方法是可以链式调用的
p1.then(value=>{
    //读取的内容是一个buffer数组，需要调用toString方法将其转换成字符串
    console.log(value.toString());
},reason=>{
    console.error(reason);
})

// then方法可以捕获成功和失败，catch方法可以捕获失败
p1.catch(reason=>{
    // 对失败的处理
})