<template>
    <div class="container">
      <div class="left-section">
        <h1>Registrate</h1>
        <p>Es momento de empezar tu viaje como programador! Registrate ahora y cultiva tu futuro como programador.</p>
        <button>Iniciar sesión</button>
        <div class="logos">
          <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Logo INTRO">
          <img src="https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg" alt="Logo OGTIC">
        </div>
      </div>
      <div class="right-section">
        <h2>Registrate</h2>
        <input type="text" placeholder="Nombre completo">
        <input type="text" placeholder="Matrícula">
        <input type="password" placeholder="Contraseña">
        <button class="register-button">Iniciar Sección</button>
      </div>
    </div>
  </template>
  <style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .container {
    display: flex;
    width: 900px;
    height: 500px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    border-radius: 9px;
  }
  
  .left-section {
    width: 40%;
    background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url("https://www.kaspersky.es/content/es-es/images/repository/isc/2017-images/web-img-23.jpg"); /* Gradient overlay */
    background-size: cover;
    background-position: center;
    color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .left-section h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .left-section p {
    font-size: 1.2em;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  
  .left-section button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }
  
  .logos {
    display: flex;
    justify-content: space-around;
  }
  
  .logos img {
    width: 100px;
  }
  
  .right-section {
    width: 60%;
    padding: 40px;
    display: flex;
    flex-direction: column;
  }
  
  .right-section h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  
  
  
  .right-section input {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px; /* Border radius for inputs */
  }
  
  .register-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px; /* Border radius for button */
    border: none; /* remove default border */
  }
  </style>