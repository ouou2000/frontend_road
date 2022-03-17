var num=[2,3,4,5];
num[0]=1+'s'
if(num.length>2)
{
    num[1]="("+num[1];
    num[num.length-1]=num[num.length-1]+")";
    console.log(num.join("/"));
    //return num.join("/");
    
}else
{   
    //return num.join("/");
    console.log(num.join("/"));
    
}


