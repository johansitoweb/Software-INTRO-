<script></script>
<template>
     <div class="container">
        <aside class="sidebar">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Foto de perfil">
            <div class="user-info">
             <p><i class="fas fa-map-marker-alt"></i> Santo Domingo Norte</p>
<p><i class="fas fa-graduation-cap"></i> Ing. Software</p>
<p><i class="fab fa-linkedin"></i> Luis Enyellvanol</p>
<p><i class="fab fa-github"></i> Luis Enyellvanol</p>
<p><i class="fas fa-envelope"></i> LuisEnyel@gmail.com</p>
<p><i class="fas fa-globe"></i> www.LuisEnyellvanol.com</p>
                <button>Más información</button>
            </div>
        </aside>
        <main class="content">
            <nav>
                <ul>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contribuciones</a></li>
                    <li><a href="#">Logros</a></li>
                </ul>
            </nav>
            <section class="projects">
                <div class="project">
                    <img src="" alt="Imagen del proyecto">
                    <h3>Título del proyecto</h3>
                    <p>Descripción detallada del proyecto, su funcionalidad y demás.</p>
                </div>
                <div class="project">
                    <h3>Título del proyecto</h3>
                    <p>Descripción detallada del proyecto, su funcionalidad y demás.</p>
                </div>
                <div class="project">
                    <h3>Título del proyecto</h3>
                    <p>Descripción detallada del proyecto, su funcionalidad y demás.</p>
                </div>
                <div class="project">
                    <h3>Título del proyecto</h3>
                    <p>Descripción detallada del proyecto, su funcionalidad y demás.</p>
                </div>
            </section>
        </main>
    </div> 
</template>

<style>
body {
    font-family: sans-serif;
    margin: 0;
    background-color: #f4f4f4; /* Gris claro de fondo */
}

.container {
    display: flex;
    max-width: 960px;
    margin: 20px auto;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.sidebar {
    width: 300px;
    padding: 20px;
    background-color: #f8f8f8; /* Gris muy claro para la barra lateral */
}

.sidebar img {
    width: 200px;
    height: 200px;
    border-radius: 50%; /* Para hacer la imagen circular */
    object-fit: cover; /* Para que la imagen se ajuste al círculo sin deformarse */
    display: block;
    margin: 0 auto 20px;
}

.user-info {
    text-align: center;
}

.user-info h2 {
    margin-bottom: 10px;
}

.user-info p {
    margin: 5px 0;
    font-size: 0.9em;
}

.user-info button {
    background-color: #007bff; /* Azul */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.content {
    flex: 1; /* Para que el contenido principal ocupe el resto del espacio */
    padding: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
}

nav li a {
    text-decoration: none;
    color: #333; /* Gris oscuro para los enlaces */
    padding: 10px;
}

.projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Dos columnas */
    grid-gap: 20px;
    margin-top: 20px;
}

.project {
    border: 1px solid #ddd; /* Borde muy ligero */
    padding: 20px;
    border-radius: 5px;
}

.project h3 {
    margin-bottom: 10px;
}

.project img {
    width: 100%; /* La imagen ocupa todo el ancho de la tarjeta */
    height: auto; /* La altura se ajusta proporcionalmente */
    object-fit: cover; /* La imagen cubre todo el espacio, recortando si es necesario */
    border-radius: 5px 5px 0 0; /* Bordes redondeados en la parte superior */
    margin-bottom: 10px; /* Espacio entre la imagen y el título */
}</style>