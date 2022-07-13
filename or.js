// const fs = require('fs');

// const grade = new Promise((resolve, reject) => {
//     fs.readFile('./file/grade.txt', (err, data) => {
//         if (err)
//          {reject(err);}
//         else{
//             resolve(data);
//         }
//     })
// })
// grade.then(value => {
//     let re = value.toString();
//     let arr = new Array();
//     arr = re.split(' ');
//     re=arr.join('\r\n')
//     re=re.replace(/=/g,':')
//     fs.writeFile('./file/grade1.txt',re,err=>{
//             if(err) console.error(err);
//         })
// }, reason => {
//     console.error(reason);
// })
// -----------------------------------------------
// for (var i = 0; i < 3; i++) {
//     setTimeout(_=> {
//         console.log(i)
//       })
//     }
    
//     for (let i = 0; i < 3; i++) {
//       setTimeout(_=> {
//         console.log(i)
//       })
//     }
//     setInterval(function(){ console.log("Hello"); }, 1000);
// async function async1(){
//   console.log('as1 start')
//   await async2()
//   console.log('as1 end')
// }
// async function async2(){
//   console.log('async2')
// }
// console.log("scri start")
// setTimeout(_=>{
//   console.log('set')
// },0)
// async1();
// new Promise((resolve,reject)=>{
//   console.log('promise1')
//   resolve();
// }).then(_=>{
//   console.log('promise2')
// })
// console.log("scri end")
var fn=n=>n;
console.log(fn(10))