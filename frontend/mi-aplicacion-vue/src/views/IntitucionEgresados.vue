<script>
// const graduates = [
//     {
//         name: "Luis Enyel Ivanol",
//         username: "@LuisEnyel",
//         website: "Web Devaloupe",
//         profile: "ver_perfil.html",
//         image: "profile1.jpg",
//         specialty: "software",
//         skills: ["javascript", "react"],
//         favorite: false
//     },
//     {
//         name: "Luis Enyel Ivanol",
//         username: "@LuisEnyel",
//         website: "Web Devaloupe",
//         profile: "ver_perfil.html",
//         image: "profile1.jpg",
//         specialty: "software",
//         skills: ["javascript", "react"],
//         favorite: false
//     },
//     // Agrega más egresados
// ];

const gallery = document.querySelector(".gallery");

function createCard(graduate) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${graduate.image}" alt="${graduate.name}">
        <h2>${graduate.name}</h2>
        <p>${graduate.username}</p>
        <p>${graduate.website}</p>
        <a href="${graduate.profile}">Ver Perfil</a>
        <button class="favorite-button ${graduate.favorite ? "active" : ""}"><i class="fas fa-heart"></i></button>
    `;

    const favoriteButton = card.querySelector(".favorite-button");
    favoriteButton.addEventListener("click", () => {
        favoriteButton.classList.toggle("active");
        graduate.favorite = !graduate.favorite;
    });

    return card;
}

function renderGraduates(graduatesToRender) {
    gallery.innerHTML = "";
    graduatesToRender.forEach(graduate => {
        const card = createCard(graduate);
        gallery.appendChild(card);
    });
}

renderGraduates(graduates);

// Funcionalidad de filtrado (ejemplo básico)
const specialtyFilter = document.getElementById("specialty");
const skillsFilter = document.getElementById("skills");
const dateFilter = document.getElementById("date");

function applyFilters() {
    const selectedSpecialty = specialtyFilter.value;
    const selectedSkills = skillsFilter.value;
    const selectedDate = dateFilter.value;

    const filteredGraduates = graduates.filter(graduate => {
        // Lógica de filtrado 
        return graduate.specialty === selectedSpecialty || selectedSpecialty === "all";
    });

    renderGraduates(filteredGraduates);
}

specialtyFilter.addEventListener("change", applyFilters);
skillsFilter.addEventListener("change", applyFilters);
dateFilter.addEventListener("change", applyFilters);
</script>
<template>
   <h1>Nuestros Egresados</h1>
    <header>
       
        <div class="filter-options">
            <label for="specialty">Filtrar por:</label>
            <select id="specialty">
                <option value="all">Especialidad</option>
                <option value="software">Ingeniería de Software</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="arquitecto">Arquitecto web</option>
                <option value="movil">Movil Developer</option>
                <option value="designer">web Designer</option>
                </select>
            <select id="skills">
                <option value="all">Habilidades</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="react">React</option>
                <option value="vue">Vue.js</option>
                <option value="c#">c#</option>
                </select>
            <input type="date" id="date">
        </div>
    </header>
    <main>
    <div class="gallery">
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Luis Enyel Ivanol">
            <h2>Luis Enyel Ivanol</h2>
            <p>@LuisEnyel</p>
            <p>Web Devaloupe</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Luis Enyel Ivanol">
            <h2>Luis Enyel Ivanol</h2>
            <p>@LuisEnyel</p>
            <p>Web Devaloupe</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Nombre del egresado">
            <h2>Nombre del egresado</h2>
            <p>@username</p>
            <p>Sitio web</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Nombre del egresado">
            <h2>Nombre del egresado</h2>
            <p>@username</p>
            <p>Sitio web</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Nombre del egresado">
            <h2>Nombre del egresado</h2>
            <p>@username</p>
            <p>Sitio web</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Nombre del egresado">
            <h2>Nombre del egresado</h2>
            <p>@username</p>
            <p>Sitio web</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Nombre del egresado">
            <h2>Nombre del egresado</h2>
            <p>@username</p>
            <p>Sitio web</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
        <div class="card">
            <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Nombre del egresado">
            <h2>Nombre del egresado</h2>
            <p>@username</p>
            <p>Sitio web</p>
            <a href="ver_perfil.html">Ver Perfil</a>
            <button class="favorite-button"><i class="fas fa-heart"></i></button>
        </div>
    </div>
</main>
    
    
</template>
<style>
body {
    font-family: sans-serif;
    margin: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter-options {
    display: flex;
    align-items: center;
}

.filter-options label {
    margin-right: 10px;
}

.filter-options select,
.filter-options input[type="date"] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

main {
    padding: 20px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
}

.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.card h2 {
    margin-bottom: 5px;
}

.card p {
    margin-bottom: 10px;
    font-size: 0.9em;
}

.card a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.favorite-button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ccc;
    font-size: 1.2em;
}

.favorite-button.active {
    color: red;
}

/* ... (estilos CSS) ... */

/* Estilos para las tarjetas  */
.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    position: relative; /* Para posicionar el botón de favorito */
}

.card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.card h2 {
    margin-bottom: 5px;
}

.card p {
    margin-bottom: 10px;
    font-size: 0.9em;
}

.card a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.favorite-button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ccc;
    font-size: 1.2em;
}

.favorite-button.active {
    color: red;
}
</style>

