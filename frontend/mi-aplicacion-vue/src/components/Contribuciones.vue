<script></script>
<template>
     <div class="post">
        <div class="user-info">
            <img src="profile.jpg" alt="Foto de perfil">
            <div class="user-details">
                <h3>Luis Enyel Ivanol</h3>
                <p>@LuisEnyel</p>
            </div>
            <span class="date">Hace 3 horas</span>
        </div>
        <div class="post-content">
            <p>
                <strong>Topic:</strong> Cómo hacer un menú responsive?
                <br>
                Un menú responsive se adapta a distintos tamaños de pantalla usando HTML, CSS y JavaScript. En pantallas grandes, los enlaces se muestran en línea, mientras que en móviles se ocultan y aparecen con un botón de menú hamburguesa. Esto se logra con CSS (media queries) para cambiar el diseño y JavaScript para alternar la visibilidad del menú cuando el usuario hace clic en el botón. Así, la navegación es accesible y funcional en cualquier dispositivo. 
                <i class="fas fa-heart"></i> 50
                <i class="fas fa-retweet"></i> 100
            </p>
        </div>
    </div>
    <div class="post">
        <div class="user-info">
            <img src="profile.jpg" alt="Foto de perfil">
            <div class="user-details">
                <h3>Luis Enyel Ivanol</h3>
                <p>@LuisEnyel</p>
            </div>
            <span class="date">Hace 3 horas</span>
        </div>
        <div class="post-content">
            <p>
                <strong>Topic:</strong> Cómo hacer un menú responsive?
                <br>
                Un menú responsive se adapta a distintos tamaños de pantalla usando HTML, CSS y JavaScript. En pantallas grandes, los enlaces se muestran en línea, mientras que en móviles se ocultan y aparecen con un botón de menú hamburguesa. Esto se logra con CSS (media queries) para cambiar el diseño y JavaScript para alternar la visibilidad del menú cuando el usuario hace clic en el botón. Así, la navegación es accesible y funcional en cualquier dispositivo. 
                <i class="fas fa-heart"></i> 50
                <i class="fas fa-retweet"></i> 100
            </p>
        </div>
    </div>
    <div class="post">
        <div class="user-info">
            <img src="profile.jpg" alt="Foto de perfil">
            <div class="user-details">
                <h3>Luis Enyel Ivanol</h3>
                <p>@LuisEnyel</p>
            </div>
            <span class="date">Hace 3 horas</span>
        </div>
        <div class="post-content">
            <p>
                <strong>Topic:</strong> Cómo hacer un menú responsive?
                <br>
                Un menú responsive se adapta a distintos tamaños de pantalla usando HTML, CSS y JavaScript. En pantallas grandes, los enlaces se muestran en línea, mientras que en móviles se ocultan y aparecen con un botón de menú hamburguesa. Esto se logra con CSS (media queries) para cambiar el diseño y JavaScript para alternar la visibilidad del menú cuando el usuario hace clic en el botón. Así, la navegación es accesible y funcional en cualquier dispositivo. 
                <i class="fas fa-heart"></i> 50
                <i class="fas fa-retweet"></i> 100
            </p>
        </div>
    </div>
</template>
<style>
body {
    font-family: sans-serif;
    margin: 0;
    background-color: #f4f4f4; /* Gris claro de fondo */
    display: flex;
    flex-direction: column; /* Para que los posts se apilen verticalmente */
    align-items: center; /* Centrar horizontalmente */
    min-height: 100vh; /* Asegurar que el body ocupe toda la pantalla */
}

.post {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    padding: 20px;
    width: 500px; /* Ancho fijo para la publicación */
    margin-bottom: 20px; /* Espacio entre posts */
}

.user-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Imagen circular */
    margin-right: 10px;
}

.user-details {
    flex: 1; /* Para que los detalles del usuario ocupen el espacio disponible */
}

.user-details h3 {
    margin: 0;
}

.user-details p {
    margin: 0;
    font-size: 0.9em;
    color: #777; /* Gris más oscuro para el nombre de usuario */
}

.date {
    font-size: 0.8em;
    color: #777; 
}

.post-content {
    white-space: pre-wrap; 
}

.post-content i {
    margin-left: 10px;
    color: #777; /* Gris más oscuro para los iconos */
}</style>