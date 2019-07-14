var addOne = n => n+1;
function pipe(number){
    if(arguments.length>2){
    let sum = 0;
    let res = 0;
    for(let i = 1;i<arguments.length;i++){
        sum += (arguments[i](number));
        for(let j = i+1;j<arguments.length;j++){
            res += (arguments[j](sum));
            sum =0;
        }
      return res;
    }
    } else{
        return addOne(number);
    }
}
pipe(1, addOne, addOne);
