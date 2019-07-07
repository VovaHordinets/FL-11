let a,b,c;
let result;
a = +prompt('Write a', '');
b = +prompt('Write b', '');
c = +prompt('Write c', '');
if(a>=b+c || b>=a+c || c>=a+b || a<=0 || b<=0 ||c<=0){
    result = 'Triangle doesn\'t exist';
} else if(a===b && b===c && a===c){
    result = 'Eequivalent triangle';
} else if(a===b || a===c || b===c ){
    result = 'Isosceles triangle';
} else{
    result = 'Normal triangle';
}
console.log(result);