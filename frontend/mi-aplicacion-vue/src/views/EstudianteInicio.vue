<script>
</script>

<template>
    
   <!-- Contenido -->
<div class="row">
    <div class="content-section active" id="inicio">
        <div class="container mt-4">

        
            <!-- Sección Hero -->
            <div class="hero-section">
                <div class="hero-text">
                    <h1>Bienvenido a <span style="color: #FFD700;">INTRO</span></h1>
                    <p>Estamos cambiando la vida de los jóvenes a través de Semilleros INTRO, un programa de capacitación tecnológica que impacta la vida de 100 jóvenes en 6 meses. Cada estudiante tiene una historia que contar y sueños que cumplir.</p>
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/7657/425e/5a4221c11dde22ad52749ca830ce232f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DVYcrTdgdLAz8rdCXkEU5nx0CDEf6IUJxpdlYfRyaAts1moSGAFqLZg~eM36-R15ji~xlU7pRWwf7A87TE38oVBecsMRPupxRat-Tacu2yyTbFdU5Tzp-0Q11WAK2FZ1mX3Se1Vw8Xsgbev8Occ8aIuUX33SbcZeuCx-fXRKxppuiB93YWT23dTuYItiQkYBXtWYmODJH07Z316pMHoJd7N3JJV-K-FmvLA3F3HGt9zmPQkzpIM4GbyDRMDxAbYb6zfXxampot8-eaxZd9ZzP-ekVLjejHavCM08lPtoLUl27q-1Ohjub-USZaP3YTnPVsVTp~BCxXY271kkOGqFug__" alt="Imagen Representativa" class="hero-image" >
            </div>
        
            <!-- Título de Proyectos Destacados -->
            <h3 class="fw-bold">Proyectos destacados</h3>
        
            <!-- Contenedor de proyectos deslizable -->
            <div class="scroll-container">
                <!-- Tarjeta de Proyecto 1 -->
                <div class="project-card">
                    <img src="https://img.freepik.com/vektoren-kostenlos/anwendung-zum-erlernen-von-sprachen_23-2148624202.jpg" alt="Proyecto">
                    <h5>Name of the project</h5>
                    <p>Descripción breve del proyecto</p>
                    <div class="profile-info">
                        <i class="bi bi-person-circle"></i> Perfil del usuario
                    </div>
                </div>
        
                <!-- Tarjeta de Proyecto 2 -->
                <div class="project-card">
                    <img src="https://miro.medium.com/v2/resize:fit:700/1*5A8FbL_HW1FAInAGDUJBmQ.jpeg" alt="Proyecto">
                    <h5>Name of the project</h5>
                    <p>Descripción breve del proyecto</p>
                    <div class="profile-info">
                        <i class="bi bi-person-circle"></i> Perfil del usuario
                    </div>
                </div>
        
                  <!-- Tarjeta de Proyecto 3 -->
                  <div class="project-card">
                    <img src="https://i.pinimg.com/736x/e5/db/52/e5db5263c9368a84a98ef3eb9f95ac14.jpg" alt="Proyecto">
                    <h5>Name of the project</h5>
                    <p>Descripción breve del proyecto</p>
                    <div class="profile-info">
                        <i class="bi bi-person-circle"></i> Perfil del usuario
                    </div>
                </div>
        
                <!-- Tarjeta de Proyecto 4 -->
                <div class="project-card">
                    <img src="https://i.pinimg.com/736x/e5/db/52/e5db5263c9368a84a98ef3eb9f95ac14.jpg" alt="Proyecto">
                    <h5>Name of the project</h5>
                    <p>Descripción breve del proyecto</p>
                    <div class="profile-info">
                        <i class="bi bi-person-circle"></i> Perfil del usuario
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<style>
   /* Contenido */
   .row {
            flex: 1;
            padding: 15px;
            height: 300%;
        }

        .content-section {
            margin-top: -2%;
            height: 100vh;
            display: none;
            padding: 15px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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


</style>