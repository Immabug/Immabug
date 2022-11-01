
function myFunction(){
    let answer = document.getElementById("answer").value;
        if(answer  == "dexter"){
            alert("Hello dexter kalmamigos");
        }
        else if(answer == "ryan"){
            alert("Hello ryan kalmamigos");
        }
        else if(answer == "joeldon"){
            alert("Hello joeldon kalmamigos");
        }
        else if(answer == "jobert"){
            alert("Hello jobert kalmamigos");
        }
        else if(answer == "jhon"){
            alert("Hello jhon kalmamigos");
        }
        else{
            alert("Hello you are not a member of kalmamigos "+answer);
        }
}
function signIn(){
    let username = document.getElementById("uname").value;
    let password = document.getElementById("password").value;

    if((username == 'kalmamigos')&&(password = "kalmamigos123")){
        window.open("http://127.0.0.1:5500/my%20works/home.html");
    }
    else{
        alert("failed");
    }
}