// 给你一个字符串 s ，根据下述规则反转字符串：

// 所有非英文字母保留在原有位置。
// 所有英文字母（小写或大写）位置反转。
// 返回反转后的 s 。
var reverseOnlyLetters = function(s) {
//65-90,97-122
    s=s.split("");
    var judge=0;
    var item="";
    var j=s.length-1;
    for(let i=0;i<s.length;i++)
    {
        judge=s[i].charCodeAt();
        if(j==i)
        {
            return s.join("");
        }
        if((judge>=65&&judge<=90)||(judge>=97&&judge<=122))
        {
            while(true)
            {
                judge=s[j].charCodeAt();
                if((judge>=65&&judge<=90)||(judge>=97&&judge<=122))
                {
                    item=s[i];
                    s[i]=s[j];
                    s[j]=item;
                    j--;
                    if(j==i)
                    {
                        return s.join("");
                    }
                    break;
                }
                j--;
                if(j==i)
                {
                    return s.join("");
                }
            }
        }

    }
    return s.join("");
};
var s="a-bC-dEf-ghIj"
console.log(reverseOnlyLetters(s));
// 更好的方法，双指针
/* 我们使用left指针从左边开始扫描字符串s，right指针从右边开始扫描字符串s。如果两个指针都扫描到字母，
且left<right，那么交换s[left] 和 s[right]，然后继续进行扫描；否则表明反转过程结束，返回处理后的字符串。 */
var reverseOnlyLetters = function(s) {//时间复杂度为O（n），空间复杂度为O（n）
    const n = s.length;
    const arr = [...s];
    let left = 0, right = n - 1;
    while (true) {
        while (left < right && !(/^[a-zA-Z]+$/.test(s[left]))) { // 判断左边是否扫描到字母
            left++;
        }
        while (right > left && !(/^[a-zA-Z]+$/.test(s[right]))) { // 判断右边是否扫描到字母
            right--;
        }
        if (left >= right) {
            break;
        }
        swap(arr, left, right);
        left++;
        right--;
    }
    return arr.join('');
};

const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}




