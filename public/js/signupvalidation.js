let email=document.getElementById("inputEmail4");
let pwd=document.getElementById("inputPassword4");
let conpwd=document.getElementById("inputconPassword4");
let phno=document.getElementById("inputPhone4");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let error4=document.getElementById("error4");
let flag=0;
function validate(){
    let regexp1=/^([A-Za-z0-9\._!#$%&*+/=?^{|}~-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp2=/^([A-Za-z0-9\._!#$%&*+@/=?^{|}~-]{7,14})$/
    let regexp3=/^([0-9]{10})$/
    let regexp4=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        if(regexp1.test(email.value)){
            error1.innerHTML='valid email id';
            error1.style.color='green';
            error1.style.border='2px solid green';
            flag+=1;
            }
            else{
            error1.innerHTML='invalid email id';
            error1.style.color='red';
            error1.style.border='2px solid red';
            flag=0;
            }
         if(regexp2.test(pwd.value)){
                error2.innerHTML='valid password';
                error2.style.color='green';
                error2.style.border='2px solid green';
                flag+=1;
                }
                else{
                error2.innerHTML='password is too short';
                error2.style.color='red';
                error2.style.border='2px solid red';
                flag=0;
                }
        if(pwd.value==conpwd.value){
            error3.innerHTML='valid';
            error3.style.color='green';
            error3.style.border='2px solid green';
            flag+=1;
            }
            else{
            error3.innerHTML='password does not match';
            error3.style.color='red';
            error3.style.border='2px solid red';
            flag=0;
            }
        if((regexp3.test(phno.value))||(regexp4.test(phno.value))){
            error4.innerHTML='valid phone number';
            error4.style.color='green';
            error4.style.border='2px solid green';
            flag+=1;
            }
            else{
            error4.innerHTML='invalid phone number';
            error4.style.color='red';
            error4.style.border='2px solid red';
            flag=0;
            }
    if(flag==4){
    return true;
    }
    else{
    return false;
    }
}