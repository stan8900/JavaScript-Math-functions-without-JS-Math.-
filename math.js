const math ={
    E:2.4142,
    pi: 3.14,
    abs: function (X){
        if(X>=0) return X
        else return -X
    },
    pow: function (base, power){
    return base ** power
    },
    round: function(X){
        if(X>0.49) return(X+1)
        else return X
    },
    sqrt: function(square){
        const square = (n, i, j) => {
            let mid = (i + j) / 2;
            let mul = mid * mid;
            if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
               return mid;
            }else if (mul < n){
               return square(n, mid, j);
            }else{
               return square(n, i, mid);
            }
         }
    },
    ceil: function(X){
        if(X>=0.1) return(X+1)
    },
    floor: function(X){
        if(X>=0.1) return(X)
    },
    min:function(X,Y){
        if(X>Y) return Y
        else return X
    },
    max:function(X,Y){
        if(X>Y) return X
        else return Y
    },
    random:function(RandomResult){
    const RandomResult = (max_number) => {
        let answer = 0;
        for (let i = 0; i < max_number -1; i++) {
            answer += get_zero_or_one()
        }
        return answer
    }

    }
}