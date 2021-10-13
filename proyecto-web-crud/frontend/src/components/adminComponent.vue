<template>
  <div><p> Aqui va la ventana de administracion</p> 

    <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/inventory">ir a inventario</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/list-user">ir a usuarios</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/viewcontact">ir a Mensajes</router-link></li>
    </ul>

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