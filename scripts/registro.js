let form = document.querySelector('form');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let name = document.getElementById ('name').value;
    let apellido = document.getElementById ('apellido').value;
    let telefono = document.getElementById ('telefono').value;
    let direccion = document.getElementById ('direccion').value;
    let observacion = document.getElementById ('observaciones').value;

    form.reset();

    localStorage.setItem('nombreUsuario', name)
    localStorage.setItem('apellidoUsuario', apellido)
    localStorage.setItem('telefonoUsuario', telefono)
    localStorage.setItem('direccionUsuario', direccion)
    localStorage.setItem('observaciones', observacion)


})
