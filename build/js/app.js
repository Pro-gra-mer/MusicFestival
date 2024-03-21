document.addEventListener('DOMContentLoaded', function() {
    iciarApp();
});

function iciarApp() {
    crearGaleria();
};

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `<img src="build/img/thumb/${i}.webp" type="image/webp" alt="imagen galeria">`;
        
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }    
};

// Overlay de imágen
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
        imagen.innerHTML = 
        `<img src="build/img/grande/${id}.webp" type="image/webp" alt="imagen galeria">`;

        const overlay = document.createElement('div');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');

        // Botón para cerrar el modal
        const cerrarModal = document.createElement('p');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');

        cerrarModal.onclick = function() {
            // Quita la clase que bloquea el scroll
            const body = document.querySelector('body');        
            body.classList.remove('fijar-body');
            
            overlay.remove();
        }

        overlay.appendChild(cerrarModal);

        // Se añade al Html
        const body = document.querySelector('body');
        body.appendChild(overlay); 

        // Añade clase que bloquea el scroll
        body.classList.add('fijar-body');   
    }