// 七进制数
var num=-7;
var flag=false;
if(num<0)
{
    num=Math.abs(num);
    flag=true;
}
var re1=[];
while(true)
{
    re1.push(num%7);
    num=Math.floor(num/7);
    if(num==0)
    {
        break;
    }
}
if(flag)
{
    re1.push("-");
    
    return re1.reverse().join("");
}
return re1.reverse().join("");
