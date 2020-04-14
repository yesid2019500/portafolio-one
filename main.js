// ANIMACIONES//

window.addEventListener('scroll', function() {
	let animacion = document.getElementById('animado');
	let posicionObj1 = animacion.getBoundingClientRect().top;
	console.log(posicionObj1);
	let tamañoDePantalla = window.innerHeight/2;

	if (posicionObj1 <tamañoDePantalla) {
		animacion.style.animation = "mover 1s ease-out";
	}
})

window.addEventListener('scroll', function() {
	let tecno = document.getElementById('tecnologia');
	let posicionObj2 = tecno.getBoundingClientRect().top;
	console.log(posicionObj2);
	let tamañoPantalla = window.innerHeight/2;

	if (posicionObj2 <tamañoPantalla) {
		tecno.style.animation = "cambiar 1s ease-out";
	}
})
// ANIMACIONES//


// MENU FIJO


window.onscroll= function() {
	const docScrollTop= document.documentElement.scrollTop;
	if(window.innerWidth>991){
		if(docScrollTop>100){
			document.querySelector("header").classList.add('fixed');
		}
		else{
			document.querySelector("header").classList.remove('fixed');	
		}
	}
}
// solucion problema del menu

// navbar active
const navbar = document.querySelector(".navbar");
a =navbar.querySelectorAll("a");

a.forEach(function(element) {
	element.addEventListener("click",function() {
		for(let i=0; i<a.length; i++){
			// a[i].classList.remove("active");
		}

		
	})
})







// efectos de mi galeria de imagenes
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});


