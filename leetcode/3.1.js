// 题目：Z 字形变换
var s="AB";
var numRows = 1;
var arr=new Array(numRows).fill("");
var flag=true;
var sum=0;
arr[0]=s[0];
if(numRows==1)
{
    return s;
}
for(let i=1;i<s.length;i++)
{
    if(flag){
        if(sum==numRows-1)
        {
            sum=0;
            flag=false;
        }else{
            arr[sum+1]=arr[sum+1]+s[i];
            sum++;
        }
        
    }
    if(!flag){
        if(sum==numRows-1)
        {
            sum=0;
            flag=true;
            i--;
        }else{
            arr[numRows-sum-2]=arr[numRows-sum-2]+s[i];
            sum++;
        }
    }   
}
return arr.join("");
console.log(arr.join(""));

