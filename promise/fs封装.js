const fs=require('fs')
const pa=require('path')


function FindFile(path)//封装Promise文件读取函数，参数传入文件名
{
    return new Promise((resolve,reject)=>{//返回一个Promise对象
        fs.readFile(pa.join('./file/',path),(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

FindFile('grade.txt').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})
