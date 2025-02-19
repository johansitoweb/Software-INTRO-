<!-- <script>
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
 -->

 <template>
    
    <div class="content-section" id="egresados">
        <div class="egresados">
        <header>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="Buscar egresado">
            </div>
            <div class="user-profile">
                <i class="fas fa-bell"></i>
                <span>Perfil de usuario</span>
                <div class="user-status"></div>
            </div>
        </header>
    
        <main>
            <h1>🚀 Nuestros egresados</h1>
    
            <div class="filters">
                <label>Filtrar por:</label>
                <select id="filterSpecialty">
                    <option value="">Especialidad</option>
                    <option value="Web Devaloupe">Web Devaloupe</option>
                    <option value="Diseño Grafico">Diseño Grafico</option>
                </select>
    
                <select id="filterSkills">
                    <option value="">Habilidades</option>
                </select>
    
                <select id="filterDate">
                    <option value="">Fecha</option>
                </select>
            </div>
    
            <section class="graduates">
                <!-- Tarjetas generadas dinámicamente con JavaScript -->
            </section>
        </main></div>
    </div>
 </template>

 <script>
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function showSection(sectionId, element) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.menu-principal ul li').forEach(li => li.classList.remove('active'));
    element.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const graduatesContainer = document.querySelector(".graduates");
    const searchInput = document.getElementById("searchInput");
    const filterSpecialty = document.getElementById("filterSpecialty");
    const filterSkills = document.getElementById("filterSkills");

    // Datos de egresados (simulación)
    const graduates = [
    { name: "Luis Enyel Ivanol", username: "@LuisEnyel", specialty: "Web Development", skills: ["HTML", "CSS", "JavaScript"], img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Ana Pérez", username: "@AnaP", specialty: "Web Development", skills: ["JavaScript", "React"], img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Carlos López", username: "@CarlosL", specialty: "Web Development", skills: ["HTML", "CSS"], img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "María Gómez", username: "@MariaG", specialty: "Graphic Design", skills: ["Photoshop", "UX/UI"], img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Pedro Martínez", username: "@PedroM", specialty: "Web Development", skills: ["Node.js", "CSS"], img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Lucía Fernández", username: "@LuciaF", specialty: "Graphic Design", skills: ["Illustrator", "Branding"], img: "https://randomuser.me/api/portraits/women/6.jpg" },
    { name: "Jorge Ramírez", username: "@JorgeR", specialty: "Mobile Development", skills: ["Flutter", "Dart"], img: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Sofía Herrera", username: "@SofiaH", specialty: "Web Development", skills: ["Vue.js", "CSS"], img: "https://randomuser.me/api/portraits/women/8.jpg" },
    { name: "Martín Castro", username: "@MartinC", specialty: "Data Science", skills: ["Python", "Machine Learning"], img: "https://randomuser.me/api/portraits/men/9.jpg" },
    { name: "Elena Rojas", username: "@ElenaR", specialty: "UI/UX Design", skills: ["Figma", "User Research"], img: "https://randomuser.me/api/portraits/women/10.jpg" },
    { name: "Fernando Díaz", username: "@FernandoD", specialty: "Cybersecurity", skills: ["Ethical Hacking", "Networking"], img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Gabriela Suárez", username: "@GabrielaS", specialty: "Mobile Development", skills: ["Swift", "iOS Development"], img: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "David Gómez", username: "@DavidG", specialty: "Backend Development", skills: ["Node.js", "Express"], img: "https://randomuser.me/api/portraits/men/13.jpg" },
    { name: "Camila Ortega", username: "@CamilaO", specialty: "Marketing Digital", skills: ["SEO", "Social Media"], img: "https://randomuser.me/api/portraits/women/14.jpg" },
    { name: "Rodrigo Méndez", username: "@RodrigoM", specialty: "Data Science", skills: ["SQL", "Power BI"], img: "https://randomuser.me/api/portraits/men/15.jpg" }
];


    // Función para llenar los filtros dinámicamente
    function populateFilters() {
        const specialties = [...new Set(graduates.map(g => g.specialty))];
        const skills = [...new Set(graduates.flatMap(g => g.skills))];

        // Llenar filtro de especialidades
        specialties.forEach(specialty => {
            const option = document.createElement("option");
            option.value = specialty;
            option.textContent = specialty;
            filterSpecialty.appendChild(option);
        });

        // Llenar filtro de habilidades
        skills.forEach(skill => {
            const option = document.createElement("option");
            option.value = skill;
            option.textContent = skill;
            filterSkills.appendChild(option);
        });
    }

    // Función para renderizar egresados
    function renderGraduates(data) {
        graduatesContainer.innerHTML = ""; 
        data.forEach(graduate => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${graduate.img}" alt="${graduate.name}">
                <h3>${graduate.name}</h3>
                <p>${graduate.username}</p>
                <a href="#">${graduate.specialty}</a>
                <p><strong>Habilidades:</strong> ${graduate.skills.join(", ")}</p>
                <span class="favorite"><i class="fa fa-heart"></i></span>
            `;

            card.querySelector(".favorite").addEventListener("click", function () {
                this.classList.toggle("active");
            });

            graduatesContainer.appendChild(card);
        });
    }

    // Función para filtrar egresados
    function filterGraduates() {
        const searchText = searchInput.value.toLowerCase();
        const selectedSpecialty = filterSpecialty.value;
        const selectedSkill = filterSkills.value;

        const filtered = graduates.filter(g => {
            return (
                (searchText === "" || g.name.toLowerCase().includes(searchText)) &&
                (selectedSpecialty === "" || g.specialty === selectedSpecialty) &&
                (selectedSkill === "" || g.skills.includes(selectedSkill))
            );
        });

        renderGraduates(filtered);
    }

    // Agregar eventos a los filtros
    searchInput.addEventListener("input", filterGraduates);
    filterSpecialty.addEventListener("change", filterGraduates);
    filterSkills.addEventListener("change", filterGraduates);

    // Inicializar
    populateFilters();
    renderGraduates(graduates);
});


</script>

<style>
body {
    background-color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    display: flex; 
    overflow-x: hidden;
 
}

        /* Menú principal */
        .menu-principal {
            background-color: rgb(0, 81, 255);
            width: 15%;
            height: 100vh;
            padding-left: 2px;
            padding-top: 20px;
            transition: all 0.3s ease-in-out;
            z-index: 4;
        }

        .menu-principal ul {
            padding: 0;
            margin: 0;
        }

        .menu-principal ul li {
            list-style: none;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            transition: background-color 0.3s ease;
            cursor: pointer;
        }

        .menu-principal ul li:hover,
        .menu-principal ul li.active {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .menu-principal ul li i {
            color: white;
        }

        .menu-principal ul li a {
            color: white;
            text-decoration: none;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .menu-principal ul li a:hover {
            color: wheat;
        }

        /* Botón de menú hamburguesa */
        .menu-toggle {
            display: none;
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            z-index: 10;
        }

        /* Contenido */
        .row {
            flex: 1;
            padding: 15px;
            height: 300%;
        }

        .content-section {
         
            display: none;
            padding: 15px;
        
        }

        .content-section.active {
            display: block;
        }

        /* Sección Hero */
        .hero-section {
            background: linear-gradient(to right, #1e3c72, #2a5298);
            color: white;
            padding: 30px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        .hero-text {
            max-width: 50%;
        }

        .hero-text h1 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        .hero-image {
            width: 300px;
            border-radius: 10px;
        }

        /* Contenedor deslizable */
        .scroll-container {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            padding: 20px 0;
            white-space: nowrap;
            scroll-behavior: smooth;
        }

        .scroll-container::-webkit-scrollbar {
            display: none;
        }

        /* Tarjetas de proyectos */
        .project-card {
            flex: 0 0 auto;
            width: 30%; 
            height: 320px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 15px;
            text-align: center;
        }

        .project-card img {
            width: 90%;
            height: 180px;
            background: #ccc;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        .project-card p {
            font-size: 80%;
            color: #555;
        }

        .profile-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            font-size: 0.8rem;
            margin-top: 10px;
        }

        .profile-info i {
            font-size: 1rem;
            color: gray;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .menu-principal {
                width: 0;
                overflow: hidden;
                position: fixed;
                height: 100vh;
                z-index: 100;
            }

            .menu-principal.active {
                width: 60%;
                padding-top: 20px;
            }

            .menu-toggle {
                display: block;
            }
        }
.portada-perfil{
    background-image: url(fondo.jpg);
    width: 85%;
    height: 30vh;
    margin-left: -1%;
 
}    

.perfil-container{
margin-top: -10%;
}
        .profile-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 70%;
        }

        .profile-card img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
        }

        .profile-links a {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: #007bff;
            padding-top: 5%;
        }

        .projects-container {
            display: flex;
            overflow-x: auto;
            white-space: nowrap;
            scroll-behavior: smooth;
            padding: 1px;
            scrollbar-width: none; /* Oculta la barra de scroll en Firefox */
            -ms-overflow-style: none; /* Oculta la barra en Edge */
            cursor: grab;
        }

        .projects-container::-webkit-scrollbar {
            display: none; /* Oculta la barra de scroll en Chrome y Safari */
        }

        .project-card-perfil {
            flex: 0 0 auto;
            width: 250px;
            margin-right: 15px;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }

        .project-card-perfil img {
            width: 100%;
            border-radius: 10px;
        }

        .project-card-perfil:hover {
            transform: scale(1.05);
        }
        .col-md-8{
            margin-left: -10%;
            margin-top: 10%;
        }



        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background: white;
        }
        
        .search-bar {
            display: flex;
            align-items: center;
            background: #ddd;
            border-radius: 20px;
            padding: 5px 10px;
        }
        
        .search-bar input {
            border: none;
            background: none;
            outline: none;
            padding: 5px;
        }
        
        .user-profile {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .user-status {
            width: 10px;
            height: 10px;
            background: gray;
            border-radius: 50%;
        }
        
        /* Título */
        h1 {
            text-align: left;
            padding: 20px;
        }
        
        /* Filtros */
        .filters {
            display: flex;
            gap: 10px;
            padding: 10px 20px;
        }
        
        select {
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        
        /* Tarjetas de egresados */
        .graduates {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        
        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
        }
        
        .card img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-left: 25%;
        }
        
        .card h3 {
            margin: 10px 0;
            font-size: 100%;
        }
        
        .card a {
            color: blue;
            text-decoration: none;
        }
        
        .card .favorite {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 20px;
            color: #ccc;
        }
        
        .card .favorite.active {
            color: red;
        }

        .content-section .egresados{
            margin-left: -95%;
        }
        </style>