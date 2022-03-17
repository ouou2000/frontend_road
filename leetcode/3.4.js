// 遍历子数组
// 给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。

// 返回 nums 中 所有 子数组范围的 和 。

// 子数组是数组中一个连续 非空 的元素序列。

var num=[];
var re=0;
for(let i=0;i<num.length;i++)
{
    let min=Number.MAX_VALUE;
    let max=-Number.MAX_VALUE;
    for(let j=i;j<num.length;j++)
    {
        min=Math.min(min,num[j]);
        max=Math.max(max,num[j]);
        re+=max-min;
    }
}
return re;