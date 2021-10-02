<template>
  <div><p> Aqui va el login</p> 

    <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/admin">Como Admin</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/">Como Usuario</router-link></li>

    </ul>

  </div>
    
</template>


    <script>
    export default {
      name: 'Login',
      props: {
        msg: String
      }
    }
    </script>