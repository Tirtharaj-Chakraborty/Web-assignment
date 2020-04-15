function validate(){
    var uname = document.getElementById("uname");
    var password = document.getElementById("pass");
    
    if(uname.value.trim()=="")
    {
        alert("Blank Email");
        uname.style.border = "solid 3px red";
        return false;
    }
    else if(password.value.trim()=="")
        {
            alert("Blank Password");
            password.style.border = "solid 3px red";
            return false;
        }
    else if(password.value.trim().length<5)
    {
        alert("Password is too short");
         password.style.border = "solid 3px red";
        return false;
    }
    else
    {
        return true;
    }
}