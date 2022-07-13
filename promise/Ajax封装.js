const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // 此时正在发送Ajax请求
    // 自动处理服务端返回的JSON格式数据
    xhr.responseType = "json";
    //设置请求方法和url，第一个参数设置请求类型get，post等
    //第二个参数指向请求地址
    xhr.open('POST', 'http://127.0.0.1:8000/express');
    // 设置请求头信息
    // 第一个参数传递请求头的键名
    // 第二个参数传递请求头的键值

    // 发送方法,在post请求中，send中可写入想要传递的参数
    xhr.send("a=100&b=200");
    /*
    事件绑定，处理服务端返回的结果
    on when 当...时候
    readystate 是xhr对象中的属性，表示状态
    有 0，1，2，3，4这几个值，分别表示不同状态
    4表示响应已经完成，数据传输完成
    change 改变
    */
    xhr.onreadystatechange = function () {
        //  判断（服务器返回了所有的结果）
        if (xhr.readyState === 4) {
            // 判断响应状态码 200 404 403 401 500
            // 2xx 表示成功
            if (xhr.status >= 200 && xhr.status < 300) {
                // 手动处理服务端返回的JSON格式的字符串
                //let recive = JSON.parse(xhr.response);
                resolve(xhr.response)
            } else {
                reject(xhr.status)
            }

        }
    }
})

// 函数封装
function sendAjax(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.responseType='json'
        xhr.open('GET',url)
        xhr.send('a=200')
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4)
            {
                if(xhr.status>=200&xhr.status<300)
                {
                    resolve(xhr.response)
                }else{
                    reject(xhr.status)
                }
            }
        }
    })
}