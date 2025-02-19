import Vue from 'vue';
import VueRouter from 'vue-router';
import PaginaEstudiantes from '../views/PaginaEstudiantes.vue';
import PaginaProfesores from '../views/PaginaProfesores.vue';
import PaginaInstituciones from '../views/PaginaInstituciones.vue';
import EstudianteInicio from '../views/EstudianteInicio.vue';
import EstudiantePerfil from '../views/EstudiantePerfil.vue';
import PaginaProfesores from '../views/PaginaProfesores.vue';

Vue.use(VueRouter);

const routes = [
  { path: 'PaginaEstudiantes', component: PaginaEstudiantes },
  { path: '/profesores/PaginaProfesores', component: PaginaProfesores },
  { path: '/instituciones', component: PaginaInstituciones },
   { path: '/instituciones', component: PaginaInstituciones },
  // ... otras rutas
  { path: '/estudiante', component: EstudianteInicio }, 
  // O
  { path: '/estudiante/inicio', component: EstudianteInicio }, 
];

const router = new VueRouter({
  routes,
  mode: 'history' 
});

export default router;