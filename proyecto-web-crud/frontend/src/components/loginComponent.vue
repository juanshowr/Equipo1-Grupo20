<template>
  <div>

            <!--Contenedor del formulario-->
        <div class="container-lg">
            <!--Cabecera del contenedor-->
            <header class="head-lg">
                <div class="title-bar">
                    <router-link class="btn-home" to="/">X</router-link><!--botón de cerrar el formulario-->
                </div>
                <img class="logo-lg" src="../assets/logoB.png" alt="Logo de El Galpón"/><!--logotipo de la empresa-->
                <h1>Ingresa a tu cuenta</h1>
                <!--Radio buttons-->
                <input type="radio" id="rbtnadmin" name="tipoAcceso" value="admin">
                <label class="etqradiobtn" for="rbtnadmin">Como Admin</label>
                <input type="radio" id="rbtnuser" name="tipoAcceso" value="user" checked>
                <label class="etqradiobtn" for="rbtnuser">Como Usuario</label>
            </header>
            <!--Formulario del login-->
            <form>
                <!--Campo para escribir el email-->
                <div class="containeremail">
                    <label class="lbllogin" for="useremail">Correo electrónico:</label>
                    <img class="iconlog" src="../assets/email.png" alt=""/>
                    <input type="email" name="useremail" class="writeuser" value="">
                </div>
                <!--Campo para escribir el password-->
                <div class="containerpwd">
                    <label class="lbllogin" for="userpwd">Contraseña:</label>
                    <img class="iconlog" src="../assets/clave.png"/>
                    <input type="password" name="userpwd" class="writeuser" value="">
                </div>
                <!--Botón para loguearse-->
                <div class="d-grid gap-0">
                    <button class="btn btn-primary btn-lg btn-block" @click.prevent="gotoUser">Ingresar</button>
                    <a href="/resetpwd" class="btn btn-link" tabindex="-1" role="button" small-font-size="2">¿Olvidaste tu contraseña?, haz click aquí</a>
                </div>
                <!--Botón para registrarse-->
                <div class="d-grid gap-0">
                    <label class="etqRegistro">¿No tienes cuenta en nuestra tienda?</label><br>
                    <router-link class="btn btn-light" to="/create-user">Crea una cuenta!</router-link>
                </div>
            </form>
        </div>
  </div>    
</template>


<script>
    export default {
        data() {
            return {
            email: "",
            pwd: "",
            ruta: ""
            };
        },
        methods: {
            gotoUser(){
                if(document.getElementById("rbtnuser").checked){
                    this.$router.push("/");
                } else{
                    this.$router.push("/admin");
                }
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
  .iconlog {
      margin-left: 10px;
      margin-top: 0px;
      margin-right: 10px;
      margin-bottom: 0px;
      padding:0;
      margin-left: 10px;
      margin-top: 0px;
      margin-right: 10px;
      margin-bottom: 0px;
      padding:0;

      width: 16px;
      height: 16px;
  }
  .contenedorBoton {
      display:block;
      margin-top: 10px;
  }
  .contenedorBoton > button {
      width:80%;
      display: inline-flexbox;
      margin-left: 3rem;
      margin-right: auto;
      margin-bottom: 0px;
      margin-top: 0px;
 }
 .btn.btn-link {
     text-align:right;
     margin: 0;
 }
 .etqRegistro{
     font-weight: 400;
     color: #007bff;
     text-align: right;
 }
  .writeuser {
      position: block;
      left: 45%;
      margin-bottom: 10px;
  }
  .lbllogin {
      margin: auto;
      width: 152.12px;
      font-size: small;
      font-weight: bold;
      text-align: right;
      display: inline-block;
  }
  .etqradiobtn {
      margin-right: 25px;
      margin-left: 5px;
  }
</style>
