// onclick full nav bar open button
const menubtn = document.querySelector('#menubtn');
const fullnavbar = document.querySelector(".fullnav");
const logo = document.querySelector('#logo');
menubtn.addEventListener('click',()=>{
    fullnavbar.style.display='flex';
    logo.style.display='none'
    menubtn.style.display='none'
})

// onclick close the full nav bar button
const closebtn = document.querySelector("#closebtn");
closebtn.addEventListener('click',()=>{
    fullnavbar.style.display='none';
    logo.style.display='flex'
    menubtn.style.display='flex'
})

// clickable on the signup button for signup sheet
const signupbtn = document.querySelector('#signup1');
const formsheet = document.querySelector('#signup_page');
const navbar = document.querySelector('.navbar');
signupbtn.addEventListener('click',()=>{
    formsheet.style.display='flex'
    navbar.style.display='none'
})
// clickable closing button for signup
const closebtn2 = document.querySelector(".fulllist_btn2");
closebtn2.addEventListener('click',()=>{
    formsheet.style.display='none'
    navbar.style.display='flex'
})

//clickable on the login button for login sheet
const loginbtn = document.querySelector('#login1');
const loginsheet = document.querySelector('#login_page');
    loginbtn.addEventListener('click',()=>{
        loginsheet.style.display='flex'
        navbar.style.display='none'
    })

//clickable closing btn for login sheet
const loginclosebtn = document.querySelector('#login_closebtn');
    loginclosebtn.addEventListener('click',()=>{
        loginsheet.style.display='none'
        navbar.style.display='flex'
    })

////clickable buttons for the full screen navigation bar
// clickable on the signup button for signup sheet
const signupbtn2 = document.querySelector('#signup');
const formsheet2 = document.querySelector('#signup_page');
const navbar2 = document.querySelector('.navbar');
signupbtn2.addEventListener('click',()=>{
    formsheet2.style.display='flex'
    navbar2.style.display='none'
})

//clickable on the login button for login sheet
const loginbtn2 = document.querySelector('#login');
const loginsheet2 = document.querySelector('#login_page');
    loginbtn2.addEventListener('click',()=>{
        loginsheet2.style.display='flex'
        navbar2.style.display='none'
    })  
