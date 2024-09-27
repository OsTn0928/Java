const datos = {  //constante llamada datos
    nombre: "Datos de su empresa",
    direccion: "Dirección de su empresa, Santiago",
    telefono: "Telefono de su empresa +56 9 95830719",
    email: "Correo de su empresa",
    website: "sitio de su empresa"
};

const divDatos = document.getElementById('datos-empresa');
divDatos.innerHTML = `
    <h2>Datos de la Empresa</h2>
    <p><strong>Nombre:</strong> ${datos.nombre}</p>
    <p><strong>Dirección:</strong> ${datos.direccion}</p>
    <p><strong>Teléfono:</strong> ${datos.telefono}</p>
    <p><strong>Email:</strong> <a href="mailto:${datos.email}">${datos.email}</a></p>
    <p><strong>Sitio Web:</strong> <a href="https://liceovvh.cl" target="_blank">${datos.website}</a></p>`;

const btnMostrar = document.getElementById('mostrar');

btnMostrar.addEventListener('click', () => {
    if (divDatos.style.display === 'none') {
        divDatos.style.display = 'block';
        btnMostrar.textContent = 'Ocultar Datos';  // Cambia el texto a "Ocultar Datos"
    } else {
        divDatos.style.display = 'none';
        btnMostrar.textContent = 'Mostrar Datos';  // Cambia el texto a "Mostrar Datos"
    }
});
