// 题目描述
// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
// 请你找出并返回只出现一次的那个数。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

// 我的解答
function my(){
    var a=[1,1,2,2,3,3,4,4,5];
for(let i=0;i<a.length;i++)
{
    if(i==a.length-1)return a[i];
    if(a[i]==a[i+1])
    {
        i++;
        continue;
    }
    else{
        return a[i];
    }

}
}
var re=my();
console.log(re);

// 官方解