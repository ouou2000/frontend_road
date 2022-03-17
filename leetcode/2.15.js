var matrix = [[3,6],[7,1],[5,2],[4,8]];
var re= function(matrix){
    const re=[];
    let m=matrix.length;let n=matrix[0].length;
    var isMax=true;
    var isMin=true;
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            isMax=true;
            isMin=true;
            for(let k=0;k<n;k++)
            {
                if(matrix[i][j]>matrix[i][k])
                {
                    isMin=false;
                    break;
                }
            }
            if(isMin)
            {
                for(let l=0;l<m;l++)
                {
                    if(matrix[i][j]<matrix[l][j])
                    {
                        isMax=false;
                        break;
                    }
                }

            }
            if(isMax&&isMin)
            {
                re.push(matrix[i][j]);
            }
        }
    }
    return re;
}
console.log(re(matrix));

function Person(age,name)
{
    this.age=age;
    this.name=name;
    
}
Person.prototype.sayName=function() {
    console.log(this.name);
}

var my=new Person(18,"小欧");
my.sayName();
var aa=13;
aa=aa.toString();
console.log(typeof aa)

