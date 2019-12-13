// SOURCE OF THIS CODE IS https://www.geeksforgeeks.org/form-validation-using-html-javascript/

<script> 
function GEEKFORGEEKS()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var address = document.forms["RegForm"]["Address"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name.")}
        name.focus(); 
        return false; 
    }
   
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address.")}
        email.focus(); 
        return false; 
     
   
    return true; 
}</script> 
