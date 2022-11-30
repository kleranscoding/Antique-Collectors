
var requiredInput = document.getElementsByClassName("required");
var warning = document.getElementsByClassName("warning");
var warningText = [
    "Oh no! We\'ll need your name.",
    "Oops! We\'ll need this for sign up.",
    "Oops! We\'ll need your email."
];
var errorMsg = [
    "Oops! We'll need at least two characters.",
    "Oops! We'll need at least two characters.",
    "Oops! The email needs only one @ & ."
];

const regexName = /^[a-zA-Z]{2,}$/i;
const regexEmail = /^[a-zA-Z0-9_%+-]{2,}@[a-zA-Z0-9-_]{2,}.[a-zA-Z0-9-_]{2,}$/i;


function validateSpace(text) {
    return /\s/g.test(text);
}

for (var i=0;i<requiredInput.length;i++) {
    (function(i){
        requiredInput[i].addEventListener("blur",function(event){
            // show error if value is empty
            if (event.target.value.replace(/\s/g,"")==="") {
               //warning[i].innerHTML = warningText[i];
                //warning[i].style.display= "block";
                //return;
            }
            if (i===1 || i===0) {
                if (!regexName.test(event.target.value)) {
                    warning[i].innerHTML = errorMsg[i];
                    warning[i].style.display= "block";
                    return;
                }
            } else if (i===2) {
                if (!regexEmail.test(event.target.value)) {
                    warning[i].innerHTML = errorMsg[i];
                    warning[i].style.display= "block";
                    return;
                }
            }
        });
        requiredInput[i].addEventListener("focus",function(event){
            // remove warnings
            warning[i].style.display= "none";
            warning[i].innerHTML = "";
            // check if previous fields have been filled
            if (i>0) {
                for (var j=0;j<i;j++) {
                    if (requiredInput[j].value.replace(/\s/g,"")==="") {
                        warning[j].innerHTML = warningText[j];
                        warning[j].style.display= "block";
                    }
                } 
            }
        });
    }(i));
    
}




$('#mce-success-response').bind("DOMSubtreeModified",function(){
    //document.getElementsByClassName("modal-success")[0].style.display= "block";
    //document.getElementsByClassName("circle-signup")[0].style.display= "block";
  });

  window.addEventListener("click",function(event){
    if (event.target.className==="modal-success") {
        document.getElementsByClassName("modal-success")[0].style.display= "none";
        window.location.href="/";
    }
})

document.getElementById("to_home").addEventListener("click",function(){
    window.location.href="/";
})