var btnRegister = document.getElementById("btnRegister");
var btnLogin = document.getElementById("btnLogin");

function toggleElement(e) {
	e.style.display = e.style.display !=='flex'?'flex':'none';
}

// * Scroll

// ! INFO: El herade no tiene un id, sin embargo es unico. 
// ! Por eso uso la eqtiqueta como identificador. 
// ! P.D. No tenia tildes en el momento que escribi este codigo

// TODO: ver si se puede mejorar esto
if(window.scrollY !== 0) {
	document.getElementsByTagName('header')[0].style.background = 'rgba(31,92,141,50)'

}

// * INFO: segun yo si accedemos al target del evento no usamos el DOM 
window.addEventListener('scroll', e => {
	if(window.scrollY > 0) {
		e.target.getElementsByTagName('header')[0].style.background = 'rgba(31,92,141,50)'
	} else {
		e.target.getElementsByTagName('header')[0].style.background = ''
	}
});


// * Modals
window.addEventListener('click', e => {
    if(e.target.id === 'bgLogin' || e.target.id == 'bgRegister') {
        e.target.style.display = 'none';
    } 
});



btnRegister.addEventListener("click", () => { 
	toggleElement( bgRegister ) 
});

btnLogin.addEventListener("click", () => { 
	toggleElement( bgLogin ) 
});


