const s = "***|**|*****|**||**|*";
const queries = [[1,17],[4,5],[14,17],[5,11],[15,16]];



var result=[];
// 官方解
var platesBetweenCandles = function(s, queries) {
    const n = s.length;
    const preSum = new Array(n).fill(0);
    for (let i = 0, sum = 0; i < n; i++) {
        if (s[i] === '*') {
            sum++;
        }
        preSum[i] = sum;
    }
    const left = new Array(n).fill(0);;
    for (let i = 0, l = -1; i < n; i++) {
        if (s[i] === '|') {
            l = i;
        }
        left[i] = l;
    }
    const right = new Array(n).fill(0);;
    for (let i = n - 1, r = -1; i >= 0; i--) {
        if (s[i] === '|') {
            r = i;
        }
        right[i] = r;
    }
    const ans = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const x = right[query[0]], y = left[query[1]];
        ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];
    }
    return ans;
};
// 超时算法
queries.forEach(function(queries){
    var left=-1;
    var right=-1;
    var sum=0;
    for(let i=queries[0];i<queries[1];i++)
    {
        if(s[i]==='|')
        {
            if(left==-1)
            {
                left=i;
            }
        }
        if(s[queries[1]+queries[0]-i]==='|')
        {
           if(right==-1)
           {
               right=queries[1]+queries[0]-i;
           }
        }
        if(left!=-1&&right!=-1)
        {
            break;
        }
    }
    for(let i=left;i<right+1;i++)
    {
        if(s[i]==='*'){
            sum++;
        }
    }
    result.push(sum);
})
return result;
console.log(result);