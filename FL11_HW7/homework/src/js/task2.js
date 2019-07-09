let randomNum,userNum;
let magic100 = 100;
let magic2 = 2;
let magic3 = 3;
let magic4 = 4;
let magic8 = 8; 
let prize = magic100;
let totalPrize = 0;
let attempt = magic3;
let max = 8;
max = Math.floor(max);

let propose = confirm('Do you want to play a game?');

if(propose){
    for(attempt;attempt>0;){
    randomNum = Math.round(Math.random() * max);
    userNum = +prompt(`
    Choose a roulette pocket number from 0 to ${max}\n
    Attempts left:${attempt}
    Total price:${totalPrize}$
    Possible prize on current attempt:${prize}$`,'');
        if(randomNum===userNum){
            totalPrize += prize;
            attempt = magic3;
            if(!confirm(`Congratulation, you won! \nYour prize is:${totalPrize}$.\nDo you want to continue?`)){
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                if(confirm('Do you want to play again?')){
                    attempt = magic3;
                    totalPrize = 0;
                    prize = magic100;
                    max = magic8;
                } else{
                    alert('You did not become a billionaire, but can.');
                    break;
                }
            } else{
                max+=magic4;
                prize*=magic2;
            }
        } else if(attempt === 1){
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            if(confirm('Do you want to play again?')){
                attempt = magic3;
                totalPrize = 0;
                prize = magic100;
                max = magic8;
            } else{
                alert('You did not become a billionaire, but can.');
                break;
            }
        } else{
            attempt--;
            prize = prize/magic2;
        }
    }
} else{
    alert('You did not become a billionaire, but can.');
}