

var text="balloonaddallobone";
var num=function(num){
    var b=0,a=0,l=0,o=0,n=0,amount=0;
    for(let i=0;i<num.length;i++){

        switch(num[i])
        {
            case 'b':b++;break;
            case 'a':a++;break;
            case 'l':l++;break;
            case 'o':o++;break;
            case 'n':n++;break;
            default:continue;
        }
    }
    while(b>=1&&a>=1&&l>=2&&o>=2&&n>=1)
    {
        amount++;
        b--;
        a--;
        l=l-2;
        o=o-2;
        n--;
    }
}
num(text);
console.log(amount);