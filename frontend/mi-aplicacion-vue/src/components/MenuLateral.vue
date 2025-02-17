<script>
const sidebar = document.getElementById('sidebar'); // El getElementById para llamar al ID
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
</script>
<template>
    <div id="sidebar" class="sidebar">
  <button id="toggle-btn" class="toggle-btn">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <li>INTRO.<strong>edu</strong></li>
        <li><a href="#"><i class="fas fa-home"></i> Inicio</a></li>
        <li><a href="#"><i class="fas fa-user"></i> Perfil</a></li>
        <li><a href="#"><i class="fas fa-briefcase"></i> Servicios</a></li>
        <li><a href="#"><i class="fas fa-envelope"></i> Mensajes</a></li>
        <li><a href="#"><i class="fas fa-tasks"></i> Tareas</a></li>
        <li><a href="#"><i class="fas fa-comments"></i> Foro</a></li>  
        <li><a href="#"><i class="fas fa-chart-line"></i> Dashboard</a></li>
        <li><a href="#"><i class="fas fa-cog"></i> Configuraciones</a></li>
</div>
</template>

<style>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #007bff; /* Azul */
  color: white;
  padding: 20px;
  transform: translateX(-250px); /* Oculto por defecto */
  transition: transform 0.3s ease-in-out;
}

.sidebar.open {
  transform: translateX(0); /* Se muestra al abrir */
}

.toggle-btn {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.toggle-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
}

.menu {
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

.menu li {
  margin-bottom: 30px; /*Espacio de uno al otro */
}

.menu a {
  color: white;
  text-decoration: none;
}
.menu li:hover{
    background-color: rgba(255, 255, 255, 0.733);
    width: auto;
    height:20px;
}

</style>