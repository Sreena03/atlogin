/*const showPassword = document.querySelector('#show-password');
const PasswordField = document.querySelector('#password');

showPassword.addEventListener('click',function(e){
    //toggle the type attrinute
    const type=PasswordField.getAttribute('type')==='password' ? 'text':'password';
    PasswordField.setAttribute('type',type);
    //toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});*/
var state=false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        state=false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        state=true;
    }
}