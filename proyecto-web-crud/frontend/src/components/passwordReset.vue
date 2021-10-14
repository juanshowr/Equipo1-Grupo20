<template>
<div>
  <!--Contenedor del formulario-->
  <div class="container-lg">
    <!--Cabecera del contenedor-->
    <header class="head-lg">
      <div class="title-bar">
        <router-link class="btn-home" to="/login">X</router-link><!--botón de cerrar el formulario-->
      </div>
      <img class="logo-lg" src="../assets/logoB.png" alt="Logo de El Galpón"/><!--logotipo de la empresa-->
      <h1>Restablecer contraseña</h1>
    </header>
    <!--Inicio del formulario-->
    <form>
      <div class="d-grid gap-0">
        <!--Campo para escribir el email-->
        <input type="email" class="writeuser" placeholder="Escriba aquí su correo electrónico">
        <!--Campo para escribir el código de acceso-->
        <input type="text" class="writeuser" placeholder="Escriba aquí el código de acceso">
      </div>
      <!--Botón de enviar-->
      <div class="d-grid gap-0">
        <button class="btn btn-primary btn-sm btn-block" v-on:click.prevent="enviarCodigo" enabled="false">Solicitar código</button>
      </div>
    </form>
  </div>
</div>

</template>


<script>
  export default {
    methods: {
      enviarCodigo(){
        alert("Procedimiento en edición")
      }
    }
  };
</script>

<style>
* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
.container-lg {
    margin: 3rem auto;
    max-width: 30rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-image: linear-gradient(green, yellow, orange);
    text-align: center;
}
.btn-home {
    width: 16px;
    height: 16px;
    float: right;
}
.logo-lg {
    width: 48px;
    height: 64px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.writeuser {
    position: block;
    width: 100%;
    left: 45%;
    margin-bottom: 10px;
}
</style>
