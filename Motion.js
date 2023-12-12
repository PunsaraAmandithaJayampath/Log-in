
document.getElementById("btn-submit").onclick = function(){
    
    let txtUserName=document.getElementById("txtUserName").value
    if(txtUserName=="punsara" | Password=="123"){
        document.getElementById("pMessage").innerHTML="Login Sucssess.."
    }
    
    else{
        document.getElementById("pMessage").innerHTML="Login failed..Try again."
    }

    
}
