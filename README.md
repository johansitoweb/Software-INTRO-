# Software-INTRO-Plataforma
Integrantes y roles
Jhon y Johan

Jhon 
Frontend Developer , Designer UI y UX y Backend Developer

Johan
Frontend Developer , Backend Developer , DevOps y QA tester 

Techologias y Herramientas involucradas
Vue.js , Nodejs , javascript , css , Bootstrap , Express , mysql , Api,  mcv , docker, github action o jenkis, mongodb y web components 

mi-proyecto/

├── backend/  (Para Node.js y Express)

└── frontend/ (Para Vue.js con Vite)
```
cd frontend
npm init vite@latest mi-aplicacion-vue --template vue
```
O si prefieres usar yarn:
```
cd frontend
yarn create vite mi-aplicacion-vue --template vue
```
Instala las dependencias:
```
cd mi-aplicacion-vue
npm install
```
Para documentar la Api
https://jsdoc.app/about-getting-started

Diseño en Figma
https://www.figma.com/design/xaUL1Iy69V8Zd579kreTIH/Untitled?node-id=0-1&p=f&t=B2IQfAltGFAkC0PI-0

```
<template>
  <div id="app">
    <nav>
      <router-link to="/estudiantes">Estudiantes</router-link> |
      <router-link to="/profesores">Profesores</router-link> |
      <router-link to="/instituciones">Instituciones</router-link>
    </nav>
    <router-view></router-view> <! -- Aquí se mostrarán las vistas -->
  </div>
</template>
```

Instala las dependencias adicionales (como axios y vue-router):
```
npm install axios vue-router
```
O con yarn:
```
yarn add axios vue-router
```
