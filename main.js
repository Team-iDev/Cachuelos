var bgRegister = document.getElementById("bgRegister");
var btnRegister = document.getElementById("btnRegister");
var bgLogin = document.getElementById("bgLogin");
var btnLogin = document.getElementById("btnLogin");
var infoRegister = document.getElementById("infoRegister");
var infoLogin = document.getElementById("infoLogin");
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
function pPointer(){
	bgRegister.style.cursor = "pointer";
}
function pDefault(){
	infoRegister.style.cursor = "default";
}
infoRegister.addEventListener("mouseover",pDefault);
infoLogin.addEventListener("mouseover",pPointer);
bgRegister.addEventListener("mouseover",pPointer);
if(bgRegister.style.cursor == "pointer" && bgRegister.click()){
	dReg();
}
btnRegister.addEventListener("click",aReg);
if(bgLogin.style.cursor == "pointer"){
	bgLogin.addEventListener("click",dLog);
}
btnLogin.addEventListener("click",aLog);


