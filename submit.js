function validate() {
    var res=document.getElementById("fname").value 
    if(res.length==0){
        //document.getElementById('msg').innerHTML="**First Name field is empty"
        alert("Name can't be empty");
return false
}
if(res.length<3){
    //document.getElementById("msg").innerHTML="min length should be 3"
    alert("Minimum name length should be of 3 characters");
    return false;
}
if(res.length>15){
    //document.getElementById("msg").innerHTML="max length should be 15"
    alert("Maximum characters shouldn't exceed 15");
    return false;
}

var mail= document.getElementById("email").value
if(mail.indexOf('@')<=0)
{
    alert("Invalid email Id");
    return false;
}
if((mail.charAt(mail.length-4)!='.') && (mail.charAt(mail.length-3)!='.'))
{
    alert("Invalid email Id");
    return false;
}

var res1=document.getElementById("Phone").value 
if(res1.length==0){
    alert("Phone number can't be empty");
    return false;
}
if(res1.length>10){
    alert("Enter valid phone number");
    return false;
}
if(res1.length<10)
{
    alert("Enter valid phone number");
    return false;
}

var pass=document.getElementById("pass1").value 
var cpass=document.getElementById("pass2").value 

if(pass.length==0){
    alert("Password field empty");
    return false;
}
if(cpass.length==0){
    alert("Confirm Password field empty");
    return false;
}
if(pass!=cpass){
    alert("Passwords don't match");
    return false;
}

else {
    return true;
}
}