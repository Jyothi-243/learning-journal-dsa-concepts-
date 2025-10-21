var reverse = function(x) {
    let xCopy = x ;
    let sum = 0;
    let rem ;
    if(x<0){
        x= Math.abs(x);
    } 
    while(x>0){
        rem = x % 10 ;
        sum = sum * 10 +rem ;
        x = Math.floor(x/10);
    }
    let limit = 2**31;

    if (sum<-limit || sum > limit-1) return 0 ; 

    return (xCopy < 0) ? -sum : sum;
};
