var climbStairs = function(n) {
    let q = [[1,1], [1, 0]]; 
    let res = pow(q, n)
    return res[0][0];
};

function pow(q,n){
    let ret = [[1,0], [0,1]];
    while(n > 0){
        if((n & 1) == 1){
            ret = mul(q, ret)
        }
        n>>=1;
        q = mul(q, q)
    }
    return ret
}

function mul(a, b){
    var result = [];
    for (var i = 0; i < a.length; i++) {
        result[i] = [];
        for (var j = 0; j < b[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

export default climbStairs;