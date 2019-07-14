let getMin = (...a) => { 
    let min = a[0];
    for(let i = 0;i<a.length+1;i++){
        if(a[i]<min){
        min = a[i];
        }
    }
    return min;
}
getMin(3, 0, -3);