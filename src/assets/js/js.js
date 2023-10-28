let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let formBtn2 = document.querySelector('#signup-btn');
let loginForm = document.querySelector('.login-form-container');
let signupForm = document.querySelector('.signup-container');
let formClose = document.querySelector('#form-close');
let signFormClose = document.querySelector('#signUpForm-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
const imgDiv =document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file =document.querySelector('#file');
const uploadBtn =document.querySelector('#uploadBtn');

file.addEventListener('change',function (){
    const chooseFile = this.file[0];
    if (chooseFile){
        const reader = new FileReader();

        reader.addEventListener('load' , function (){
            img.setAttribute('src' , reader.result);
        })
        reader.readAsDataURL(chooseFile);
    }
})

window.onscroll =()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});
formBtn2.addEventListener('click',()=>{
    signupForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
signFormClose.addEventListener('click',()=>{
    signupForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});