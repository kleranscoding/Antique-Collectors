const showTopBtnHeight = 100*0;

var divSiteMenu = document.getElementsByClassName("toggle-site-menu")[0];
var modalNavbar = document.getElementsByClassName("modal-navbar")[0];
var logo = document.getElementsByClassName("logo")[0];
var topButton = document.getElementById("top_btn");

function displayScrollTop() {
    var displayTop= "none";
    if (document.body.scrollTop > showTopBtnHeight || document.documentElement.scrollTop > showTopBtnHeight) {
        displayTop = "block";
    } 
    topButton.style.display= displayTop;
}

document.getElementById("top_btn").addEventListener('click',scrollToTop);

window.onscroll = function() {displayScrollTop()};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function closeModal(whichModal) {
    whichModal.style.display= "none";
}

function closeSideNav(){
    divSiteMenu.style.display= "none";
    closeModal(modalNavbar);
}

function openSideNav() {
    modalNavbar.style.display= "block";
    divSiteMenu.style.display= "block";
}


document.getElementsByClassName("hamburger")[0].addEventListener('click',openSideNav);

document.getElementsByClassName("close-btn")[0].addEventListener('click',closeSideNav);

logo.addEventListener('click',function(){
    window.location.href="/";
});

window.addEventListener("click",function(event){
    if (event.target.className==="modal-navbar") { 
        if (divSiteMenu.style.display=== "block") { 
            closeSideNav()
        } else {
            closeModal(modalNavbar);
        }
    } 
});


