// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

var sum=99999;
var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};
var a;
a=4;
console.log(typeof a);
