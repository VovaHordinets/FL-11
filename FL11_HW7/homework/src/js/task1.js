let email,password,newPassword,oldPassword;
let magic5 = 5;
let magic6 = 6;
email = prompt('Write your email','');
if(email==='user@gmail.com'||email==='admin@gmail.com'){
    password =prompt('Write your password','');
    if(password ===''||password===null){
        alert('Canceled.');
    } else if(email==='user@gmail.com' && password ==='UserPass' 
    ||
     email==='admin@gmail.com' && password==='AdminPass'){
       let changePassword = confirm('Do you want to change your password?');
       if(changePassword){
       oldPassword = prompt('Write old password');
            if(oldPassword ===''||oldPassword===null){
            alert('Canceled.');
            } else if(oldPassword===password){
                newPassword = prompt('Write new password','');
                if(newPassword.length<=magic5){
                    alert('It’s too short password. Sorry');
                } else{
                    let confirm = prompt('Write it again','');
                    if(confirm===newPassword){
                        alert('You have successfully changed your password.')
                    } else{
                        alert('You wrote the wrong password');
                    }
                }
            } else{
                alert('Wrong password');
            }
       } else{
           alert('You have failed the change.');
       }
    } else{
        alert('Wrong password');
    }
} else if(email===''||email===null){
    alert('Canceled.');
} else if(email.length<=magic6){
    alert('I don\'t know any emails having name length less than 6 symbols');
} else{
    alert('I don\'t know you');
}