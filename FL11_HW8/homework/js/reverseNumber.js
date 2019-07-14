let reverseNumber = (x) =>{
        x = ''+x;
        let revers = '';
        if(x[0] === '-'){
          revers += '-';
        }
        for(let i =x.length-1; i>=0; i--){
            if(x[i] === '-'){
                continue;
            }
            revers += x[i];
        }
        return +revers;
    }
reverseNumber(123);
