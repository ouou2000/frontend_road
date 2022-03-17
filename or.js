const fs = require('fs');

const grade = new Promise((resolve, reject) => {
    fs.readFile('./file/grade.txt', (err, data) => {
        if (err)
         {reject(err);}
        else{
            resolve(data);
        }
    })
})
grade.then(value => {
    let re = value.toString();
    let arr = new Array();
    arr = re.split(' ');
    re=arr.join('\r\n')
    re=re.replace(/=/g,':')
    fs.writeFile('./file/grade1.txt',re,err=>{
            if(err) console.error(err);
        })
}, reason => {
    console.error(reason);
})

let o='qwer';
o.split();