//task 0
let getNumbers = (a) => {
    let b = [];
    for(let i =0;i<a.length;i++){
           if(!isNaN(a[i])){
           b.push(parseInt(a[i]));
           }
    }
    return b;
}
//task 1
function findTypes(){
	let x;
	let obj = [];
    for(let index in arguments){
      if (!arguments.hasOwnProperty(index)){
         continue;
      }
		x = typeof arguments[index];
		if(x in obj){
            obj[x]++;
        } else{
			obj[x] = 1;
		}
	}
	return obj;    	
}
//task 2
let executeforEach = (arr, call) => {
    for (let i=0; i<arr.length; i++) {
		arr[i] = call(arr[i]);
	}
}
// //task 3
let mapArray = (arr, call) => {
    executeforEach(arr,call);
    return arr;
}

//task 4
let filterArray = (arr,call) => {
    let array = [];
    executeforEach(arr,function(arg){
       if(call(arg)){
          array.push(arg);
       }
    });
    return array;
}
// //task 5
let showFormattedDate = date => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return 'Date: '+months[date.getMonth()]+' '+date.getDate() + ' ' + date.getFullYear();
}
// //task 6 
let canConvertToDate = stringDate => { 
	return !isNaN(Date.parse(stringDate));
}
// //task 7
let daysBetween = (firstDate,secondDate) => {
    let magic60 = 60;
    let magic1000 = 1000;
    let magic24 = 24;
    let days = Math.round((Date.parse(secondDate)-Date.parse(firstDate))/(magic1000*magic60*magic60*magic24));
	return days;
}
//task 8
 let getAmountOfAdultPeople = people => {
	const curentDay = new Date();
	let yearsOfPeople = [];
    let countOfPeople;
    const eighteen = 18;
    let daysofYear = 365;
    for (let index in people) {
      if (!people.hasOwnProperty(index)){
        continue;
     }
		let years = daysBetween(people[index][' birthday '], curentDay)/daysofYear;
			yearsOfPeople.push(years)
	}
	countOfPeople = filterArray(yearsOfPeople,function(el){
        return el>eighteen;
    });
	return countOfPeople.length;
}
// task 9
let keys = obj => {
	let amountKeys = [];
	for(let key in obj){
    if (!obj.hasOwnProperty(key)){
      continue;
   }
	amountKeys.push(key); 
	}
	return amountKeys;
}
//task 10
let values = obj => {
  let amountValues = [];
	for(let value in obj){
    if (!obj.hasOwnProperty(value)){
      continue;
   }
	amountValues.push(obj[value]); 
	}
	return amountValues;
}