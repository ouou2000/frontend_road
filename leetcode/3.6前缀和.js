// 打劫银行
var security=[1,2,5,4,1,0,2,4,5,3,1,2,4,3,2,4,8];

var time=2;
var re=[];
var flag=true;
for(let i=time;i<security.length;i++)
{
    if(security.length-i-1<time)
    {
        break;
    }
    let num=time;
    flag=true;
    while(num>0)
    {
        if(security[i-num]<security[i-num+1]||security[i+num]<security[i+num-1])
        {
            flag=false;
            break;
        }
        num--;
    }
    if(flag)
    {
        re.push(i);
    }
}
console.log(re);