
const timeout= 5000;
var modalSignup = document.getElementsByClassName("modal-signup")[0];
var closeModalSignup = document.getElementsByClassName("close-modal-signup")[0];
var subscribeBtn = document.getElementById("to_subscribe");

window.addEventListener("click",function(event){
    if (event.target.className==="modal-signup") {
        modalSignup.style.display= "none";
    }
})

window.onload=function(){
    setTimeout(function(){ 
        modalSignup.style.display= "block"; 
    }, timeout);
};

closeModalSignup.addEventListener('click',function(){
    modalSignup.style.display= "none";
});

subscribeBtn.addEventListener('click',function(){
    window.location.href="subscribe.html";
});
