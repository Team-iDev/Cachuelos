/*MODEL BOXES(REGISTER,LOGIN)*/
var bgRegister = document.getElementById("infoRegister").parentNode;
var btnRegister = document.getElementById("btnRegister");
var bgLogin = document.getElementById("infoLogin").parentNode;
var btnLogin = document.getElementById("btnLogin");
	function hideElement(e) {
		e.classList.add("hidden");
	}
	function showElement(e) {
		e.classList.remove("hidden");
	}
	function toggleElement(e) {
		console.log("click");
		if( e.style.visibility != 'visible' ) {
			showElement(e);
			return;
		} else {
			hideElement(e);
			return;
		}
	}
bgRegister.addEventListener("click", () => { toggleElement( bgRegister ) });
btnRegister.addEventListener("click", () => { toggleElement( bgRegister ) });
bgLogin.addEventListener("click", () => { toggleElement( bgLogin ) });
btnLogin.addEventListener("click", () => { toggleElement( bgLogin ) });
/*HEADER ONSCROLL*/
var html = document.documentElement;
	window.onscroll = function(){
		if(html.scrollTop > 200){
			document.getElementById("nav").style.background="#1f618d";
		} else {
			document.getElementById("nav").style.background="none";
		}
	}
/*MENU RESPONSIVE*/
var mobilemenu = document.getElementById("mobilemenu");
var ulMobileMenu = document.getElementById("ulMobileMenu");
var menu_bars = document.getElementById("menu_bars");
var boxLogo = document.getElementById("boxLogo");
var navbar = document.getElementById("navbar");
var liIniciarSesion = document.getElementById("liIniciarSesion");
var liRegistrarse = document.getElementById("liRegistrarse");
var closeMobileMenu = document.getElementById("closeMobileMenu");
menu_bars.addEventListener("click",function(){
	mobilemenu.classList.remove("hidden");
	menu_bars.classList.add("hidden");
	boxLogo.classList.add("hidden");
	ulMobileMenu.classList.add("col");
	navbar.classList.add("menu_mobile");
	liIniciarSesion.classList.remove("hidden");
	liRegistrarse.classList.remove("hidden");
	closeMobileMenu.classList.remove("hidden");
});
closeMobileMenu.addEventListener("click", function(){
	mobilemenu.classList.add("hidden");
	navbar.classList.remove("menu_mobile");
	toggleElement(boxLogo);
	toggleElement(menu_bars);
});


