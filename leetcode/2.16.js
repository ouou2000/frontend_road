// 我们可以枚举所有连续的没有被推动的骨牌，根据这段骨牌的两边骨牌（如果有的话）的推倒方向决定这段骨牌的最终状态：

// 如果两边的骨牌同向，那么这段连续的竖立骨牌会倒向同一方向。
// 如果两边的骨牌相对，那么这段骨牌会向中间倒。
// 如果两边的骨牌相反，那么这段骨牌会保持竖立。
// 特别地，如果左侧没有被推倒的骨牌，则假设存在一块向左倒的骨牌；如果右侧没有被推倒的骨牌，则假设存在一块向右倒的骨牌。这样的假设不会破坏骨牌的最终状态，并且边界情况也可以落入到上述三种情况中。

// 我们可以使用两个指针 ii 和 jj 来枚举所有连续的没有被推动的骨牌，\textit{left}left 和 \textit{right}right 表示两边骨牌的推倒方向。根据上述三种情况来计算骨牌的最终状态。
// var pushDominoes = function(dominoes) {
//     const s = [...dominoes];
//     let n = s.length, i = 0;
//     let left = 'L';
//     while (i < n) {
//         let j = i;
//         while (j < n && s[j] == '.') { // 找到一段连续的没有被推动的骨牌
//             j++;
//         }
//         const right = j < n ? s[j] : 'R';
//         if (left === right) { // 方向相同，那么这些竖立骨牌也会倒向同一方向
//             while (i < j) {
//                 s[i++] = right;
//             }
//         } else if (left === 'R' && right === 'L') { // 方向相对，那么就从两侧向中间倒
//             let k = j - 1;
//             while (i < k) {
//                 s[i++] = 'R';
//                 s[k--] = 'L';
//             }
//         }
//         left = right;
//         i = j + 1;
//     }
//     return s.join('');
// };

// var date=new Date();//创建当前时间对象
// var date1=new Date("2/17/2022 23:30:20");//创建指定时间对象

// var max=[1,2,3,4,12,4,1,5,1,3,12,4,12,4,124,124,124,1,4,5,13,41234];
// var b=new RegExp("a");


var str=["flower","flower","flower","flower"];

function fun(strs){
    let num=0;
    let str1="";
    for(let i=0;i<strs[0].length;i++)
    {
        if(strs[0].length>=num&&strs[0].length!=0){
        for(let j=1;j<strs.length;j++){
            if(strs[j].length<num||strs[0][num]!=strs[j][num])
            {return str1;}
        }
        str1=str1+strs[0][num];
        num++;
    }else return str1; 
 }
 return str1;
}
console.log(fun(str));
document.getElementById
document.getElementsByTagName
document.getElementsByName
document.getElementsByClassName
document.querySelector()
window.onload = function(){
		
    /*
     * 点击超链接以后，删除一个员工的信息
     */
    
    //获取所有额超链接
    var allA = document.getElementsByTagName("a");
    
    //为每个超链接都绑定一个单击响应函数
    for(var i=0 ; i < allA.length ; i++){
        /*
         * for循环会在页面加载完成之后立即执行，
         * 	而响应函数会在超链接被点击时才执行
         * 当响应函数执行时，for循环早已执行完毕
         */
        
        alert("for循环正在执行"+i);
        
        allA[i].onclick = function(){
            
            alert("响应函数正在执行"+i);
            
            //alert(allA[i]);
            
            return false;
        };
        
    }
    
};
