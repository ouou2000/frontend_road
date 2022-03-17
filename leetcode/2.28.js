//枚举
var requests = [[0,0],[1,1],[0,0],[2,0],[2,2],[1,1],[2,1],[0,1],[0,1]];
var n=3;
var maximumRequests = function(n, requests) {
    const m = requests.length
    let ans = 0
    for(let i = 1; i < 1 << m; i++) {
        const cnts = new Array(n).fill(0)
        let cur = 0, check = true
        for(let j = 0; j < m; j++) {
            if(((1 << j) & i) > 0) {
                cnts[requests[j][0]]++
                cnts[requests[j][1]]--
                cur++
            }
        }
        for(const c of cnts) {
            if(c != 0) {
                check = false
                break
            }
        }
        if(check)
            ans = Math.max(ans, cur)
    }
    return ans
};
var maximumRequests = function(n, requests) {
        var sum=0;
        var from=[];
        var to=[];

        for(let i=0; i<n; i++){
        from[i] = 0;
            to[i] = 0;
        }

        for(let i=0;i<requests.length;i++)
        {
            // if(requests[i][0]==requests[i][1])
            // {
            //     sum++;
            // }
            // for(let j=i;j<requests.length;j++)
            // {
            //     if(requests[i][0]==requests[j][1]&&requests[j][0]==requests[i][1])
            //     {
            //         sum++;
            //         requests.splice(i,1);
            //         requests.splice(j-1,1);
            //     }
            // }
            from[requests[i][0]]++;
            to[requests[i][1]]++;
        }
        for(let i=0;i<from.length;i++)
        {
            if(from[i]!=0&&to[i]!=0)
            {
                if(from[i]>=to[i])
                {sum=sum+to[i];}
                else{
                    sum=sum+from[i];
                }
            }
        }
        //console.log(sum);
        return sum;
}



