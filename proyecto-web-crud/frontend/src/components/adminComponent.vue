<template>
  <div>
    
    <div class="col-auto text-center"><h1> ADMINISTRACION</h1> </div>


    <div>
        <router-link class="nav-link btn btn-primary btn-lg" to="/inventory">ir a inventario</router-link>
        <router-link class="nav-link btn btn btn-success btn-lg" to="/list-user">ir a usuarios</router-link>
        <router-link class="nav-link btn btn-info btn-lg" to="/viewcontact">ir a Mensajes</router-link>
    </div>
      <br><br><br><br><br>
  </div>
    
</template>


    <script>
    export default {
      name: 'admin',
      props: {
        msg: String
      }
    }
    </script>