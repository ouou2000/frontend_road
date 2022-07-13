// import axios from 'axios'
// const axios=require("axios")
axios.defaults.baseURL = 'http://localhost:8000';
const userMsg=document.getElementsByClassName("input")
const btn=document.getElementById("login")
btn.onclick=function(){
    // 使用axios函数进行Ajax请求
    axios({
        method: 'POST',
        url: "/login",
        // url参数
        // 请求体
        data: {
            acount:userMsg[0].value,
            password:userMsg[1].value
        }
    }).then(response => {//回调函数
        if(response.data.statue===1)
        {
            location.href="../html/index.html"
        }else if(response.data.statue===0)
        {  
            alert("error")
        }
        else{
            alert("error")
        }
        
    })
    // 使用fetch函数进行Ajax请求
    // fetch("http://127.0.0.1:8000/login",{
    //     // 请求方法
    //     method:"post",
    //     // 请求头参数
    //     // 请求体参数
    //     body:{
    //         acount:"userMsg[0].value",
    //         password:"userMsg[1].value"
    //     }
    // }).then(response=>{
    //     console.log(response);
    // })
}
