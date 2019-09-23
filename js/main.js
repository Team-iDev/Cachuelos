var bgRegister = document.getElementById("bgRegister");
var btnRegister = document.getElementById("btnRegister");
var bgLogin = document.getElementById("bgLogin");
var btnLogin = document.getElementById("btnLogin");
function aReg(){
	bgRegister.style.visibility = "visible";
}
function dReg(){
	bgRegister.style.visibility = "hidden";
}
function aLog(){
	bgLogin.style.visibility = "visible";
}
function dLog(){
	bgLogin.style.visibility = "hidden";
}
bgRegister.addEventListener("click",dReg);
btnRegister.addEventListener("click",aReg);
bgLogin.addEventListener("click",dLog);
btnLogin.addEventListener("click",aLog);


