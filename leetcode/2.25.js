var num="2+1i";var num2="2+-2i";
var num1=num.split("+");
var num3=num2.split("+");
var result=Number(num1[0])*Number(num3[0]);
var result1;
var temp1,temp2,temp3,temp4;
if(num1[1][0]=="-")
{
    temp1=Number(num1[1].substring(1,num1[1].length-1));
    temp1=0-temp1;
}
else{
    temp1=Number(num1[1].substring(0,num1[1].length-1));
}
if(num3[1][0]=="-")
{
    temp2=Number(num3[1].substring(1,num3[1].length-1));
    temp2=0-temp2;
}else{
    temp2=Number(num3[1].substring(0,num3[1].length-1));
}
temp3=Number(num3[0])*temp1+Number(num1[0])*temp2;
temp4=0-temp1*temp2;

result1=result+temp4;
result1=result1+"+"+temp3+"i";
console.log(result1);