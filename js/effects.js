const loginButton = document.querySelector("#login-button"); 
const loginForm = document.querySelector("#login-form");
const registrationForm = document.querySelector("#registration-form");
const registrationFormButton = document.querySelector("#registration-button");

loginButton.addEventListener("click",()=>{
    loginForm.style.display="block";
    registrationForm.style.display="none";
    registrationForm.reset();

});
registrationFormButton.addEventListener("click",()=>{
    registrationForm.style.display="block";
    loginForm.style.display="none";
    loginForm.reset();
});
document.querySelector("#login-close-button").addEventListener("click",()=>{
    loginForm.style.display="none";
    loginForm.reset();
});
document.querySelector("#registration-close-button").addEventListener("click",()=>{
    registrationForm.style.display ="none";
    registrationForm.reset();
});
document.querySelector("#hamburgerIcon img").addEventListener("click",()=>{
    const menuList =document.querySelector("#nav-menu ul");
    const mainSection =document.querySelector("#main-section");
    if(menuList.style.display=="none"){
        menuList.style.display = "flex";
        mainSection.style.height = "150px";
        if(registrationForm.style.display!= "none" || loginForm.style.display !="none")
            registrationForm.style.display=loginForm.style.display="none";
    }
    else{
        menuList.style.display="none";
        mainSection.style.height = "420px";
    }

})