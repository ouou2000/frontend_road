
/*
  // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
  };
*/

// N叉树的前序遍历
var preorder = function(root) {
    const res = [];
    helper(root, res);
    return res;
}

const helper = (root, res) => {
    if (root === null) {
        return;
    }
    res.push(root.val);//与后序遍历的不同点在与push的位置
    for (const ch of root.children) {
        helper(ch, res);
    }
};
//N叉树的后序遍历
var postorder = function(root) {
    const res = [];
        helper(root, res);
        return res;
    }

const helper = (root, res) => {
    if (root == null) {
        return;
    }
    for (const ch of root.children) {
        helper(ch, res);
    }
    res.push(root.val);//与前序遍历的不同点在与push的位置
};

function my()
{
    setTimeout(()=>{
        let a="yes";
        console.log(a);
        inte.next(a);
    },1000)
}
function my1(arr)
{
    setTimeout(()=>{
        let a="no";
        console.log(a+arr)
        inte.next(a);
    },1000)
}
function * gen(){
    var myname=yield my();
    yield my1(myname);
}

var inte=gen();
inte.next();