function validate() {
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
var pass=document.getElementById("password").value 

if(pass.length==0){
    alert("Password field empty");
    return false;
}
else {
    return true;
}
}
