var bgRegister = document.getElementById("infoRegister").parentNode;
console.log(bgRegister)
var btnRegister = document.getElementById("btnRegister");
var bgLogin = document.getElementById("infoLogin").parentNode;
console.log(bgLogin)
var btnLogin = document.getElementById("btnLogin");
function toggleElement(e) {

	if( e.style.visibility != 'visible' ) {
		showElement(e);
		return;
	} else {
		hideElement(e);
		return;
	}

}

function hideElement(e) {
	e.style.visibility = 'hidden';
}

function showElement(e) {
	e.style.visibility = 'visible'
}

var html = document.documentElement;
	
window.onscroll = function(){
	if(html.scrollTop > 200){
		document.getElementById("nav").style.background="#1f618d";
	} else {
		document.getElementById("nav").style.background="none";
	}
}
bgRegister.addEventListener("click", () => { toggleElement( bgRegister ) });
btnRegister.addEventListener("click", () => { toggleElement( bgRegister ) });
bgLogin.addEventListener("click", () => { toggleElement( bgLogin ) });
btnLogin.addEventListener("click", () => { toggleElement( bgLogin ) });


