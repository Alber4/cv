const contenido = {
    datos: `
        <h2>Datos y contacto</h2>
        <p><strong>Nombre completo:</strong> Alberto Martín-Serrano Garrido</p>
        <p><strong>Fecha de nacimiento:</strong> 20/10/2006</p>
        <p><strong>Email:</strong> albermsg4@gmail.com</p>
        <p><strong>Teléfono:</strong> +34 642 03 83 02</p>
        <p><strong>Dirección:</strong> c/ Escuelas Viejas nº1, Las Casas, Ciudad Real</p>
    `,
    formacion: `
        <h2>Formación</h2>
        <ul>
            <li><strong>Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web</strong><br> IES Maestre de Calatrava (2024-2026)</li>
            <li><strong>Curso de Especialización en Desarrollo de Videojuegos y Realidad Virtual</strong><br> IES Maestre de Calatrava (2026-2027)</li>
            <li><strong>Grado en Ingeniería Informática</strong><br> Universidad de Castilla - La Mancha (2027-2030)</li>
        </ul>
    `,
    experiencia: `
        <h2>Experiencia laboral</h2>
        <ul>
            <li><strong>Desarrollador Web - Prácticas</strong><br> Grupo Solysion (2026)</li>
            <li><strong>Desarrollador Web</strong><br> Grupo Solysion (2026-2029)</li>
            <li><strong>Desarrollador Full Stack</strong><br> NTT Data (2029-2031)</li>
            <li><strong>Desarrollador de Videojuegos</strong><br> Mercury Steam (2031-Actualidad)</li>
        </ul>
    `,
    competencias: `
        <h2>Otras competencias</h2>
        <ul>
            <li>Nivel C1 de Inglés Certificado</li>
            <li>HTML, CSS, JavaScript, PHP, C#, Python, Java</li>
            <li>Uso de frameworks como Bootstrap, Angular, Laravel o Spring</li>
        </ul>
    `
};

// Abrir modal al pulsar botones
document.querySelectorAll('.seccion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.target;
        document.getElementById('modal-texto').innerHTML = contenido[id];
        document.getElementById('modal').classList.remove('oculto');
    });
});

// Cerrar modal
document.getElementById('cerrar').addEventListener('click', () => {
    document.getElementById('modal').classList.add('oculto');
});

// Cerrar al hacer clic fuera
document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') {
        document.getElementById('modal').classList.add('oculto');
    }
});